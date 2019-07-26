import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  let fotocapa = '../assets/images/cannot.png';
  return (
    <View style={styles.container}>
      <View style={barra.barra}> 
        <Text style={barra.barratexto}>Asukadas</Text>
      </View>
      <ScrollView style={styles.container}>

        <TouchableOpacity style={slide.slide}>
          <Image source={require(fotocapa)} style={slide.foto}/>
          <View>
            <Text style={slide.titulo}>
              Ep. 5 - Asuka says "chaaaaaaaance"
            </Text>
            <Text style={slide.desc} numberOfLines={2}>
              Uma descrição não seria o suficiente para descrever esta incrivel waifu, eu realmente nem sei o que dizer desta incrivel mulher e melhor personagem de Evangelion.
            </Text>
          </View>
        </TouchableOpacity>

        <View style={noticias.bn}>
          <Text style={noticias.bn_texto}>Últimas Asukadas</Text>
        </View>

        <View>
          <TouchableOpacity style={noticias.noticia}>
            <View style={noticiabloco.viewfoto}>
              <Image source={require(fotocapa)} style={noticiabloco.foto}/>
            </View>
            <View style={noticiabloco.viewtexto}>
              <Text style={noticiabloco.titulo}>
              Ep. 5 - Asuka says "chaaaaaaaance"
              </Text>
              <Text style={noticiabloco.descricao}>
              Uma descrição não seria o suficiente para descrever esta incrivel waifu, eu realmente nem sei o que dizer desta incrivel mulher e melhor personagem de Evangelion.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={noticias.noticia}>
            <View style={noticiabloco.viewfoto}>
              <Image source={require(fotocapa)} style={noticiabloco.foto}/>
            </View>
            <View style={noticiabloco.viewtexto}>
              <Text style={noticiabloco.titulo}>
                Titulo
              </Text>
              <Text style={noticiabloco.descricao} numberOfLines={1}>
                Descrição.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

const barra = StyleSheet.create({
  barra:{
    backgroundColor: 'dodgerblue',
    paddingTop: 35,
    paddingBottom: 15,
    
  },
  barratexto:{
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
  },
});

const slide = StyleSheet.create({
  slide:{
    backgroundColor: 'whitesmoke',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 15,
  },
  foto:{
    height: 200,
    width: 350,
    alignSelf: "center",
    borderRadius: 15,
    resizeMode: 'stretch',
  },
  titulo:{
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
  },
  desc:{
    paddingLeft: 5,
    paddingRight: 5,
    color: 'gray',
    fontFamily: 'OpenSans-Italic',
  },
});

const noticias = StyleSheet.create({
  bn:{
    padding: 8,
    backgroundColor: 'dodgerblue',
  },
  bn_texto:{
    fontSize: 18,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
  },
  noticia:{
    flex: 1,
    height: 75,
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  }
});

const noticiabloco = StyleSheet.create({
  viewfoto:{
    paddingRight: 5,
    alignSelf: 'flex-start',
  },
  viewtexto:{
    alignSelf: 'stretch',
  },
  foto:{
    height: 65,
    width: 95,
    borderRadius: 30,
    resizeMode: 'stretch',
  },
  titulo:{
    fontFamily: 'OpenSans-Regular',
  },
  descricao:{
    color: 'gray',
    fontSize: 12,
    fontFamily: 'OpenSans-Italic',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
