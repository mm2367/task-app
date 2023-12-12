import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button =({children, onPress,style,type})=>{
    return(
        <TouchableOpacity onPress={onPress} style={[styles.primary, type==='secondary'? styles.secondary:null,style]}>
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}
export default React.memo(Button);