import {useState} from "react";
import { SafeAreaView, View, FlatList } from "react-native";

import {COLORS, NFTData} from '../constants'
import { NFTCard, FocusStatusBar, HomeHeader} from "../components";


const Home = () => {
const [nftData, setNftData] = useState(NFTData);

const handleSearch = (value) =>{
    if(!value.length) return setNftData(NFTData);

  const filteredData = NFTData.filter((item)=>
      item.name.toLowerCase().includes(value.toLowerCase())
  ) ;
  
  
  if(filteredData.length){
    setNftData(filteredData);
  }else{
    setNftData(NFTData);
  }
}


  return (
    <SafeAreaView style={{flex:1}}>
      <FocusStatusBar background={COLORS.primary}/>

      <View style={{flex:1}}>
          <View style={{zIndex:0}}>
            <FlatList 
                data={nftData}
                renderItem={({item}) => <NFTCard data={item}/>}
                keyExtractor={(item)=> item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
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
