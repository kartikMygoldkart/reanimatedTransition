import React, { useMemo, useRef } from "react";
import { StyleSheet,StatusBar,NativeModules, View, Dimensions, Text } from "react-native";
import WebView from 'react-native-webview'
import { OVERVIEW } from "../../Constants";
import { Constants } from "expo-constants";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 25,
      overflow: "hidden"
    },
    title: {
      fontWeight: "bold",
      fontSize: 12,
      textAlign: "center",
      alignSelf: "center"
    },
    webView: { flex: 1 }
  });
  
const Content = ({tab,selectedTab}) =>{
    const uri = tab.uri;
    const title = tab.id;
    const { StatusBarManager } = NativeModules;
    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
    const offset = selectedTab === OVERVIEW?0:STATUSBAR_HEIGHT;
    return(
        <View style={styles.container}>
            <View style={{
                paddingTop:offset,
                height:32 + offset,
                backgProundColor: "#fefefe",
                justifyContent:'center'
            }}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.webView}>
                <WebView nestedScrollEnabled source={{uri:uri}} style={styles.webView}/>
                <View style={StyleSheet.absoluteFill}/>
            </View>
        </View>
    )
}   
export default Content;