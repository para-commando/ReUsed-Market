import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

function StatusBarComponent() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding: 60,
      }}
    >
      <StatusBar
        backgroundColor='lightgreen'
        animated={true}
        barStyle='default'
        hidden={false}
      />
    </SafeAreaView>
  );
}

export default StatusBarComponent;
