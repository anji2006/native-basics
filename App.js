import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CoreComponents from './components/CoreComponents';
import Greet from './components/Greet';
import Styling from './components/Styling';
import Laylout from './components/Laylout';
import List from './components/List';
import Inputs from './components/Inputs';
import LoginForm from './components/LoginForm';
import APIHandling from './components/APIHandling';
import Navigation from './components/Navigation/Stack';
import Drawer from './components/Navigation/Drawer';
import Tab from './components/Navigation/Tab';
import DynamicUI from './components/DynamicUI';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello world!</Text>
      <StatusBar style="auto" /> */}
      {/* <CoreComponents /> */}
      {/* <Greet name="Anjii" />
      <Greet name="Pottii" /> */}
      {/* <Styling /> */}
      {/* <Laylout /> */}
      <DynamicUI />
      {/* <List ></List> */}
      {/* <Inputs /> */}
      {/* <LoginForm /> */}
      {/* <APIHandling /> */}
      {/* <Navigation /> */}
      {/* <Drawer /> */}
      {/* <Tab /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
