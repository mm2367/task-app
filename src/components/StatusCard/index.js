import React from 'react';
import getStyles from './styles';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";
const StatusCard =({label,count, type})=>{
    const onPress=()=>{

    }
    const styles=getStyles(type)
    const navigation =useNavigation('Tasks');

    return(
            <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.count}>{count}</Text>
            </Pressable>
    )
}
export default React.memo(StatusCard);