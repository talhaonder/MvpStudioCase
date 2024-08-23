import React, {Component} from 'react';
import FlightsScreen from './src/screens/FlightsScreen';
if (__DEV__) {
  require('./ReactotronConfig');
}
export default class App extends Component {
  render() {
    return <FlightsScreen />;
  }
}
