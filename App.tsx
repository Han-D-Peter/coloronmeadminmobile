/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import WebView from 'react-native-webview';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView style={ styles.sectionContainer}>
       <WebView
        style={styles.webview}
        source={{uri: 'http://localhost:3000/'}}
        scalesPageToFit={false} // iOS에서 웹 콘텐츠 확대/축소 방지
        javaScriptEnabled={true}
        domStorageEnabled={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});



export default App;
