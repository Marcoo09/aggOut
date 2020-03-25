import {StyleSheet} from 'react-native';
import {Palette} from '../../style/Palette';

export const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: Palette.clearBlue,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tab: {
    borderColor: Palette.clearBlue,
    height: 36,
  },
  text: {
    color: Palette.clearBlue,
  },
});
