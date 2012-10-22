package com.vo.search.admin.client.content.widgets;


import java.io.Serializable;
import java.util.HashMap;

import com.google.gwt.view.client.ProvidesKey;

public class ContentInfo implements Comparable<ContentInfo>, Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * The key provider that provides the unique ID of a content.
	 */
	public static final ProvidesKey<ContentInfo> KEY_PROVIDER = new ProvidesKey<ContentInfo>() {
		public Object getKey(ContentInfo item) {
			return item == null ? null : item.getId();
		}
	};

	private Integer id;
	// each entry is column-value pair
	private HashMap<String, String> keyValueList = new HashMap<String, String>();

	public ContentInfo() {
		this.id = -1;
	}
	/**
	 * @param id the content id
	 */
	public ContentInfo(int id) {
		this.id = id;
	}

	/**
	 * @return content id
	 */
	protected Integer getId() {
		return this.id;
	}

	public int compareTo(ContentInfo o) {
		return id.compareTo(o.getId());
	}

	@Override
	public boolean equals(Object o) {
		if (o instanceof ContentInfo) {
			return id == ((ContentInfo) o).getId();
		}
		return false;
	}
	
	/**
	 * @param key - the name of the column in the data grid
	 * @return the value of the content corresponding to the key
	 */
	public String getValue(String key) {
		return keyValueList.get(key);
	}
	
	/**
	 * @param key - the name of the column in the data grid 
	 * @param value - the value of the content corresponding to the key
	 * @return the value of the previous item associated with key or null if new entry
	 */
	public String insertValue(String key, String value) {
		return keyValueList.put(key, value);
	}

}
