import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import {colors} from "../../constants/styleconstants";

const Input =({isOutlined,...props})=>{
    return(
            <TextInput
                placeholderTextColor={colors.midGray}
                style={[styles.input,isOutlined?styles.outlined:null]}
                {...props}>

            </TextInput>
    )
}
export default React.memo(Input);