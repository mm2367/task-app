import { StyleSheet } from "react-native";
import {colors} from "../../constants/styleconstants";

export const styles = StyleSheet.create({
    item:{
        color:colors.blue,
        fontSize:12,
        fontWeight:"bold",
        textAlign:'center',
        lineHeight:14.52,
        overflow:'scroll',
        padding:8,
        paddingHorizontal:12,
        textTransform:'capitalize',

    },
    selectedItem:{
        color:colors.blue,
    },
    itemContainer:{
        marginRight:8,
        marginBottom:14,
        borderRadius:8,
        borderColor:colors.blue,
        borderWidth:1

    },
    selectItemContainer:{
        backgroundColor:colors.lightGray,
        borderColor:colors.lightGray,

    },
    flatListStyles:{
        marginTop:12,
    }
})