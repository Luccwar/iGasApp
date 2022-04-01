import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'
import { Icon } from '@ui-kitten/components'

import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return ( <>
        <Tab.Navigator>
            <Tab.Screen
                options={{ tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} /> }}
                name="Home"
                component={HomeScreen}
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

export default TabNavigator