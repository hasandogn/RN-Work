import * as React from 'react';
import {Button, View} from 'react-native';

import Box from '../components/box';
import {Logo} from '../components/icons';
import Search from '../components/search';

function SearchView({navigation}) {
  return (
    <Box>
      <Button
        title="Ayrıntılara git"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box py={1}>
        <Logo color="black" />
      </Box>
      <Box p={10}>
        <Search/>
      </Box>
      
    </Box>
  );
}

export default SearchView;
