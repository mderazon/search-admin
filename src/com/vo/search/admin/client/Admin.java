package com.vo.search.admin.client;


import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.prefetch.Prefetcher;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.HeadElement;
import com.google.gwt.dom.client.LinkElement;
import com.google.gwt.event.logical.shared.OpenEvent;
import com.google.gwt.event.logical.shared.OpenHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.i18n.client.LocaleInfo;
import com.vo.search.admin.client.MainMenuTreeViewModel.Category;
import com.google.gwt.user.cellview.client.CellTree;
import com.google.gwt.user.cellview.client.TreeNode;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;

import java.util.ArrayList;
import java.util.List;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class Admin implements EntryPoint {

	/**
	 * The message displayed to the user when the server cannot be reached or
	 * returns an error.
	 */
	private static final String SERVER_ERROR = "An error occurred while "
			+ "attempting to contact the server. Please check your network "
			+ "connection and try again.";

	/**
	 * The name of the style theme used in app.
	 */
	public static final String THEME = "clean";

	/**
	 * The static images used throughout the app.
	 */
	public static final AdminResources images = GWT
			.create(AdminResources.class);

	/**
	 * Get the token for a given content widget.
	 * 
	 * @return the content widget token.
	 */
	public static String getContentWidgetToken(ContentWidget content) {
		return getContentWidgetToken(content.getClass());
	}

	/**
	 * Get the token for a given content widget.
	 * 
	 * @return the content widget token.
	 */
	public static <C extends ContentWidget> String getContentWidgetToken(
			Class<C> cwClass) {
		String className = cwClass.getName();
		className = className.substring(className.lastIndexOf('.') + 1);
		return "!" + className;
	}

	

	/**
	 * The main application shell.
	 */
	private AdminShell shell;

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {

		// Inject global styles.
		injectThemeStyleSheet();
		images.css().ensureInjected();

		// Initialize the constants.
		AdminConstants constants = GWT.create(AdminConstants.class);

		// Create the application shell.
		final SingleSelectionModel<ContentWidget> selectionModel = new SingleSelectionModel<ContentWidget>();
		final MainMenuTreeViewModel treeModel = new MainMenuTreeViewModel(
				constants, selectionModel);
		shell = new AdminShell(treeModel);
		RootLayoutPanel.get().add(shell);

		// Prefetch examples when opening the Category tree nodes.
		final List<Category> prefetched = new ArrayList<Category>();
		final CellTree mainMenu = shell.getMainMenu();
		mainMenu.addOpenHandler(new OpenHandler<TreeNode>() {
			public void onOpen(OpenEvent<TreeNode> event) {
				Object value = event.getTarget().getValue();
				if (!(value instanceof Category)) {
					return;
				}

				Category category = (Category) value;
				if (!prefetched.contains(category)) {
					prefetched.add(category);
					Prefetcher.prefetch(category.getSplitPoints());
				}
			}
		});

		// Always prefetch.
		Prefetcher.start();

		// Change the history token when a main menu item is selected.
		selectionModel
				.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
					public void onSelectionChange(SelectionChangeEvent event) {
						ContentWidget selected = selectionModel
								.getSelectedObject();
						if (selected != null) {
							History.newItem(getContentWidgetToken(selected),
									true);
						}
					}
				});

		// Setup a history handler to reselect the associate menu item.
		final ValueChangeHandler<String> historyHandler = new ValueChangeHandler<String>() {
			public void onValueChange(ValueChangeEvent<String> event) {
				// Get the content widget associated with the history token.
				ContentWidget contentWidget = treeModel
						.getContentWidgetForToken(event.getValue());
				if (contentWidget == null) {
					return;
				}

				// Expand the tree node associated with the content.
				Category category = treeModel
						.getCategoryForContentWidget(contentWidget);
				TreeNode node = mainMenu.getRootTreeNode();
				int childCount = node.getChildCount();
				for (int i = 0; i < childCount; i++) {
					if (node.getChildValue(i) == category) {
						node.setChildOpen(i, true, true);
						break;
					}
				}

				// Select the node in the tree.
				selectionModel.setSelected(contentWidget, true);

				// Display the content widget.
				displayContentWidget(contentWidget);
			}
		};
		History.addValueChangeHandler(historyHandler);

		// Show the initial example.
		if (History.getToken().length() > 0) {
			History.fireCurrentHistoryState();
		} else {
			// Use the first token available.
			TreeNode root = mainMenu.getRootTreeNode();
			TreeNode category = root.setChildOpen(0, true);
			ContentWidget content = (ContentWidget) category.getChildValue(0);
			selectionModel.setSelected(content, true);
		}
	}

	/**
	 * Set the content to the {@link ContentWidget}.
	 * 
	 * @param content
	 *            the {@link ContentWidget} to display
	 */
	private void displayContentWidget(ContentWidget content) {
		if (content == null) {
			return;
		}

		shell.setContent(content);
		Window.setTitle("Showcase of Features: " + content.getName());
	}

	/**
	 * Convenience method for getting the document's head element.
	 * 
	 * @return the document's head element
	 */
	private native HeadElement getHeadElement() /*-{
		return $doc.getElementsByTagName("head")[0];
	}-*/;

	/**
	 * Inject the GWT theme style sheet based on the RTL direction of the
	 * current locale.
	 */
	private void injectThemeStyleSheet() {
		// Choose the name style sheet based on the locale.
		String styleSheet = "gwt/" + THEME + "/" + THEME;
		styleSheet += LocaleInfo.getCurrentLocale().isRTL() ? "_rtl.css"
				: ".css";

		// Load the GWT theme style sheet
		String modulePath = GWT.getModuleBaseURL();
		LinkElement linkElem = Document.get().createLinkElement();
		linkElem.setRel("stylesheet");
		linkElem.setType("text/css");
		linkElem.setHref(modulePath + styleSheet);
		getHeadElement().appendChild(linkElem);
	}
}
