import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='home' options={{headerShown:false,
          tabBarLabel:'Home',
          tabBarIcon:({Color})=><AntDesign name="home" size={24} color={Color}/>
        }}/>
        <Tabs.Screen name='medication'options={{headerShown:false,
          tabBarLabel:'Medication',
          tabBarIcon:({Color})=><AntDesign name="medicinebox" size={24} color={Color} />
        }}/>
        <Tabs.Screen name='symptoms' options={{headerShown:false,
          tabBarLabel:'Symptoms',
          tabBarIcon:({Color})=><FontAwesome5 name="head-side-cough" size={24} color={Color}/>
        }}/>
        <Tabs.Screen name='news' options={{headerShown:false,
          tabBarLabel:'News',
          tabBarIcon:({Color})=><FontAwesome name="newspaper-o" size={24} color={Color} />
        }}/>
        <Tabs.Screen name='reminders' options={{headerShown:false,
          tabBarLabel:'Reminders',
          tabBarIcon:({Color})=><FontAwesome name="bell-o" size={24} color={Color} />
        }}/>
        <Tabs.Screen name='bloodtests' options={{headerShown:false,
          tabBarLabel:'Blood Tests',
          tabBarIcon:({Color})=><Fontisto name="blood-test" size={24} color={Color} />
        }}/>
    </Tabs>
  )
}

export default _layout