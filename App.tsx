import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/scenes/home';
import {RootStack} from './src/navigation/RootStack';
import {Palette} from './src/style/Palette';

const screenOptions = {
  headerStyle: {
    backgroundColor: Palette.clearBlue,
  },
  headerTintColor: Palette.white,
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" screenOptions={screenOptions}>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
