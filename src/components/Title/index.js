import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Title =({children, type})=>{
    return(
            <Text style={type==='primary'?styles.primary:styles.secondary}>
                {children}
            </Text>
    )
}
export default React.memo(Title);