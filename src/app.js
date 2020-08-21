import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';

import {SafeAreaView} from 'react-native';
import SeacrhView from './views/search';
import HistoryView from './views/history';
import FavoriteView from './views/favorite';
import DetailView from './views/detail';
import TabBar from './components/tab-bar';
import Box from './components/box';

import theme from './utils/theme';
  
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();



  function SearchStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={SeacrhView} />
            <HomeStack.Screen name="Detail" component={DetailView} />
        </HomeStack.Navigator>
    );
  }


function App() {
    return(
        <ThemeProvider theme={theme}>
            <Box flex={1} as={SafeAreaView}>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Search" tabBar={props=> <TabBar {...props}/>}>
                        <Tab.Screen name="History" component={HistoryView} />
                        <Tab.Screen name="Search" component={SearchStack} />
                        <Tab.Screen name="Favorite" component={FavoriteView} />
                    </Tab.Navigator>
                </NavigationContainer>
            </Box>
        </ThemeProvider>
    )
    
}

export default App;