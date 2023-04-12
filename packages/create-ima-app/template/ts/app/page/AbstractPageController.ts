import {
  AbstractController,
  CreateLoadedResources,
  MetaManager,
  RouteParams,
  Router,
  PageState,
} from '@ima/core';
import IMAjsShareImg from 'app/public/imajs-share.png';

/**
 * Basic page controller.
 */
export abstract class AbstractPageController<
  S extends PageState = {},
  R extends RouteParams = {}
> extends AbstractController<S, R> {
  /**
   * Set seo params.
   */
  setMetaParams(
    loadedResources: CreateLoadedResources<S>,
    metaManager: MetaManager,
    router: Router
  ): void {
    const title = 'IMA.js';
    const description =
      'IMA.js is isomorphic javascript application framework.';

    const url = router.getUrl();
    const domain = router.getDomain();
    const image = `${domain}/${IMAjsShareImg}`;

    metaManager
      .setTitle(title)
      .setMetaName('description', description)
      .setMetaName('keywords', 'IMA.js, isomorphic application, javascript')
      .setMetaName('twitter:title', title)
      .setMetaName('twitter:description', description)
      .setMetaName('twitter:card', 'summary')
      .setMetaName('twitter:image', image)
      .setMetaName('twitter:url', url)
      .setMetaProperty('og:title', title)
      .setMetaProperty('og:description', description)
      .setMetaProperty('og:type', 'website')
      .setMetaProperty('og:image', image)
      .setMetaProperty('og:url', url);
  }
}
