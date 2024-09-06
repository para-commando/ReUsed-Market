import React from 'react';
import { Alert, Image, Platform, Pressable, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';

function AlertComponent({alertMessage}) {
  const handleImgPress = (params) => {
    Alert.alert('Alert title text', alertMessage, [
      {
        text: 'Ignore',
        onPress: (event) => {
          console.log('Pressed on Ignore');
        },
      },
      {
        text: 'Act on it',
        onPress: (event) => {
          console.log('Pressed on Act On it');
        },
      },
    ]);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <Pressable onPress={handleImgPress}>
        <Image
          style={{
            width: 300,
            height: 500,
            objectFit: 'cover',
            marginTop: 10,
          }}
          source={require('../assets/para-commando.jpg')}
          fadeDuration={1000}
        />
      </Pressable>
    </SafeAreaView>
  );
}

export default AlertComponent;
