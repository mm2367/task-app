import React, {useEffect, useState} from "react";
import {Alert, Linking, SafeAreaView, ScrollView, Text, View} from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Title from "../../../components/Title";
import Checkbox from "../../../components/Checkbox";
import {PRIVACY_POLICY_LINK} from "../../../constants/links";
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
    const [isAgreed,setIsAgreed]=useState(false);
    const [signUpValues,setSignUpValues]=useState({});
    const onChange=(value,key)=>{
        setSignUpValues(vals=>({
            ...vals,
            [key]:value
        }))

    }

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
    const onSubmit=()=> {
        if(!signUpValues?.firstName || !signUpValues?.lastName){
            Alert.alert('Please fill out the form completely')
            return;
        }
        if (signUpValues?.password !== signUpValues?.confirmPassword) {
            Alert.alert('Passwords do not match')
            return;
        }
        if (!isAgreed) {
            Alert.alert('You must agree to the terms and conditions')
            return;
        }
        auth()
            .createUserWithEmailAndPassword(signUpValues?.email, signUpValues?.password)
            .then(() => {
                auth().currentUser.updateProfile({displayName:`${signUpValues.firstName} ${signUpValues.lastName}`});

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Title type={'primary'}>Join the hub!</Title>
            <Input onChangeText={(val)  =>onChange(val,'firstName')} placeholder={'First Name'}/>
            <Input onChangeText={val=>onChange(val,'lastName')} placeholder={'Last Name'}/>
            <Input onChangeText={val=>onChange(val,'email')} placeholder={'Email'} keyboardType={'email-address'}/>
            <Input onChangeText={val=>onChange(val,'password')} placeholder={'Password'} secureTextEntry/>
            <Input onChangeText={val=>onChange(val,'confirmPassword')} placeholder={'Confirm Password'} secureTextEntry/>
            <View style={styles.row}>
                <Checkbox onPress={onCheckboxPress} checked={isAgreed}/>
                <Text style={styles.agreeText}>
                    I agree to{' '}
                    <Text style={styles.link} onPress={()=>onLinkPress('terms')}>Terms and Conditions</Text>
                    {' '}and
                    <Text style={styles.link} onPress={()=>onLinkPress('privacy')}> Privacy Policy</Text>
                </Text>
            </View>
            <Button  onPress={onSubmit} type={'secondary'}>Create a new account</Button>
            <Text style={styles.footerText}>
                Already Registered?
                <Text onPress={()=> navigation.navigate('SignIn')} style={styles.footerLink}>
                    Sign in!
                </Text>
            </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(SignUp);