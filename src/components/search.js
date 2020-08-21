import Box from './box';
import React from 'react';
import Text from './text';
import Input from './input';
import {Search} from './icons'
function SearchBox () {
    return( 
    <Box position="relative">
        <Box position="absolute">
            <Search color="grey" zIndex={1} left={12} top={17} />
        </Box>
        <Input 
        bg="white" 
        height={60}
        color="white" 
        placeholder="Ara" 
        placeholderTextColor="grey" 
        borderRadius={8}
        pl={50}
        />
    </Box>
    )
}
export default SearchBox;