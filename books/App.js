import React, { useState, useRef } from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import Icon from 'react-native-vector-icons/MaterialIcons'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export default function App () {
  const carouselRef = useRef(null)

  const [lista, setLista] = useState([
    {
      title: 'Cavaleiros do Zodíaco - Lost Canvas Especial',
      text: 'Guardião da “Floresta da Morte”, Verônica de Nasu, a Estrela Celeste da Contemplação, enfrenta Manigold, o Cavaleiro de Ouro de Câncer! Mas isso tudo não passava de um prelúdio para a batalha contra o Deus da Morte Thanatos! Diante da arrogância de um Deus que considera os humanos inferiores a insetos, conseguirá Manigold de Câncer resplandecer a sua alma?!',
      release: 2019,
      img: 'https://images-na.ssl-images-amazon.com/images/I/618BzodPqmL._SX343_BO1,204,203,200_.jpg'
    },
    {
      title: 'A casa das sete torres',
      text: '"Numa cidadezinha dos Estados Unidos está situada a velha casa da família Pyncheon, com sete torres pontudas e, entre elas, uma chaminé. A mansão decrépita, porém, não foi construída sobre bons alicerces: sob aquele chão, jaz a sepultura de uma alma inquieta, que amaldiçoa e atormenta a vida dos moradores geração após geração. A casa parece viva ao carregar o peso de assassinatos, injustiças e bruxarias. Entretanto, quando Phoebe Pyncheon chega do interior para viver com os atuais proprietários, traz consigo novos ares...',
      release: 2020,
      img: 'https://images-na.ssl-images-amazon.com/images/I/41yVkkLsXyL._SX346_BO1,204,203,200_.jpg'
    },
    {
      title: 'Vinte Mil Léguas submarinas',
      text: 'Em 1866, uma série de acontecimentos alarma os portos do mundo inteiro: vários navios se deparam com um monstro imenso, fosforescente e misterioso. O caso desperta a curiosidade do professor Aronnax, que se une a Conselho, seu criado, e ao arpoador Ned Land para empreender uma busca à fera. Mas a equipe não sabia que a suposta besta é, na verdade, o submarino Náutilo, um prodígio da tecnologia comandado pelo capitão Nemo. Feitos prisioneiros ...',
      release: 2020,
      img: 'https://images-na.ssl-images-amazon.com/images/I/51Sp2hbEXoL._SX338_BO1,204,203,200_.jpg'
    },
    {
      title: 'O poder do hábito',
      text: 'Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama. Tentavam desesperadamente descobrir como vender um novo produto chamado Febreze, que estava prestes a se tornar um dos maiores fracassos na história da empresa...',
      release: 2020,
      img: 'https://images-na.ssl-images-amazon.com/images/I/51VFNJGBvqL._SX346_BO1,204,203,200_.jpg'
    },
    {
      title: 'Viagem ao redor do meu quarto',
      text: 'Confinado em seu quarto após se envolver num imbroglio pré-carnavalesco (devidamente seguido de duelo), um oficial de família nobre vinga-se do aperto castrense e do despeito amoroso escrevendo um pequeno prodígio de leveza verbal e garantindo seu posto ― singular, vale dizer ― nas letras francesas. Parece bem contado demais para ser verdade, mas assim nasceu esta Viagem ao redor do meu quarto. Redigido na fortaleza de Turim e publicado pela primeira vez em 1795, o livrinho...',
      release: 2020,
      img: 'https://images-na.ssl-images-amazon.com/images/I/51-GuGXC29L._SX334_BO1,204,203,200_.jpg'
    },
    {
      title: 'Churchill: Caminhando com o destino',
      text: 'Nesta biografia monumental, Andrew Roberts destrincha Winston Churchill por completo ― do nascimento ao legado duradouro como um dos maiores líderes de nossos tempos. Ao longo de sua pesquisa, o premiado historiador consultou dezenas de documentos inéditos e, pela primeira vez, a Família Real permitiu que um biógrafo do estadista tivesse acesso aos diários em que o rei George VI registrava suas reuniões semanais com o primeiro-ministro durante a Segunda Guerra.',
      release: 2020,
      img: 'https://images-na.ssl-images-amazon.com/images/I/41u7ivmD4oL._SX339_BO1,204,203,200_.jpg'
    },
    {
      title: 'Rei Lear',
      text: 'Misto único de conflito familiar e crise política, de amor e ódio entre pais e filhos, Rei Lear evoca o niilismo da modernidade ao mesmo tempo em que opera a história do século XVI e das primeiras décadas do século XVII.',
      release: 2020,
      img: 'https://images-na.ssl-images-amazon.com/images/I/41Tc4QTVtmL._SX330_BO1,204,203,200_.jpg'
    }
  ])
  const [background, setBackground] = useState(lista[0].img)
  const [activeIndex, setActiveIndex] = useState(0)

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image source={{ uri: item.img }} style={styles.carouselImg} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, height: screenHeight }}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
          <ImageBackground
            source={{ uri: background }}
            style={styles.imgBg}
            blurRadius={8}>

            <View style={styles.slideView}>
              <Carousel
                style={styles.carousel}
                ref={carouselRef}
                data={lista}
                renderItem={_renderItem}
                sliderWidth={screenWidth}
                itemWidth={200}
                inactiveSlideOpacity={0.5}
                onSnapToItem={(index) => {
                  setBackground(lista[index].img)
                  setActiveIndex(index)
                }}
              />
            </View>

            <View style={styles.moreInfo}>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.movieTitle}>
                  {lista[activeIndex].title}
                </Text>
                <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
              </View>

            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000'
  },
  slideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  carousel: {
    flex: 1,
    overflow: 'visible'
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText: {
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  moreInfo: {
    backgroundColor: '#FFF',
    height: 250,
    borderRadius: 20,
    margin: 20
  },
  movieTitle: {
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5
  },
  movieDesc: {
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold'
  }
})
