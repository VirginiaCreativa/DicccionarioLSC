import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createReduxStore, { history } from './redux/store/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Spinner from './common/Spinner/Spinner';

const Loader = () => <Spinner heighted="100vh" />;

const initialState = {};
const store = createReduxStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={Loader()}>
        <App />
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
