import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Image,
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions
 } from 'react-native';

import {useDeviceOrientation} from '@react-native-community/hooks'

export default function App() {
  let x = 5;
  const handleTextPress = (params) => {
    console.log('Text pressed');
    Alert.alert('Alert title text', 'This is red alert', [
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
  const handleImagePress = (params) => {
    console.log('Image pressed');
  };
  const handleButtonPress = (params) => {
    console.log('Button pressed');
    alert('button tapped');
  };
  console.log('x is 5', x);
  console.log(Dimensions.get("screen"));
  console.log('useDeviceOrientation', useDeviceOrientation());
  const deviceOrientation = useDeviceOrientation();
  const isLandscape = deviceOrientation ==='landscape';
  const isPortrait = deviceOrientation === 'portrait';
  return (
    <SafeAreaView style={[styles.container]}>
      <Text
        style={[styles.textStyles]}
        numberOfLines={2}
        onPress={handleTextPress}
      >
        Ghatak Commando Deployed for Operation BlindSpot
      </Text>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          style={[styles.imageStyles]}
          source={require('./assets/para-commando.jpg')}
          fadeDuration={1000}
        />
      </TouchableOpacity>
      {/* using remotely hosted images */}

      <Image
        style={styles.imageStyles}
        source={{ uri: 'https://picsum.photos/200/300' }}
        blurRadius={1}
        fadeDuration={3000}
      />

      <Button color='orange' title='Click here' onPress={handleButtonPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636B2F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  textStyles: {
    color: 'white',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  imageStyles: {
    width: 50,
    height: 100,
    objectFit: 'cover',
    marginTop: 10,
  },
  buttonStyles: {
    // borderRadius: 20,
  },
});
