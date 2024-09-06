
import React from 'react';
import { ActivityIndicator, Platform, SafeAreaView, StatusBar } from 'react-native';

function ActivityIndicatorComp() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: 60,
      }}
    >
   <ActivityIndicator  size={'large'} color='green' animating={true}/>

    </SafeAreaView>
  );
}

export default ActivityIndicatorComp;
