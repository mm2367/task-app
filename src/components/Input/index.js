import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import {colors} from "../../constants/styleconstants";

const Input =({...props})=>{
    return(
            <TextInput
                placeholderTextColor={colors.midGray}
                style={styles.input}
                {...props}>

            </TextInput>
    )
}
export default React.memo(Input);