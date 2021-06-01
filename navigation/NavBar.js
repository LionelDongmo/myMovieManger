import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
//import { Search } from "../screens"
import { COLORS, icons } from "../constants"
import Search from "../Components/Search";
import Single from "../Components/Single";
import {TabIcon} from "../Components/Icons"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeBackgroundColor: COLORS.background2,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.primary,
                    borderTopColor: COLORS.background2,
                    height: 40
                }
            }}
        >
            <Tab.Screen
                name="Recherche"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Play"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.play_button}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();

const NavBar = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
            headerShown: false,
        }}

        initialRouteName={'Recherche'}
      >
        <Stack.Screen
          name="Recherche"
          component={Tabs}
        />
        <Stack.Screen
          name="Film"
          component={Single}
          options={{
              title : 'Détaille Film'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavBar;