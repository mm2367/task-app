import React, {useState} from "react";
import {Image, Text, SafeAreaView, Pressable, Alert, ActivityIndicator} from "react-native";
import {styles} from "./styles";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import {Categories} from "../../../components/Categories";
import {categories} from "../../../constants/categories";
import DateInput from "../../../components/DatePicker";
import Button from "../../../components/Button";
import moment from "moment";
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from "react-redux";
import {setToUpdate} from "../../../store/tasks";

const AddTask = ({navigation}) => {
    const [title,setTitle]=useState('');
    const dispatch=useDispatch();
    const [category,setCategory]=useState('');
    const [deadline,setDeadline]=useState(new Date())
    const [loading,setLoading]=useState(false)
    const user=useSelector(state=> state.user.data)
    const handleBack=()=>{
        navigation.goBack();
    }
    const onSubmit=()=> {
        if(!title){
            const today= moment(new Date).format('YYYY-MM-DD');
            const deadlineFormatted=moment(deadline).format('YYYY-MM-DD');
            Alert.alert('Please enter the task title')
            return;
        }
        if(moment(deadline).isBefore(new Date())){
            Alert.alert('Please enter a date after today')
            return;
        }
        setLoading(true)
        firestore()
            .collection('Tasks')
            .add({title, deadline,category,user:user?.uid})
            .then(()=> {
                setLoading(false)
                dispatch(setToUpdate())
                navigation.navigate('Tasks')
                setTitle('')
                setDeadline(new Date())
                setCategory(null)

        }).catch(e=>{
            console.log('the error :>>>>', e)
            setLoading(false)
            Alert.alert(e.message)
        });
    }
    return (
        <SafeAreaView style={styles.container}>
          <Pressable  style={styles.backContainer} hitSlop={8} onPress={()=>handleBack()}>
              <Image  style={styles.backIcon} source={require('../../../assets/arrow-right.png')}/>
          </Pressable>
            <Title type={'secondary'}>Add New Task</Title>
            <Text style={styles.label}>
                Describe the task
            </Text>
            <Input value={title} onChangeText={(value)=>setTitle(value)} isOutlined placeholder={"Type here..."}/>
            <Text style={styles.label}>Type</Text>
            <Categories categories={categories} onCategorySelect={(category)=>setCategory(category)} selectedCategory={category}/>
            <DateInput value={deadline} onChange={setDeadline}/>
            {loading ? (
                        <ActivityIndicator/>) :
                    (<Button style={styles.button} type={'secondary'} onPress={() => onSubmit()}>
                        Add the Task
                    </Button>)

            }
        </SafeAreaView>
    )
}

export default React.memo(AddTask);