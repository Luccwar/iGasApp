import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export function TabNavigator(){
    return ( <>
        <Tab.Navigator screenOptions={{headerShown: false}} >
            <Tab.Screen
                options={{ tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />}}
                name="Home"
                component={DrawerNavigator}
            />
            <Tab.Screen
                options={{ tabBarIcon: ({ color, size }) => <Feather name="settings" color={color} size={size} /> }}
                name="Settings"
                component={SettingsScreen}
            />
        </Tab.Navigator>
    </>
    )
}

function DrawerNavigator() {
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