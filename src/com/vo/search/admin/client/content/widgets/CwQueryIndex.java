/*
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package com.vo.search.admin.client.content.widgets;

import java.util.Comparator;
import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.client.Constants;
import com.google.gwt.i18n.shared.AnyRtlDirectionEstimator;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.ColumnSortEvent.ListHandler;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.cellview.client.SimplePager.TextLocation;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.view.client.DefaultSelectionEventManager;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.MultiSelectionModel;
import com.google.gwt.view.client.SelectionModel;
import com.vo.search.admin.client.AdminAnnotations.AdminData;
import com.vo.search.admin.client.ContentWidget;

public class CwQueryIndex extends ContentWidget {

	/**
	 * The UiBinder interface used by this example.
	 */
	interface Binder extends UiBinder<Widget, CwQueryIndex> {
	}

	/**
	 * The constants used in this Content Widget.
	 */
	public static interface CwConstants extends Constants {
		String cwQueryIndexEnterQuery();

		String cwQueryIndexDescription();

		String cwQueryIndexName();

		String cwQueryIndexButtonSubmit();

		// String cwDataGridColumnAddress();
		//
		// String cwDataGridColumnAge();
		//
		// String cwDataGridColumnCategory();
		//
		// String cwDataGridColumnFirstName();
		//
		// String cwDataGridColumnLastName();
		//
		// String cwDataGridDescription();
		//
		String cwDataGridEmpty();
		//
		// String cwDataGridName();

	}

	@AdminData
	@UiField(provided = true)
	Label label;

	@AdminData
	@UiField(provided = true)
	TextBox searchBox;

	@AdminData
	@UiField(provided = true)
	Button submitButton;

	/**
	 * The main DataGrid.
	 */
	@AdminData
	@UiField(provided = true)
	DataGrid<ContentInfo> dataGrid;

	/**
	 * The pager used to change the range of data.
	 */
	@AdminData
	@UiField(provided = true)
	SimplePager pager;

	/**
	 * The provider that holds the list of content
	 */
	private ListDataProvider<ContentInfo> dataProvider;
	
	/**
	 * An instance of the constants.
	 */
	@AdminData
	private final CwConstants constants;

	/**
	 * Create a remote service proxy to talk to the server-side Greeting
	 * service.
	 */
	protected final QueryServiceAsync greetingService = GWT
			.create(QueryService.class);

	/**
	 * Constructor.
	 * 
	 * @param constants
	 *            the constants
	 */
	public CwQueryIndex(CwConstants constants) {
		super(constants.cwQueryIndexName(),
				constants.cwQueryIndexDescription(), false);
		this.constants = constants;
	}

	@Override
	public boolean hasMargins() {
		return false;
	}

	@Override
	public boolean hasScrollableContent() {
		return false;
	}

	/**
	 * Initialize this widget.
	 */
	@Override
	public Widget onInitialize() {

		
		// initialize search box
		searchBox = new TextBox();
		searchBox.ensureDebugId("cwBasicText-textbox");
		// Set the text box to automatically adjust its direction according
		// to the input text. Use the Any-RTL heuristic, which sets an RTL
		// direction
		// iff the text contains at least one RTL character.
		searchBox.setDirectionEstimator(AnyRtlDirectionEstimator.get());

		// innitialize label
		label = new Label(constants.cwQueryIndexEnterQuery());
		label.ensureDebugId("cwQueryIndex-label");
		// initialize submit button
		submitButton = new Button(constants.cwQueryIndexButtonSubmit());
		submitButton.ensureDebugId("cwBasicButton-normal");
		
		// Create the popup dialog box
		final DialogBox dialogBox = new DialogBox();
		dialogBox.setText("Remote Procedure Call");
		dialogBox.setAnimationEnabled(true);


		// Set a key provider that provides a unique key for each content.
		dataGrid = new DataGrid<ContentInfo>(ContentInfo.KEY_PROVIDER);


		// Set the message to display when the table is empty.
		dataGrid.setWidth("100%");
		dataGrid.setEmptyTableWidget(new Label(constants.cwDataGridEmpty()));
		// Initialize data provider
		if (dataProvider == null) {
			dataProvider = new ListDataProvider<ContentInfo>();
		}
		dataProvider.addDataDisplay(dataGrid);

		// Create a Pager to control the table.
		SimplePager.Resources pagerResources = GWT
				.create(SimplePager.Resources.class);
		pager = new SimplePager(TextLocation.CENTER, pagerResources, false, 0,
				true);
		pager.setDisplay(dataGrid);


		// Create a handler for the sendButton and nameField
		class MyHandler implements ClickHandler {
			/**
			 * Fired when the user clicks on the sendButton.
			 */
			public void onClick(ClickEvent event) {
				sendQueryToServer();
			}

			/**
			 * Send the name from the nameField to the server and wait for a
			 * response.
			 */
			private void sendQueryToServer() {
				String queryToServer = searchBox.getText();
				// Then, we send the input to the server.

				greetingService.queryServer(queryToServer,
						new AsyncCallback<QueryResult>() {
							public void onFailure(Throwable caught) {
								// Show the RPC error message to the user
								dialogBox
										.setText("Remote Procedure Call - Failure");
								dialogBox.center();
								submitButton.setEnabled(false);
							}

							public void onSuccess(QueryResult result) {
								// Initialize the columns.
								dataProvider.getList().clear();
								dataProvider.setList(result.getResults());
								initTableData(result);
								
							}
						});
			}
		}

		// Add a handler to send the name to the server
		MyHandler handler = new MyHandler();
		submitButton.addClickHandler(handler);

		// Create the UiBinder.
		Binder uiBinder = GWT.create(Binder.class);
		return uiBinder.createAndBindUi(this);

	}

	/**
	 * Add the columns to the table.
	 */
	private void initTableData(QueryResult result) {
		for (int i = dataGrid.getColumnCount() - 1; i >= 0; i--) {
			dataGrid.removeColumn(i);
		}
		// Attach a column sort handler to the ListDataProvider to sort the list.
	    ListHandler<ContentInfo> sortHandler =
	        new ListHandler<ContentInfo>(dataProvider.getList());
	    dataGrid.addColumnSortHandler(sortHandler);
	    
		// add special id column
		List<String> columns = result.getColumns();
		TextColumn<ContentInfo> idCol = new TextColumn<ContentInfo>() {
			@Override
			public String getValue(ContentInfo object) {
				return object.getId().toString();
			}
		};
		idCol.setSortable(true);
		sortHandler.setComparator(idCol, new Comparator<ContentInfo>() {
		      public int compare(ContentInfo o1, ContentInfo o2) {
		        return o1.getId().compareTo(o2.getId());
		      }
		    });
		dataGrid.addColumn(idCol, "id");
		dataGrid.setColumnWidth(idCol, 5, Unit.PCT);

		// add each column dynamically from the result list
		for (final String columnName : columns) {
			TextColumn<ContentInfo> col = new TextColumn<ContentInfo>() {
				@Override
				public String getValue(ContentInfo object) {
					return object.getValue(columnName);
				}
			};
			col.setSortable(true);
		    sortHandler.setComparator(col, new Comparator<ContentInfo>() {
		      public int compare(ContentInfo o1, ContentInfo o2) {
		        return o1.getValue(columnName).compareTo(o2.getValue(columnName));
		      }
		    });
			dataGrid.addColumn(col, columnName);
			dataGrid.setColumnWidth(col, 20, Unit.PCT);
		}

	}

	@Override
	protected void asyncOnInitialize(final AsyncCallback<Widget> callback) {
		/*
		 * CheckBox is the first demo loaded, so go ahead and load it
		 * synchronously.
		 */
		callback.onSuccess(onInitialize());
	}
}
