import React from 'react';
import { Button, Platform, SafeAreaView, StatusBar, View } from 'react-native';

function ButtonComponent() {
  return (
    <SafeAreaView
      style={{
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1,
        padding:60
      }}
    >
      <Button title='Press' onPress={()=>{console}} disabled={true} />
    </SafeAreaView>
  );
}

export default ButtonComponent;
