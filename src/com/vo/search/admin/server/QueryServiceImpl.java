package com.vo.search.admin.server;

import com.vo.search.admin.client.content.widgets.ContentInfo;
import com.vo.search.admin.client.content.widgets.QueryResult;
import com.vo.search.admin.client.content.widgets.QueryService;
import com.vo.search.admin.shared.FieldVerifier;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;

/**
 * The server side implementation of the RPC service.
 */
@SuppressWarnings("serial")
public class QueryServiceImpl extends RemoteServiceServlet implements
		QueryService {

	public QueryResult queryServer(String input) throws IllegalArgumentException {
		// Verify that the input is valid. 
		if (!FieldVerifier.isValidName(input)) {
			// If the input is not valid, throw an IllegalArgumentException back to
			// the client.
			throw new IllegalArgumentException(
					"Name must be at least 4 characters long");
		}

		String serverInfo = getServletContext().getServerInfo();
		String userAgent = getThreadLocalRequest().getHeader("User-Agent");

		// Escape data from the client to avoid cross-site script vulnerabilities.
		input = escapeHtml(input);
		userAgent = escapeHtml(userAgent);
		QueryResult qs = new QueryResult();
		generateMockResults(qs);
		return qs;
	}

	private void generateMockResults(QueryResult qs) {
		qs.addColumn("Name", "Description");
		
		ContentInfo c1 = new ContentInfo(0);
		c1.insertValue("Name", "Gone with the wind");
		c1.insertValue("Description", "Bla Bla Nice movie");
		
		ContentInfo c2 = new ContentInfo(1);
		c2.insertValue("Name", "Bad Boys II");
		c2.insertValue("Description", "Two cops bla bla bla");
		
		qs.addContent(c1);
		qs.addContent(c2);
	}

	/**
	 * Escape an html string. Escaping data received from the client helps to
	 * prevent cross-site script vulnerabilities.
	 * 
	 * @param html the html string to escape
	 * @return the escaped string
	 */
	private String escapeHtml(String html) {
		if (html == null) {
			return null;
		}
		return html.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
				.replaceAll(">", "&gt;");
	}
}
