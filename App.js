import React from 'react';
import AppNavigator from './src/navigation';
if (__DEV__) {
  require('./ReactotronConfig');
}
import {Provider} from 'react-redux';
import store from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
