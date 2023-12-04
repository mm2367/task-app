import React from "react";
import {View, Image, Text} from "react-native";
import {styles} from "./styles";
import Button from "../../../components/Button";

const Onboarding = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Image style={styles.image} source={require('../../../assets/splash.png')}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Best task management app
                </Text>
                <Text styles={styles.subtitle}>
                    Get organized by sorting out all your tasks and boost your productivity
                </Text>
                <Button onPress={() => navigation.navigate('SignIn')}>Log in</Button>
                <Button onPress={() => navigation.navigate('SignUp')} type={'secondary'}>Get started</Button>
            </View>
        </View>
    )
}

export default React.memo(Onboarding);