import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { get, set, merge } from 'lodash';
import { Counter, Dummy } from './app/components';
import './theme/index.css';

(() => {
  const obj = {
    a: 1, b: 2, c: { d: 3 }, e: { f: { g: 4 } }
  };

  const target = document.querySelector('main');

  ReactDOM.render(
    <div>
      <Dummy>
        <Fragment>
          <p>{JSON.stringify(get(obj, 'e.f.g'))}</p>
          <p>{JSON.stringify(set(obj, 'h', 5))}</p>
          <p>{JSON.stringify(merge(obj, { i: 6 }))}</p>
        </Fragment>
      </Dummy>

      <Counter initialValue={0} />
    </div>, target);
})();

if(process.env.NODE_ENV === 'production' && offlineRuntime !== undefined) {
  offlineRuntime.install({
    onUpdating: () => undefined,
    onUpdateReady: () => offlineRuntime.applyUpdate(),
    onUpdated: () => { window.onbeforeunload = null; window.location.reload(true); },
    onUpdateFailed: () => undefined
  });
}
