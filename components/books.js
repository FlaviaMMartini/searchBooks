import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Tooltip, Text, Card} from 'react-native-elements';

const Books = ({data}) => {
  console.log(data);
  return (
    <Card image={{uri: data.image}}>
      <Text h4>{data.title}</Text>
      <Text>ISBN: {data.isbn}</Text>
      <Text>Autor: {data.authors}</Text>
      <Text>Editora: {data.publisher}</Text>
      <Text>Ano: {data.year}</Text>
      <Tooltip
        withPointer={false}
        width={300}
        height={300}
        backgroundColor={'#ffffff'}
        popover={
          <View>
            <Text h4>{data.title}</Text>
            <Text>ISBN: {data.isbn}</Text>
            <Text>Autor: {data.authors}</Text>
            <Text>Editora: {data.publisher}</Text>
            <Text>Ano: {data.year}</Text>
            <Text>Peso: {data.gramas}</Text>
            <Text>Comprimento: {data.medidas.comprimento}</Text>
            <Text>Altura: {data.medidas.altura}</Text>
            <Text>Linguagem: {data.language}</Text>
          </View>
        }>
        <Text style={styles.text}>Ver detalhes</Text>
      </Tooltip>
    </Card>
  );
};
const styles = StyleSheet.create({
  text: {
    alignSelf: 'flex-end',
  },
});
export default Books;
