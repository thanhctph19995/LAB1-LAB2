import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {CardProps} from './CardProp';
// import styles from "../../styles/mainStyle";

const Card = (props: CardProps) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Image source={props.imgUrl} style={styles.image} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: 250,
    resizeMode: 'cover',
  },
});