import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";

const SignIn =({navigation}) => {
    return (
        <View style={styles.container}>
            <Title>
                Welcome back!
            </Title>
            <Input placeholder={'Email'} keyboardType={'email-address'}/>
            <Input placeholder={'Password'} secureTextEntry/>
                <Button >Log in</Button>
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