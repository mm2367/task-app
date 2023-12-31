import { StyleSheet } from "react-native";
import {colors} from "../../constants/styleconstants";

const styles=StyleSheet.create({
    input:{
        backgroundColor: colors.lightGray,
        fontSize:15,
        paddingHorizontal:24,
        paddingVertical:13,
        borderRadius:10,
        color:colors.black,
        marginVertical:12

    },
    outlined:{
        backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.gray,
        marginHorizontal:24
    }
})

export default styles;