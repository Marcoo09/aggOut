import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {styles} from './styles';

export const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text>Home Screen</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
