import React, { useRef, useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import {OVERVIEW} from '../../Constants/index'
import Tab from './Tab'
import Transitioning, { Transition ,TransitioningView} from "react-native-reanimated"
const { height } = Dimensions.get("window");

const Tabs= ({Tabs:tabsProps})=>{
    const transition = (
            <Transition.Change interpolation="easeInOut"/>
        )
    const ref = useRef(null);
    const [tabs,setTabs] = useState([...tabsProps]);
    const v = OVERVIEW
    const [selectedTab,setSelectedTab] = useState(v);
    return (
        <View style={{ 
            backgroundColor: "black",
            height: tabsProps.length * height}}>
           <Transitioning.View style={StyleSheet.absoluteFill} ref={ref} transition={transition}>
                {tabs.map((tab,index)=>{
                   return (<Tab
                    closeTab={()=>{
                        if(ref.current){
                            ref.current.animateNextTransition()
                        }
                        setTabs([...tabs.slice(0,index),...tabs.slice(index+1)]);
                    }}
                    onPress={()=>{
                        
                        ref?.current?.animateNextTransition();
                        setSelectedTab(selectedTab===index ? OVERVIEW:index);
                    }}
                    tab={tab}
                    index={index}
                    selectedTab={selectedTab}
                    />)
                })}
           </Transitioning.View>
        </View>
    )
}
export default Tabs;