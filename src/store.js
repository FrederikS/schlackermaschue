/* @flow */
import { combineReducers } from 'redux';
import createStore from 'phenomic/lib/redux/createStore';
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from 'phenomic/lib/redux/modules';

/* eslint-disable no-underscore-dangle */
// $FlowFixMe
const store = createStore(combineReducers(phenomicReducers), {
  ...(typeof window !== 'undefined' && window.__INITIAL_STATE__),
});
/* eslint-enable */

export default store;
