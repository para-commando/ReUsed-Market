import React from 'react';
import {
  Alert,
  Button,
  Image,
  Platform,
  Pressable,
  StatusBar,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native';

function AlertComponent({ alertMessage }) {
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
        borderRadius: 25,
        paddingHorizontal: 12,
        backgroundColor: 'black',
        marginHorizontal: 12,
        marginVertical: 2,
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
        <Button title='ooooow2w2' color='green' />
      </Pressable>
      <Pressable
          style={{
            backgroundColor: 'white', // Set button background color
            padding: 10,
            borderRadius: 5,
            shadowColor: 'blue', // Set shadow color
            shadowOffset: {
              width: 80,
              height: 50,
            },
            shadowOpacity: 0.4,
            shadowRadius: 4,
            elevation: 10,  
          }}
          onPress={handleImgPress} // Use this or any other handler
        >
          <Text
            style={{
              color: 'green', // Set text color
              textAlign: 'center',
            }}
          >
            ooooorrrrrrrr
          </Text>
        </Pressable>
    
    </SafeAreaView>
  );
}

export default AlertComponent;
