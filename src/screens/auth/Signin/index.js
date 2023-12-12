import React, {useState} from "react";
import {Alert, SafeAreaView, Text, View} from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import auth from "@react-native-firebase/auth";

const SignIn =({navigation}) => {
    const [values,setValues]=useState({})
    const onChange=(value,key)=>{
        setValues(vals=>({
            ...vals,
            [key]:value
        }))

    }
    const onSubmit=()=> {
        if(!values?.password || !values?.email){
            Alert.alert('Please fill out the form completely')
            return;
        }
        auth()
            .signInWithEmailAndPassword(values?.email, values?.password)
            .then(() => {

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return (
        <View style={styles.container}>
            <Title type={'primary'}>
                Welcome back!
            </Title>
            <Input placeholder={'Email'} keyboardType={'email-address'} onChangeText={val=>onChange(val,'email')}/>
            <Input placeholder={'Password'} secureTextEntry onChangeText={val=>onChange(val,'password')}/>
                <Button onPress={onSubmit}>Log in</Button>
            <Text style={styles.footerText}>
                Not Registered?
                <Text onPress={()=> navigation.navigate('SignUp')} style={styles.footerLink}>
                    Sign up!
                </Text>
            </Text>
        </View>
    )
}

export default React.memo(SignIn);