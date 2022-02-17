import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import HelloWorldApps from './src/component/HelloWorldApp';
import FirstChallenge from './src/component/FirstChallenge';
import FlatListData from './src/component/FlatList';
import Main from './src/container/MainScreen/Main';
import Home from './src/container/HomeScreen/Home';

const Navigation = StackedNavigation({
  Home: {
    screen: Home,
  },
  Main: {
    screen: Main,
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <HelloWorldApps />
        <FirstChallenge />
        <FlatListData />
        <Main />
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
