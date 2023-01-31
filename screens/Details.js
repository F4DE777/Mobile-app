import {
  SafeAreaView,
  View,
  Text,
  SafeAreaViewBase,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { COLORS, SIZES, SHADOWS, FONT, assets } from "../constants";
import {
  CircleButton,
  RectButon,
  SubInfo,
  FocusStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";
const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View>
        <RectButon minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
      </View>
    </SafeAreaView>
  );
};

export default Details;
