// Hot loading HRM Patch
import 'react-hot-loader/patch';
// fetch polyfill
import 'whatwg-fetch';
import phenomicClient from 'phenomic/lib/client';

import metadata from '../src/metadata';
import routes from '../src/routes';
import store from '../src/store';

phenomicClient({ metadata, routes, store });

// md files processed via phenomic-loader to JSON & generate collection
let mdContext = require.context('../content', true, /\.(md|markdown)$/);
mdContext.keys().forEach(mdContext);

// hot loading
if (module.hot) {
  /* eslint-disable no-underscore-dangle, global-require */
  // hot load md
  module.hot.accept(mdContext.id, () => {
    mdContext = require.context('../content', true, /\.(md|markdown)$/);
    const mdHotUpdater = require('phenomic/lib/client/hot-md').default;
    const requireUpdate = mdHotUpdater(mdContext, window.__COLLECTION__, store);
    mdContext.keys().forEach(requireUpdate);
  });
  /* eslint-enable no-underscore-dangle, global-require */

  // hot load app
  module.hot.accept(
    ['../src/metadata.js', '../src/routes.jsx', '../src/store.js'],
    () => phenomicClient({ metadata, routes, store })
  );
}
