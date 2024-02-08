
import { View, Text, LogBox, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from './component/HomePage';
import SignUpPage from './component/SignUpPage';
import SignInPage from './component/SignInPage';
import DrawerNavigator from './drawer/DrawerNavigator';
import Forgetpassword from './component/ForgetPassword';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
      {/* <Stack.Navigator initialRouteName='HomePage'> */}
        {/* <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/> */}
        <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name='SignInPage' component={SignInPage} options={{ headerShown: false }} />
        <Stack.Screen name='ForgetPassword' component={Forgetpassword} options={{ headerShown: false }} />
        <Stack.Screen name='SignUpPage' component={SignUpPage} options={{ headerShown: false }} />
        <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

    
  );
};

export default App




// App.js

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// // Import your pages
// import HomePage from './component/HomePage';
// import SignInPage from './component/SignInPage';
// import SignUpPage from './component/SignUpPage';
// import Dashboard from './component/Dashboard';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const AuthStack = () => (
//   <Stack.Navigator initialRouteName="HomePage" headerMode="none">
//     <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}
//     />
//     <Stack.Screen name="SignInPage" component={SignInPage} options={{ headerShown: false }}
//     />
//     <Stack.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false }}
//     />
//     <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}
//     />
//   </Stack.Navigator>
// );

// const DashboardStack = () => (
//   <Stack.Navigator initialRouteName="Dashboard">
//     <Stack.Screen name="Dashboard" component={Dashboard} />
//   </Stack.Navigator>
// );

// const App = () => (
//   <NavigationContainer>
//     <Stack.Navigator headerMode="none">
//       <Stack.Screen name="AuthStack" component={AuthStack} />
//       <Stack.Screen name="DashboardStack" component={DashboardStack} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default App;




// import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // Import your screens and navigators
// import WelcomeScreen from './component/WelcomeScreen';
// import SignInPage from './component/SignInPage';
// import ForgetPassword from './component/ForgetPassword';
// import SignUpPage from './component/SignUpPage';
// import DrawerNavigator from './drawer/DrawerNavigator';
// import HomePage from './component/HomePage';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <GestureHandlerRootView>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='HomePage'>
//           <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
//           <Stack.Screen name='SignInPage' component={SignInPage} options={{ headerShown: false }} />
//           <Stack.Screen name='ForgetPassword' component={ForgetPassword} options={{ headerShown: false }} />
//           <Stack.Screen name='SignUpPage' component={SignUpPage} options={{ headerShown: false }} />
//           <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// };

// export default App;


