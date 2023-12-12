import React, {useEffect, useState} from "react";
import {SafeAreaView, TouchableOpacity, View,Text,ScrollView} from "react-native";
import {styles} from "./styles";
import Header from "../../../components/Header";
import PlusIcon from "../../../components/PlusIcon";
import Title from "../../../components/Title";
import {useDispatch, useSelector} from "react-redux";
import firestore from "@react-native-firebase/firestore";
import {setTasks} from "../../../store/tasks";
import StatusCard from "../../../components/StatusCard";
import moment from "moment";

const Home = ({navigation}) => {
    const user= useSelector(state=> state.user.data)
    const tasks=useSelector(state=>state.tasks?.data);
    const toUpdate=useSelector(state=>state.tasks.toUpdate)
    const [counts,setCounts]=useState({});

    const dispatch=useDispatch();
    useEffect(()=> {
        firestore()
            .collection('Tasks')
            .where('user','==',user?.uid)
            .get()
            .then(querySnapshot => {
                console.log('Total tasks: ', querySnapshot.size);
                const tasksList=[]
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    tasksList.push({uid: documentSnapshot.id,...(documentSnapshot.data()||{})
                    });

                });
                dispatch(setTasks(tasksList))
            });
    },[user,dispatch,toUpdate]);
    useEffect(()=>{
        if(tasks?.length){
            const highPriority=tasks?.filter(task=>task?.category==='urgent'|| task?.category==='important')
            const today= moment(new Date()).format('YYYY-MM-DD');
            const dueDeadline=tasks?.filter(task=> {
                const deadline=moment(task?.deadline?.seconds*1000).format('YYYY-MM-DD')
                return moment(deadline).isBefore(today)
            }
            );
            const quickWin=tasks?.filter(task=>task?.category==='quickTask')
            setCounts({highPriority:highPriority.length,dueDeadline:dueDeadline.length,quickWin:quickWin.length})
        }
    },[tasks])
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Home'}/>
            <ScrollView>
                <Title type={'secondary'}>
                    Daily Tasks
                </Title>
                <View style={styles.row}>
                    <StatusCard label={'High Priority'} count={counts.highPriority}></StatusCard>
                    <StatusCard label={'Due Deadline'} type={'error'} count={counts.dueDeadline}></StatusCard>
                    <StatusCard label={'Quick Win'} count={counts.quickWin}></StatusCard>
                </View>
                <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('Tasks')}>
                    <Text style={styles.title}>Check all my tasks</Text>
                    <Text style={styles.subtitle}>See all tasks and filter time by categories you have selected when creating them</Text>
                </TouchableOpacity>
            </ScrollView>
            <PlusIcon/>
        </SafeAreaView>
    )
}

export default React.memo(Home);