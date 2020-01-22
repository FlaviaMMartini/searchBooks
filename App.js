import React from 'react';
import Header from './components/header';
import ListBooks from './components/ListBooks';
import {View} from 'react-native';

const App = () => {
  return (
    <View>
      <Header />
      <ListBooks />
    </View>
  );
};

export default App;
