package com.vo.search.admin.client.content.widgets;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


public class QueryResult implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<String> columns = new ArrayList<String>();
	private List<ContentInfo> results = new ArrayList<ContentInfo>();

	

	public QueryResult() {

	}

	public List<String> getColumns() {
		return columns;
	}

	public List<ContentInfo> getResults() {
		return results;
	}

	public void addColumn(String... columnNames) {
		for (String columnName:columnNames) {
			columns.add(columnName);
		}		
	}
	
	public void addContent(ContentInfo content) {
		results.add(content);
	}
}
