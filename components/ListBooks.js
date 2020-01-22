import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Books from './books';
import {SearchBar} from 'react-native-elements';
import axios from 'axios';

const ListBooks = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const key = 'AIzaSyCIplPebkXuNGyovAV-M8W1ce_y1N50TTQ';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&${key}`,
      );
      setData(
        response.data.items.map(item => {
          return {
            id: item.id ? item.id : 'id vazio',
            image:
              item.volumeInfo.imageLinks !== undefined
                ? item.volumeInfo.imageLinks.thumbnail
                : 'https://www.uergs.edu.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png?classificacao=34752',
            gramas: '500 gramas',
            medidas: {
              comprimento: '10 cm',
              altura: '10 cm',
            },
            isbn: item.volumeInfo.industryIdentifiers[0].identifier
              ? item.volumeInfo.industryIdentifiers[0].identifier
              : 'Sem informações de ISBN',
            language: item.volumeInfo.language
              ? item.volumeInfo.language
              : 'Sem informações de idioma',
            year: item.volumeInfo.year ? item.volumeInfo.year : '2010',
            title: item.volumeInfo.title ? item.volumeInfo.title : '',
            authors: item.volumeInfo.authors ? item.volumeInfo.authors : '',
            publisher: item.volumeInfo.publisher
              ? item.volumeInfo.publisher
              : 'sem informações de editora',
            link: item.volumeInfo.infoLink
              ? item.volumeInfo.infoLink
              : 'https://books.google.com/',
          };
        }),
      );
      console.log(response);
      console.log(response.data.items && response.data.items.length);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <>
      <SearchBar
        searchIcon={null}
        placeholder="Procurar..."
        onChangeText={event => setQuery(event)}
        value={query}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Books data={item} />}
      />
    </>
  );
};

export default ListBooks;
