package com.vo.search.admin.client.content.widgets;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * The client side stub for the RPC service.
 */
@RemoteServiceRelativePath("greet")
public interface QueryService extends RemoteService {
	QueryResult queryServer(String name) throws IllegalArgumentException;
}
