import {Text, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styled from '@emotion/native';

const MarkView = styled.View`
  width: 250px;
  height: 100px;
  padding: 5px;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #e24e4a;
  font-weight: bold;
`;
const TimeAndPlace = styled.Text`
  font-size: 13px;
  color: #333333;
`;
const Heading = styled.Text`
  font-size: 13px;
  color: #333333;
  margin-right: 3px;
  font-weight: bold;
`;
const TextRowWrapper = styled.View`
  flex-direction: row;
`;
const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const Recruitment = styled.Text`
  font-size: 13px;
  color: #e24e4a;
  font-weight: bold;
`;
export default function Screen2() {
  const [location, setLocation] = useState({
    latitude: 37.498095,
    longitude: 127.02761,
  });
  return (
    <>
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            // icon={require('../Assets/Images/Pig.png')}
            title="this is a marker"
            description="this is a marker example">
            <Callout
            // onPress={() =>
            //   navigation.navigate('게시물 읽기', {
            //     id: data._id,
            //   })
            // }
            >
              <MarkView>
                <Title>{/* {data?.title} */}</Title>
                <TextRowWrapper>
                  <Heading>시간 :</Heading>
                  <TimeAndPlace>{/* {data?.date} */}</TimeAndPlace>
                </TextRowWrapper>
                <TextRowWrapper>
                  <Heading>장소 :</Heading>
                  <TimeAndPlace>{/* {data?.place} */}</TimeAndPlace>
                </TextRowWrapper>
                <TextRowWrapper>
                  <Heading>모집 인원:</Heading>
                  <TimeAndPlace>
                    {/* {data?.countMember} / {data?.recruitment} */}
                  </TimeAndPlace>
                </TextRowWrapper>
                <TextWrapper>
                  <Recruitment>{'>'} 동행하기</Recruitment>
                </TextWrapper>
              </MarkView>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </>
  );
}
