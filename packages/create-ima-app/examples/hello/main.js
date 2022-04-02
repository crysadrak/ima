import './less/app.less';

import * as ima from '@ima/core';
import initBindApp from 'app/config/bind';
import initRoutes from 'app/config/routes';
import initServicesApp from 'app/config/services';
import initSettings from 'app/config/settings';

let getInitialAppConfigFunctions = () => {
  return { initBindApp, initRoutes, initServicesApp, initSettings };
};

if (!$IMA.Test) {
  ima
    .onLoad()
    .then(() => {
      ima.reviveClientApp(getInitialAppConfigFunctions());
    })
    .catch(error => {
      if (error) {
        console.error(error);
      }
    });
}

if (module.hot) {
  module.hot.accept((err, { module }) => {
    module.hot.accept();
  });
}

export { getInitialAppConfigFunctions, ima };
