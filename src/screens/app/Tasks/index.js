import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView,Text, View} from "react-native";
import {styles} from "./styles";
import Header from "../../../components/Header";
import PlusIcon from "../../../components/PlusIcon";
import Title from "../../../components/Title";
import {useDispatch, useSelector} from "react-redux";
import Checkbox from "../../../components/Checkbox";
import {Categories} from "../../../components/Categories";
import {categories} from "../../../constants/categories";
import firestore from "@react-native-firebase/firestore";
import {setToUpdate} from "../../../store/tasks";

const Tasks = () => {

    const tasks=useSelector(state =>state.tasks.data);
    const [category,setCategory]=useState('all');
    const [filteredTasks,setFilteredTasks]=useState('');
    const dispatch=useDispatch()
    const onTaskUpdate=(item)=>{
        firestore()
            .collection('Tasks')
            .doc(item?.uid)
            .update({checked:!item?.checked })
            .then(()=>{
                console.log('hello')
                dispatch(setToUpdate())
            })
    }
    useEffect(()=>{
        if(category!=='all'){
            const filtered=tasks?.filter((task)=>task?.category===category)
            setFilteredTasks(filtered)
        }
        else{
            setFilteredTasks(tasks)
        }
    },[category,dispatch,tasks])
    const renderTask=({item})=>{
        return(
            <View style={styles.row}>
                <Checkbox checked={item?.checked} onPress={()=> onTaskUpdate(item)}/>
                <Text style={[styles.taskText,item?.checked? styles.checked:null]}>{item.title}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Tasks"}/>
                <FlatList ListHeaderComponent={
                    <View style={{marginBottom:24}}>
                    <Title>To do Tasks</Title>
                        <Categories
                            categories={[{label:'All',value:'all'},...categories]} onCategorySelect={(category)=>setCategory(category)} selectedCategory={category}/>
                    </View>
                } data={filteredTasks} renderItem={renderTask} keyExtractor={item=> String(item?.uid)}/>
            <PlusIcon/>
        </SafeAreaView>
    )
}

export default React.memo(Tasks);