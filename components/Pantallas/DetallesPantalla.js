/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const DetallesPantalla = ({route}) => {
  const {movie} = route.params;
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const api_url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=edcf6f8a`;
    fetch(api_url)
      .then(data => {
        return data.json();
      })
      .then(resultado => {
        setDatos(resultado);
        console.log(datos);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {datos.Poster === 'N/A' ? (
          <View style={styles.borde}>
            <Image
              style={styles.images}
              source={require('../image/nofound.jpg')}
            />
          </View>
        ) : (
          <View>
            <Image style={styles.images} source={{uri: datos.Poster}} />
          </View>
        )}
        <View style={styles.container}>
          <Text style={styles.borde}>Fecha de exhibicion:</Text>
          <Text style={styles.txt}>{datos.Released}</Text>
          <Text style={styles.borde}>Actores:</Text>
          <Text style={styles.txt}>{datos.Actors}</Text>
          <Text style={styles.borde}>Sipnosis:</Text>
          <Text style={styles.txt}>{datos.Plot}</Text>
          <Text style={styles.borde}>Genero de pelicula:</Text>
          <Text style={styles.txt}>{datos.Genre}</Text>
          <Text style={styles.borde}>Productora:</Text>
          <Text style={styles.txt}>{datos.Production}</Text>
          <Text style={styles.borde}>Premios:</Text>
          <Text style={styles.txt}>{datos.Awards}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  images: {
    width: 350,
    height: 550,
    margin: 5,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
  txt: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    color: 'red',
    height: 150,
    textAlign: 'center',
    margin: 10,
  },
  borde: {
    height: 50,
    fontSize: 20,
    width: 412,
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'black',
    textAlign: 'center',
    color: 'red',
  },
});
