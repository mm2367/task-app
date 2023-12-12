import { StyleSheet } from "react-native";
import {colors} from "../../constants/styleconstants";

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:24,
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        fontSize:16,
        color:colors.purple,
        fontWeight:'500'

    },
    icon:{
        fontSize:16,
        width:24,
        height:24
    },
})

export default styles;