import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SafariTabs from './screens/screens/SafariTabs'
import Tabs from './screens/components/SafariTabs/Tabs'
const App = () => {
  const tabs= [
    {
      id: "Facebook",
      uri: "https://facebook.github.io/react-native"
    },
    { id: "Expo", uri: "https://expo.io" },
    { id: "Apple", uri: "https://www.apple.com/" },
    {
      id: "Start React Native",
      uri: "https://react-native.shop/buy-me-a-coffee"
    },
    { id: "Google", uri: "https://www.google.com/" }
  ];
return (
    <Tabs Tabs={tabs}/>
  );
};

export default App;
