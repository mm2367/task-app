import {Dimensions, StyleSheet} from 'react-native';
import {colors} from "../../../constants/styleconstants";
export const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    row:{
        flexDirection:'row',
        alignItem:'center',
        marginHorizontal:24
    },
    box:{
        backgroundColor:colors.lightGray,
        borderRadius:15,
        padding:22,
        marginHorizontal:24,
        marginVertical:72
    },
    title:{
        color:colors.purple,
        fontSize:12,
        marginTop:8

    },
    subtitle:{
        color:'rgba(64,52,114,0.5)'
    }

})

