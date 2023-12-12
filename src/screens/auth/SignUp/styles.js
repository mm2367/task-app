import {Dimensions, StyleSheet} from 'react-native';
import {colors} from "../../../constants/styleconstants";
export const styles=StyleSheet.create({
    container:{
        height:'100%',
        marginVertical:24,
        marginHorizontal:24,
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
    },
    row:{
       flexDirection:'row',
       alignItems:'center',
        marginVertical:16
    },
    agreeText:{
        color:colors.gray,
        fontSize:12,
        marginLeft:8,
    },
    link:{
        textDecorationLine:'underline',
    }

})

