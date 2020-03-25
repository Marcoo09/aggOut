import {Platform} from 'react-native';
import {Font as FontAndroid} from './Font.android';
import {Font as FontIOS} from './Font.ios';

export const Font = Platform.select({
  android: FontAndroid,
  ios: FontIOS,
});
