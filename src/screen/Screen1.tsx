import React from 'react';
import {
  Animated,
  FlatList,
  ListViewComponent,
  ScrollView,
  View,
} from 'react-native';

import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  flex: 1;
  width: 100%;
  flex: 1;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Head = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;

  /* background-color: rgba(255, 255, 255, 0.1); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 20px; */
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  /* background-color: beige; */
`;
const ClickText = styled.Text`
  text-align: left;
  font-size: 16px;
  color: white;
  padding-left: 25px;
  padding-top: 17px;
  font-weight: 700;
`;
const CountryImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  /* border-radius: 50px; */
`;
const Button = styled.TouchableOpacity`
  flex: 1;
  width: 126px;
  height: 170px;
  margin-right: 10px;
`;

const Colum = styled.Text`
  font-size: 18px;
`;
const Body = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: white;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  margin: 0 auto;
  margin-top: 10px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: white;
  width: 98%;
  height: 124px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  elevation: 2;
`;
const ProfileImg = styled.Image`
  width: 16px;
  height: 16px;
  border-radius: 70px;
  margin-right: 10px;
`;
const ProfileInit = styled.View``;
const ProfileHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const ProfileBody = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Line = styled.View`
  border: 0.5px solid #cdcdcd;
  color: #cdcdcd;
`;
const ProfileInfo = styled.View`
  flex-direction: row;
`;
const Name = styled.Text`
  font-size: 9px;
  font-weight: 700;
`;
const Country = styled.Text`
  font-size: 10px;
  opacity: 0.7;
  margin-left: 7px;
`;
const Title = styled.Text`
  font-size: 12px;
`;
const JobTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;
const WriteBtn = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  right: 28px;
  bottom: 20px;
  border-radius: 30px;
`;
export default function Screen1({navigation, route}) {
  const goToWrite = e => {
    navigation.navigate('Write');
  };

  var faker = require('faker');

  // console.log('data', faker.address.country());
  const DATA = [...Array(30).keys()].map((_, index) => {
    return {
      key: faker.datatype.uuid(),
      name: faker.name.findName(),
      title: faker.name.title(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        'women',
        'men',
      ])}/${faker.datatype.number(60)}.jpg`,
      jobTitle: faker.name.jobTitle(),
      country: faker.address.country(),
    };
  });
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 190);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 190],
    outputRange: [0, -190],
  });
  // const scrolly = React.useRef(new Animated.Value(0)).current;
  // const ITEM_SIZE = 70 + 20 * 3;

  return (
    <>
      <Container>
        <Animated.View
          style={{
            transform: [{translateY: translateY}],
            zIndex: 1000,
            elevation: 1000,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
          }}>
          <Head>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Button>
                <CountryImage
                  source={require('../Assets/Images/ER.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>Europe</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../Assets/Images/Asia.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>Asia</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../Assets/Images/USA.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>North America</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../Assets/Images/AF.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>Africa</ClickText>
                </CountryImage>
              </Button>
            </ScrollView>
            <Colum
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                fontWeight: '700',
              }}>
              동행 찾기
            </Colum>
          </Head>
        </Animated.View>
        <Body>
          <Animated.FlatList
            style={{paddingTop: 220}}
            bounces={false}
            scrollEventThrottle={16}
            data={DATA}
            keyExtractor={item => item.key}
            onScroll={e => {
              scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            renderItem={({item, index}) => {
              return (
                <List>
                  <ProfileInit>
                    <ProfileHead>
                      <JobTitle>{item.jobTitle}</JobTitle>
                      <Icon name={'bookmark'} color={'#d8d8d8'} size={20} />
                    </ProfileHead>
                    <ProfileBody>
                      <Icon name={'location'} size={9} />
                      <Country>{item.country}</Country>
                    </ProfileBody>
                  </ProfileInit>
                  <Line />
                  <Title>{item.title}</Title>
                  <ProfileInfo>
                    <ProfileImg source={{uri: item.image}} />
                    <Name>{item.name}</Name>
                  </ProfileInfo>
                </List>
              );
            }}></Animated.FlatList>
        </Body>
        <WriteBtn onPress={goToWrite}>
          <CountryImage
            source={require('../Assets/Images/GoToWrite.png')}
            resizeMode="cover"
            // imageStyle={{borderRadius: 10}}
          ></CountryImage>
        </WriteBtn>
      </Container>
    </>
  );
}
