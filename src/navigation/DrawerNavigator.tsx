import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();


export function DrawerNavigator() {
    return <>
        <Drawer.Navigator>
            <Drawer.Screen
                options={{ drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} /> }}
                name="Home"
                component={HomeScreen}
            />
            <Drawer.Screen
                options={{ drawerIcon: ({ color, size }) => <Feather name="settings" color={color} size={size} /> }}
                name="Settings"
                component={SettingsScreen}
            />
        </Drawer.Navigator>
    </>
}