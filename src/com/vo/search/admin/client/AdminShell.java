package com.vo.search.admin.client;

import java.util.Date;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.TableCellElement;
import com.google.gwt.dom.client.TableElement;
import com.google.gwt.dom.client.Style.Display;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.http.client.UrlBuilder;
import com.google.gwt.i18n.client.LocaleInfo;

import com.vo.search.admin.client.ContentWidget;
import com.vo.search.admin.client.Admin;
import com.vo.search.admin.client.AdminShell;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.CellTree;
import com.google.gwt.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy;
import com.google.gwt.user.client.Cookies;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.Window.Location;
import com.google.gwt.user.client.ui.AbstractImagePrototype;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.ResizeComposite;
import com.google.gwt.user.client.ui.SimpleLayoutPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.view.client.TreeViewModel;

public class AdminShell extends ResizeComposite {

	interface AdminShellUiBinder extends UiBinder<Widget, AdminShell> {
	}

	/**
	 * The text color of the selected tab.
	 */
	private static final String SELECTED_TAB_COLOR = "#333333";

	private static AdminShellUiBinder uiBinder = GWT
			.create(AdminShellUiBinder.class);

	/**
	 * The panel that holds the content.
	 */
	@UiField
	SimpleLayoutPanel contentPanel;

	/**
	 * The container around the links at the top of the app.
	 */
	@UiField
	TableElement linkCell;
	/**
	 * A drop box used to change the locale.
	 */
	@UiField
	ListBox localeBox;

	/**
	 * The container around locale selection.
	 */
	@UiField
	TableCellElement localeSelectionCell;

	/**
	 * The main menu used to navigate to examples.
	 */
	@UiField(provided = true)
	CellTree mainMenu;

	/**
	 * The button used to show the example.
	 */
	@UiField
	Anchor tabExample;

	/**
	 * The current {@link ContentWidget} being displayed.
	 */
	private ContentWidget content;

	/**
	 * The html used to show a loading icon.
	 */
	private final String loadingHtml;

	/**
	 * Construct the {@link AdminShell}.
	 * 
	 * @param treeModel
	 *            the treeModel that backs the main menu
	 */
	public AdminShell(TreeViewModel treeModel) {
		AbstractImagePrototype proto = AbstractImagePrototype
				.create(Admin.images.loading());
		loadingHtml = proto.getHTML();

		// Create the cell tree.
		mainMenu = new CellTree(treeModel, null);
		mainMenu.setAnimationEnabled(true);
		mainMenu.setKeyboardSelectionPolicy(KeyboardSelectionPolicy.DISABLED);
		mainMenu.ensureDebugId("mainMenu");

		// Initialize the ui binder.
		initWidget(uiBinder.createAndBindUi(this));
		initializeLocaleBox();
		
		// In RTL mode, we need to set some attributes.
		if (LocaleInfo.getCurrentLocale().isRTL()) {
			localeSelectionCell.setAlign("left");
			linkCell.setPropertyString("align", "left");
		}

		// Handle events from the tabs.
		tabExample.addClickHandler(new ClickHandler() {
			public void onClick(ClickEvent event) {
				showExample();
			}
		});
		// Default to no content.
		contentPanel.ensureDebugId("contentPanel");
		setContent(null);

	}

	/**
	 * Returns the currently displayed content. (Used by tests.)
	 */
	public ContentWidget getContent() {
		return content;
	}

	/**
	 * Get the main menu used to select examples.
	 * 
	 * @return the main menu
	 */
	public CellTree getMainMenu() {
		return mainMenu;
	}

	/**
	 * Set the content to display.
	 * 
	 * @param content
	 *            the content
	 */
	public void setContent(final ContentWidget content) {

		this.content = content;
		if (content == null) {
			tabExample.setVisible(false);
			contentPanel.setWidget(null);
			return;
		}
		// Setup the options bar.
		tabExample.setVisible(true);

		// Show the widget.
		showExample();
	}

	/**
	 * Initialize the {@link ListBox} used for locale selection.
	 */
	private void initializeLocaleBox() {
		final String cookieName = LocaleInfo.getLocaleCookieName();
		final String queryParam = LocaleInfo.getLocaleQueryParam();
		if (cookieName == null && queryParam == null) {
			// if there is no way for us to affect the locale, don't show the
			// selector
			localeSelectionCell.getStyle().setDisplay(Display.NONE);
			return;
		}
		String currentLocale = LocaleInfo.getCurrentLocale().getLocaleName();
		if (currentLocale.equals("default")) {
			currentLocale = "en";
		}
		String[] localeNames = LocaleInfo.getAvailableLocaleNames();
		for (String localeName : localeNames) {
			if (!localeName.equals("default")) {
				String nativeName = LocaleInfo
						.getLocaleNativeDisplayName(localeName);
				localeBox.addItem(nativeName, localeName);
				if (localeName.equals(currentLocale)) {
					localeBox.setSelectedIndex(localeBox.getItemCount() - 1);
				}
			}
		}
		localeBox.addChangeHandler(new ChangeHandler() {
			@SuppressWarnings("deprecation")
			public void onChange(ChangeEvent event) {
				String localeName = localeBox.getValue(localeBox
						.getSelectedIndex());
				if (cookieName != null) {
					// expire in one year
					Date expires = new Date();
					expires.setYear(expires.getYear() + 1);
					Cookies.setCookie(cookieName, localeName, expires);
				}
				if (queryParam != null) {
					UrlBuilder builder = Location.createUrlBuilder()
							.setParameter(queryParam, localeName);
					Window.Location.replace(builder.buildString());
				} else {
					// If we are using only cookies, just reload
					Window.Location.reload();
				}
			}
		});
	}

	/**
	 * Show a example.
	 */
	private void showExample() {
		if (content == null) {
			return;
		}

		// Set the highlighted tab.
		tabExample.getElement().getStyle().setColor(SELECTED_TAB_COLOR);

		contentPanel.setWidget(content);
	}

}
