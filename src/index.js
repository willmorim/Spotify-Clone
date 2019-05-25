import React from 'react';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';
import { Provider } from 'react-redux';

import Routes from '~/routes';
import store from '~/store';

import Player from '~/components/Player';

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);

export default App;
