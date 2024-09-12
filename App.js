import { StyleSheet, Platform, StatusBar } from 'react-native';
// test comment

import WelcomeScreen from './app/screen/WelcomeScreen';
import SampleScreen from './app/screen/SampleScreen';
import ScrollViewScreen from './app/screen/ScrollViewScreen';
import ButtonComponent from './app/screen/ButtonComponent';
import PressableComponent from './app/screen/PressableComponent';
import ModalComponent from './app/screen/ModalComponent';
import StatusBarComponent from './app/screen/StatusBarComponent';
import ActivityIndicatorComp from './app/screen/ActivityIndicatorComp';
import AlertComponent from './app/screen/AlertComponent';
export default function App() {
  return <AlertComponent alertMessage="This is alert Message" />;
}

