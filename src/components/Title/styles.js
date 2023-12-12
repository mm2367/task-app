import { StyleSheet } from "react-native";
import {colors} from "../../constants/styleconstants";

const styles=StyleSheet.create({
    primary:{
        color: colors.black,
        fontSize:28,
        fontWeight:'bold',
        paddingVertical:24
    },
    secondary:{
        fontWeight:'400',
        color:colors.purple,
        paddingHorizontal:24
    }
})

export default styles;