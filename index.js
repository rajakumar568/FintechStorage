/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent('FintechAuthenticator', () => FintechAuthenticator);





const firebaseConfig = {
    apiKey: "AIzaSyCNIJ9mhjequeke286pDE6BWKlGia4HBNk",
    authDomain: "fintech-storage.firebaseapp.com",
    projectId: "fintech-storage",
    storageBucket: "fintech-storage.appspot.com",
    messagingSenderId: "441439216842",
    appId: "1:441439216842:web:a4ba0a5546066a7d544033",
    measurementId: "G-4XSD5SHK3R"
  };
  

AppRegistry.registerComponent(appName, () => App);




