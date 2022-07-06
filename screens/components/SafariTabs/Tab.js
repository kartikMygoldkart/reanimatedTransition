import { rotate } from "@shopify/react-native-skia";
import React, { useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
  View
} from "react-native";
import { OVERVIEW } from "../../Constants";
const perspective = 1000;
const { height } = Dimensions.get("window");
import Content from "./Content";
const Tab = ({tab,selectedTab,index,onPress,closeTab}) =>{
    const H = -height/2;
    const position = index> selectedTab?height:0;
    const top = selectedTab===OVERVIEW?index*150:position
    const rotateX =  selectedTab === OVERVIEW ?-Math.PI/6:0;
    const z = H* Math.sin(Math.abs(rotateX))
    const transform = [
        {perspective},
        {rotateX:`${rotateX}rad`},
        {scale: perspective/(perspective-z)}
    ]
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View
                style={{
                    ...StyleSheet.absoluteFill,
                    height,
                    top,
                    transform
                }}>
                    
                <Content tab={tab} selectedTab={selectedTab} />
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Tab;