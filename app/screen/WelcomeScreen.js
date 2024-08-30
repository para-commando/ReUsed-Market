import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

function WelcomeScreen() {
  const ss = Dimensions.get('screen');
  console.log('🚀 ~ WelcomeScreen ~ ss:', ss);
  return (
    <ImageBackground
       resizeMode='cover'
      style={[styles.background, ]}
      source={require('../assets/para-commando.jpg')}
    >
      <View style={styles.buttonStyle}>
        <TouchableOpacity>
          <Text style={{ color: 'white', fontSize:15, fontWeight:"600", padding:20,bottom:5}}>Para-Commando Deployed</Text>
          
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    alignSelf: 'flex-start',
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 'auto',
    height: 50,
  },
});
export default WelcomeScreen;
