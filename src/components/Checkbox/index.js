import React from 'react';
import {TouchableOpacity, Text, Pressable, View} from 'react-native';
import styles from './styles';

const Checkbox =({checked, onPress})=>{
    return(
            <Pressable onPress={()=>onPress()} style={[styles.container,checked?styles.selectedBorderWidth:null]}>
                {checked?(
                    <View style={styles.innerSquare}/>
                ):null}
            </Pressable>
    )
}
export default React.memo(Checkbox);