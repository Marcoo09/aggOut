import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/scenes/home';
import {RootStack} from './src/navigation/RootStack';
import {Palette} from './src/style/Palette';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const screenOptions = {
  headerStyle: {
    backgroundColor: Palette.clearBlue,
  },
  headerTintColor: Palette.white,
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal" screenOptions={screenOptions}>
          <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
