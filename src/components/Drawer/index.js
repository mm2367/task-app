import React from 'react';
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {Linking, Text} from "react-native";
import auth from "@react-native-firebase/auth";
import styles from './styles';
import {PRIVACY_POLICY_LINK} from "../../constants/links";
const DrawerContent =(props)=>{
    const {navigation}=props;
        const logOut=()=>{
            auth()
                .signOut()
                .then(() => console.log('User signed out!'));
        }
    return(
        <DrawerContentScrollView {...props}>
            <Text style={styles.link} onPress={()=> navigation.navigate('Home')}>Home</Text>
            <Text style={styles.link} onPress={()=> navigation.navigate('Tasks')}>Tasks</Text>
            <Text style={styles.link} onPress={()=> Linking.openURL(PRIVACY_POLICY_LINK)}>Privacy Policy</Text>
            <Text style={styles.link} onPress={()=> Linking.openURL(PRIVACY_POLICY_LINK)}>Terms and Conditions</Text>
            <Text style={styles.link} onPress={()=>logOut()}>Log out</Text>

        </DrawerContentScrollView>
    )
}
export default React.memo(DrawerContent);