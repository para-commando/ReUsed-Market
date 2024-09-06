import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';

function PressableComponent() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <Pressable
        onPress={() => {
          console.log('Image is pressed using Pressable');
        }}
        onLongPress={() => {
          console.log('Image press is sensed by onLongPress');
        }}
        onPressOut={() => {
          console.log('Image press is sensed by onPressOut');
        }}
        onPressIn={() => {
          console.log('Image press is released and is sensed by onPressIn');
        }}
      >
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
      <Pressable
        onPress={() => {
          console.log('Text is Pressed using Pressable');
        }}
      >
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque qui a
          magnam vel voluptas, aut ipsum doloremque quis, ullam maxime
          perspiciatis excepturi quaerat architecto soluta. Excepturi
          repellendus exercitationem eveniet nulla? Ad illum, labore doloribus
          expedita ab eaque animi iusto reprehenderit ut tempore rerum nesciunt
          consequuntur, corporis iste exercitationem nam tempora. Ut, ducimus ex
          modi quia obcaecati earum. Explicabo fuga qui molestias, tempore
          aliquam quam corrupti recusandae commodi ex error a. Harum
          consequuntur cum vitae quos deleniti atque, voluptatum tempore aut
          commodi quidem assumenda ipsum ratione voluptas inventore esse
          eligendi suscipit libero accusantium. Cupiditate quam laudantium saepe
          magni alias.
        </Text>
      </Pressable>
    </View>
  );
}

export default PressableComponent;
