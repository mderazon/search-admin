package com.vo.search.admin.client.content.widgets;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The async counterpart of <code>GreetingService</code>.
 */
public interface QueryServiceAsync {
	void queryServer(String input, AsyncCallback<QueryResult> asyncCallback)
			throws IllegalArgumentException;
}
