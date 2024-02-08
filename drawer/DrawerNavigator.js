import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from './Dashboard';
import ProfileView from './ProfileView';
import ChangePassword from './ChangePassword';
import { useColorScheme } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const scheme = useColorScheme();
  const MyTheme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#08618a',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      drawerStyle={{
        backgroundColor: MyTheme.colors.background, 
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }} />
      <Drawer.Screen name="ProfileView" component={ProfileView} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
