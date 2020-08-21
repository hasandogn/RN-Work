import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/button';
import {Search, RotateCcw, Bookmark} from './icons'
import Box from './box';

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Search' ?(
          <Button
            size={55}
            flex={1}
            bg="grey"
            onPress={onPress}
          >
           <Search  stroke='white'/>
          </Button>
        ): (
            <Button
            pt={8}
            flexDirection="column"
            flex={1}
            onPress={onPress}
            height={55}
          >
            {label === 'History' && <RotateCcw color='grey'/>}
            {label === 'Favorite' && <Bookmark color='grey'/>}
            <Box size={4} bg={ isFocused ? 'grey' : 'white'} mt={8}/>
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
