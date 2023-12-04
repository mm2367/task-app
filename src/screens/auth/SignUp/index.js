import React, {useState} from "react";
import {Linking, SafeAreaView, Text, View} from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Title from "../../../components/Title";
import Checkbox from "../../../components/Checkbox";
import {PRIVACY_POLICY_LINK} from "../../../constants/links";

const SignUp = ({navigation}) => {
    const [isAgreed,setIsAgreed]=useState(false);
    const onCheckboxPress=()=>{
        setIsAgreed(!isAgreed);
    }
    const onLinkPress=(page)=>{
        if(page==='terms'){
            // purposefully the same link
        Linking.openURL(PRIVACY_POLICY_LINK)
        }
        else{
        Linking.openURL(PRIVACY_POLICY_LINK)
        }
    }
    return (
        <View style={styles.container}>
            <Title>Join the hub!</Title>
            <Input placeholder={'First Name'}/>
            <Input placeholder={'Last Name'}/>
            <Input placeholder={'Email'} keyboardType={'email-address'}/>
            <Input placeholder={'Password'} secureTextEntry/>
            <Input placeholder={'Confirm Password'} secureTextEntry/>
            <View style={styles.row}>
                <Checkbox onPress={onCheckboxPress} checked={isAgreed}/>
                <Text style={styles.agreeText}>
                    I agree to{' '}
                    <Text style={styles.link} onPress={()=>onLinkPress('terms')}>Terms and Conditions</Text>
                    {' '}and
                    <Text style={styles.link} onPress={()=>onLinkPress('privacy')}> Privacy Policy</Text>
                </Text>
            </View>
            <Button type={'secondary'}>Sign up</Button>
            <Text style={styles.footerText}>
                Already Registered?
                <Text onPress={()=> navigation.navigate('SignIn')} style={styles.footerLink}>
                    Sign in!
                </Text>
            </Text>
        </View>
    )
}

export default React.memo(SignUp);