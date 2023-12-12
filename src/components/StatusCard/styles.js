import { StyleSheet } from "react-native";
import {colors} from "../../constants/styleconstants";

const getStyles=(type)=>StyleSheet.create({
    container:{
        borderRadius:15,
        backgroundColor:type==='error'? colors.lightRed: colors.lightGray,
        padding:12,
        marginRight:8,
        width:'30%'
    },
    label:{
        fontSize:10,
        marginBottom:13,
        color: type==='error'? colors.red:colors.blue,
    },
    count:{
        fontSize:20,
        color:type==='error'? colors.red: colors.blue,
        marginBottom:8,
        fontWeight:'500'
    }
})

export default getStyles;