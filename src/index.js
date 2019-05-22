import React from 'react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';
import { Provider } from 'react-redux';

import Routes from '~/routes';
import store from '~/store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
