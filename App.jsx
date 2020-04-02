import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import AddEntry from './components/AddEntry';
import EntryDetails from './components/EntryDetails';
import History from './components/History';
import Live from './components/Live';
import store from './redux/store';
import { purple, white } from './utils/colors';
import { setLocalNotification } from './utils/helpers';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'History') {
            iconName = 'ios-bookmarks';
          } else if (route.name === 'AddEntry') {
            iconName = 'ios-add-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="History" component={History} />
      <Tab.Screen
        name="AddEntry"
        component={AddEntry}
        options={{ title: 'Add Entry' }}
      />
      <Tab.Screen
        name="Live"
        component={Live}
        options={{
          tabBarIcon: props => <Ionicons name="ios-speedometer" {...props} />
        }}
      />
    </Tab.Navigator>
  );
};

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <Stack.Navigator
            screenOptions={{
              headerTintColor: white,
              headerStyle: {
                backgroundColor: purple
              }
            }}
          >
            <Stack.Screen name="Home" component={TabNavigation} />
            <Stack.Screen
              name="EntryDetails"
              component={EntryDetails}
              options={({ route }) => ({ title: route.params.entryId })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
