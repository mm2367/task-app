import React from 'react';
import styles from './styles';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";
const PlusIcon =()=>{
    const navigation =useNavigation();
    return(
            <Pressable style={styles.container} onPress={()=>navigation.navigate('AddTask')} hitSlop={8}>
                <Text style={styles.text}>+</Text>
            </Pressable>
    )
}
export default React.memo(PlusIcon);