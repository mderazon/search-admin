package com.vo.search.admin.client.content.widgets;

public class Query {

	private String queryString;

	public Query(String qs) {
		this.queryString = qs;
	}

	@Override
	public String toString() {
		return queryString;
	}
}
