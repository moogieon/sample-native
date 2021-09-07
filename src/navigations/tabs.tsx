import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Screen4 from '../screen/Screen4';
import BoardWtrite from '../screen/board/write/boardWrite.presenter';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();
const PickedStack = createNativeStackNavigator();
const MypageStack = createNativeStackNavigator();
// const HomeStack = creacteStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Screen1}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Write"
        component={BoardWtrite}
        options={{
          title: '동행찾기 글쓰기',
          // headerShown: false
        }}
      />
    </HomeStack.Navigator>
  );
};
const MapStackScreen = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="Map"
        component={Screen2}
        options={{title: 'Map', headerShown: false}}
      />
    </MapStack.Navigator>
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Homestack') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Mapstack') {
            iconName = focused ? 'map' : 'map-outline';
          }
          if (route.name === 'Picked') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }
          if (route.name === 'MyPage') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
            size = 30;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: '#FFBE2B',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      })}>
      <Tab.Screen name="Homestack" component={HomeStackScreen} />
      <Tab.Screen name="Mapstack" component={MapStackScreen} />
      <Tab.Screen name="Picked" component={Screen3} />
      <Tab.Screen name="MyPage" component={Screen4} />
    </Tab.Navigator>
  );
}
