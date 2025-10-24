import { PageHandler } from './PageHandler';
import { Dependencies } from '../../oc/ObjectContainer';
import { ActionTypes } from '../../router/ActionTypes';
import { Window } from '../../window/Window';
import { ManagedPage, PageAction } from '../PageTypes';

export class PageNavigationHandler extends PageHandler {
  protected _window: Window;

  #preManaged = false;

  static $dependencies: Dependencies = [Window];

  /**
   * @param window The utility for manipulating the global context
   *        and global client-side-specific APIs.
   */
  constructor(window: Window) {
    super();

    /**
     * The utility for manipulating the global context and global
     * client-side-specific APIs.
     */
    this._window = window;
  }

  /**
   * @inheritDoc
   */
  init() {
    // Setup history object to leave the scrolling to us and to not interfere
    const browserWindow = this._window.getWindow();

    if (browserWindow && 'scrollRestoration' in browserWindow.history) {
      browserWindow.history.scrollRestoration = 'manual';
    }
  }

  /**
   * @inheritDoc
   */
  handlePreManagedState(
    managedPage: ManagedPage,
    nextManagedPage: ManagedPage,
    action: PageAction
  ) {
    const { options } = nextManagedPage;

    /**
     * Ignore first preManaged call, because this behavior
     * is already set correctly by the browser.
     */
    if (!this.#preManaged) {
      this.#preManaged = true;

      return;
    }

    if (
      managedPage &&
      action &&
      action.type !== ActionTypes.POP_STATE &&
      action.type !== ActionTypes.ERROR
    ) {
      const isRedirection = action.type === ActionTypes.REDIRECT;

      if (!isRedirection) {
        this._saveScrollHistory();
      }

      this._setAddressBar(action.url as string, isRedirection);
    }

    // FIXME autoscroll will probably always be defined
    if (options?.autoScroll) {
      this._scrollTo({ x: 0, y: 0 });
    }
  }

  /**
   * @inheritDoc
   */
  handlePostManagedState(
    managedPage: ManagedPage,
    previousManagedPage: ManagedPage,
    action: PageAction
  ) {
    const { event } = action;
    const { options } = managedPage;

    // FIXME autoscroll will probably always be defined
    if (event?.state?.scroll && options?.autoScroll) {
      this._scrollTo(event?.state.scroll);
    }
  }

  /**
   * Save user's scroll state to history.
   *
   * Replace scroll values in current state for actual scroll values in
   * document.
   */
  _saveScrollHistory() {
    const url = this._window.getUrl();
    const scroll = {
      x: this._window.getScrollX(),
      y: this._window.getScrollY(),
    };
    const state = { url, scroll };

    const oldState = this._window.getHistoryState();
    const newState = Object.assign({}, oldState, state);

    this._window.replaceState(newState, '', url);
  }

  /**
   * Scrolls to give coordinates on a page.
   * Uses requestAnimationFrame to ensure React has finished rendering
   * and the browser has completed layout/paint before scrolling.
   */
  _scrollTo({ x = 0, y = 0 }) {
    const browserWindow = this._window.getWindow();

    if (!browserWindow) {
      return;
    }

    /**
     * Use double RAF to ensure browser has completed layout and paint
     * - First RAF: scheduled for next frame
     * - Second RAF: ensures layout is complete and stable
     */
    browserWindow.requestAnimationFrame(() => {
      browserWindow.requestAnimationFrame(() => {
        this._window.scrollTo(x, y);
      });
    });
  }

  /**
   * Sets the provided URL to the browser's address bar by pushing or replacing a new
   * state to the history.
   *
   * The state object pushed to or replaced in the history will be an object with the
   * following structure: `{url: string}`. The `url` field will
   * be set to the provided URL.
   *
   * @param url The URL.
   * @param isRedirection If replaceState should be used instead of pushState.
   */
  _setAddressBar(url: string, isRedirection: boolean) {
    const scroll = {
      x: 0,
      y: 0,
    };
    const state = { url, scroll };

    if (isRedirection) {
      this._window.replaceState(state, '', url);
    } else {
      this._window.pushState(state, '', url);
    }
  }
}
