import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'
import SignInScreen from "../screens/SignInScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { AdressManage } from "../screens/AdressManageScreen";
import { AdressCreate } from "../screens/AdressCreateScreen";
import { OrderHistory } from "../screens/OrderHistoryScreen";
import { OrderInspect } from "../screens/OrderInspectScreen";
import { OrderList } from "../screens/OrderListScreen";
import { ProductList } from "../screens/ProductListScreen";
import { ProductCreate } from "../screens/ProductCreateScreen";
import { ReportGenerate } from "../screens/ReportGenerateScreen";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export function TabNavigator(){
    return ( <>
        <Tab.Navigator screenOptions={{headerShown: false}} >
            <Tab.Screen
                options={{ tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />}}
                name="Home"
                component={DrawerNavigatorHome}
            />
            <Tab.Screen
                options={{ tabBarIcon: ({ color, size }) => <Feather name="book-open" color={color} size={size} /> }}
                name="Pedidos"
                component={DrawerNavigatorOrder}
            />
            <Tab.Screen
                options={{ tabBarIcon: ({ color, size }) => <Feather name="package" color={color} size={size} /> }}
                name="Produtos"
                component={DrawerNavigatorProduct}
            />
        </Tab.Navigator>
    </>
    )
}

function DrawerNavigatorHome() {
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
            <Drawer.Screen
                options={{ drawerIcon: ({ color, size }) => <Feather name="file-plus" color={color} size={size} /> }}
                name="Gerar Relatório"
                component={ReportGenerate}
            />
            <Drawer.Screen
                options={{ drawerIcon: ({ color, size }) => <Feather name="map-pin" color={color} size={size} /> }}
                name="Endereços"
                component={AdressManage}
            />
            <Drawer.Screen
                options={{ drawerIcon: ({ color, size }) => <Feather name="log-out" color={color} size={size} /> }}
                name="Sair"
                component={SignInScreen}
            />
        </Drawer.Navigator>
    </>
}

function DrawerNavigatorOrder() {
    return <>
        <Drawer.Navigator>
            <Drawer.Screen
                options={{ drawerIcon: ({ color, size }) => <Feather name="list" color={color} size={size} /> }}
                name="Listagem de Pedidos"
                component={OrderList}
            />
            <Drawer.Screen
                options={{ drawerIcon: ({ color, size }) => <Feather name="file-text" color={color} size={size} /> }}
                name="Histórico de Pedidos"
                component={OrderHistory}
            />
        </Drawer.Navigator>
    </>
}

function DrawerNavigatorProduct() {
    return <>
        <Drawer.Navigator>
            <Drawer.Screen
                options={{ drawerIcon: ({ color, size }) => <Feather name="list" color={color} size={size} /> }}
                name="Listagem de Produtos"
                component={ProductList}
            />
            <Drawer.Screen
                options={{ drawerIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} /> }}
                name="Criação de Produtos"
                component={ProductCreate}
            />
        </Drawer.Navigator>
    </>
}