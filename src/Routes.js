/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Onboarding from "./screens/auth/onboarding";
import SignIn from "./screens/auth/Signin";
import SignUp from "./screens/auth/SignUp";
import auth from '@react-native-firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/app/Home";
import Tasks from "./screens/app/Tasks";
import AddTask from "./screens/app/AddTask";
import {Image, StyleSheet} from "react-native";
import DrawerContent from "./components/Drawer";
import {setUser} from "./store/user";
import {useDispatch, useSelector} from "react-redux";

const Stack= createStackNavigator();
const Drawer=createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes=()=> {
    const dispatch=useDispatch();
    const [initializing, setInitializing] = useState(true);
    const user= useSelector(state=> state.user?.data)

    // Handle user state changes
    function onAuthStateChanged(user) {
        console.log(user)
        dispatch(setUser(user));
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) {
        return null;
    }

    const Tabs=()=>(
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown:false}}>
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({focused})=>( <Image  style={styles.icon} source={focused?require('./assets/homeHighlighted.png'): require('./assets/home-2.png')}/>)}}/>
            <Tab.Screen name="Tasks" component={Tasks} options={{tabBarIcon:({focused})=>( <Image style={styles.icon} source={focused? require('./assets/calendarHighlighted.png'):require('./assets/calendar.png')}/>)}}/>
        </Tab.Navigator>
    )
    if(user){
        return (
            <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props)=><DrawerContent{...props}/>}>
                <Drawer.Screen name="Tabs" component={Tabs} />
                <Drawer.Screen name="AddTask" component={AddTask} />
            </Drawer.Navigator>
        );
    }
    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name={'Onboarding'} component={Onboarding}/>
                <Stack.Screen name={'SignIn'} component={SignIn}/>
                <Stack.Screen name={'SignUp'} component={SignUp}/>

            </Stack.Navigator>
    );
}
const styles=StyleSheet.create({
    icon:{
        width:24,
        height:24
    }
})

export default React.memo(Routes);
