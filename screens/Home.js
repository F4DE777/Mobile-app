import React from "react";
import { SafeAreaView, Text, View, FlatList } from "react-native";

import {COLORS, NFTData} from '../constants'
import { NFTCard, FocusStatusBar, HomeHeader} from "../components";


const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusStatusBar background={COLORS.primary}/>

      <View style={{flex:1}}>
          <View style={{zIndex:0}}>
            <FlatList 
                data={NFTData}
                renderItem={({item}) => <NFTCard data={item}/>}
                keyExtractor={(item)=> item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader/>}
            />
          </View>

          <View style={{
              position:'absolute',
              left:0,
              right:0,
              top:0,
              bottom:0,
              zIndex:-1,  
          }}>
              <View style={{height:300, backgroundColor:COLORS.primary}}/>
              <View style={{flex:1, backgroundColor:COLORS.white}}/>
          </View>
      </View>
    </SafeAreaView>
  ); 
};

export default Home;
