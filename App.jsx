import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import AddEntry from './components/AddEntry';
import History from './components/History';
import store from './redux/store';
import { purple } from './utils/colors';

const Tab = createBottomTabNavigator();

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'History') {
                  iconName = 'ios-bookmarks';
                } else if (route.name === 'Add Entry') {
                  iconName = 'ios-add-circle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              }
            })}
          >
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Add Entry" component={AddEntry} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
