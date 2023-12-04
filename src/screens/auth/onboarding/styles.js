import {Dimensions, StyleSheet} from 'react-native';
import {colors} from "../../../constants/styleconstants";
export const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width:'100%',
        flex:1,
    },
    title:{
        color:colors.black,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:22
    },
    subtitle:{
        color:colors.gray,
        fontSize:15,
        textAlign:'center',
        marginVertical:16
    },
    content:{
        padding:12,
        paddingTop:60,
        backgroundColor:colors.white,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        marginTop:-40
    },
    footer:{
        zIndex:4,
        height:60,
        width:'100%',


    }
})

