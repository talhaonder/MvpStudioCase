import React from 'react';
import AppNavigator from './src/navigation';
if (__DEV__) {
  require('./ReactotronConfig');
}
export default function App() {
  return <AppNavigator />;
}
