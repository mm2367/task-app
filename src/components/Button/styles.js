import { StyleSheet } from "react-native";
import {colors} from "../../constants/styleconstants";

const styles=StyleSheet.create({
    primary:{
        backgroundColor: colors.purple,
        flexDirection:'row',
        borderRadius:10,
        padding:13,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:8
    },
    secondary:{
        backgroundColor: colors.blue,

    },
    text:{
        color: colors.white,
        fontSize:16,
        fontWeight:'500'
    },
})

export default styles;