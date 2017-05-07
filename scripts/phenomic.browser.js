// Hot loading HRM Patch
import 'react-hot-loader/patch';
// fetch polyfill
import 'whatwg-fetch';
import phenomicClient from 'phenomic/lib/client';

/* eslint-disable import/extensions */
import metadata from '../src/metadata.js';
import routes from '../src/routes.jsx';
import store from '../src/store.js';
/* eslint-enable import/extensions */

phenomicClient({ metadata, routes, store });

require.context('../content', true, /\.(html|ico|jpe?g|png|gif)$/);

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
