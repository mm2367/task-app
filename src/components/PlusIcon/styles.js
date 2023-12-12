import { StyleSheet } from "react-native";
import {colors} from "../../constants/styleconstants";

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        backgroundColor:colors.blue,
        position:'absolute',
        bottom:24,
        right:24
    },
    text:{
        fontSize:32,
        marginTop:-2,
        color:colors.white,
        fontWeight:'600'

    },
})

export default styles;