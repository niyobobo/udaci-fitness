import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import AddEntry from './components/AddEntry';
import store from './redux/store';
import History from './components/History';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <View style={{height: 50}}/>
          <History/>
        </View>
      </Provider>
    );
  }
}

export default App;
