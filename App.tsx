// import { StatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { WebViewCont } from "./src/components/WebViewCont";
import {Colors} from "react-native/Libraries/NewAppScreen";

export default function App() {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
      />
      <WebViewCont />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
