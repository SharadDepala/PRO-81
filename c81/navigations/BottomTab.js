import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FeedScreen from '../screens/feed';
import CreatePostScreen from '../screens/createPost';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon : ({focused , color , size})=>{
                    if (route.name == "Feed"){
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (route.name == "CreateStory"){
                        iconName = focused ? 'create' : 'create-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;

                }
            })}
            tabBarOptions = {{
                activeTintColor:"white",
                inactiveTintColor : "red"
            }}
        >
                <Tab.Screen name = "Feed" component = {FeedScreen} />
                <Tab.Screen name = "CreateStory" component = {CreateStoryScreen} />

        </Tab.Navigator>
    )
}


export default BottomTabNavigator
