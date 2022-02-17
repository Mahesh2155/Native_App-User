import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const FlatListData = () => {
  const names = [
    {
      name: 'mahesh',
      // Image: './src/assets/img.jpg',
    },
    {
      name: 'saini',
    },
    {
      name: 'mmdu',
    },
    {
      name: 'student',
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={key => {
        return key.index;
      }}
      //   horizontal
      vertical
      //   inverted
      //   numColumns={2}
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({item}) => {
        return (
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> {item.name} </Text>
            <Image
              source={require('../../../assets/img.jpg')}
              style={{height: 50, width: 50}}
            />
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'blue',
    margin: 20,
    color: 'white',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 25,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
  },
  listStyle: {
    textAlign: 'center',
    margin: 20,
    padding: 10,
  },
});

export default FlatListData;
