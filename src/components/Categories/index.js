import { FlatList, Pressable, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";



export const Categories=({categories,selectedCategory,onCategorySelect})=>{
    return(
        <FlatList
        data={categories}
        horizontal 
        showsHorizontalScrollIndicator={false}
        keyExtractor={item=> String(item?.value)}
        style={styles.flatListStyles}
        renderItem={({item,index})=>{
            const selected= selectedCategory===item?.value;
            const displayName=item?.label
            return(
            <Pressable onPress={()=>onCategorySelect(item?.value)} style={[styles.itemContainer, selected? styles.selectItemContainer:null,index===0? {marginLeft:24}:null]}>
            <Text style={[styles.item, selectedCategory===index?styles.selectedItem:null]}>
                {displayName}
            </Text>
            </Pressable>
            )
        }}
        />
    )
        
}