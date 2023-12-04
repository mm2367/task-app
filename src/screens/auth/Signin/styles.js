import {Dimensions, StyleSheet} from 'react-native';
import {colors} from "../../../constants/styleconstants";
const {height}=Dimensions.get('window')
export const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:colors.white
    },
    footerText:{
        color: colors.gray,
        fontSize:15,
        textAlign:'center',
        marginTop:28,

    },
    footerLink:{
        paddingLeft:4,
        color:colors.purple,
        fontWeight:'bold'
    }
})

