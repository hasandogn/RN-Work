import Box from './box';
import React from 'react';
import Text from './text';
import Input from './input';
import {Search, Close} from './icons';
import Button from './button';
import theme from '../utils/theme';
import {Keyboard} from 'react-native';

function SearchBox () {
    const [value, setValue] = React.useState("");
    const [isFocus, setFocus] = React.useState(false);

    const onCancel = () => {
        setFocus(false)
        Keyboard.dismiss()
    }

    const onClear = () => {
        setValue('');
    }

    return( 
        <Box flexDirection="row" alignItems="center" >
            <Box position="relative" flex={1}>
                <Input 
                    style={{
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 24,
                        shadowOffset: {
                        width: 0,
                        height: 4
                        }
                    }}
                    bg="white" 
                    height={60}
                    borderWidth={1}
                    borderColor={isFocus ? '#D1D1D1' : 'transparent'}
                    color="grey" 
                    placeholder="Ara" 
                    placeholderTextColor="grey" 
                    borderRadius={8}
                    pl={50}
                    value={value}
                    onFocus={() => setFocus(true)}
                    onChangeText={text => setValue(text)}
                /> 
           {value.length > 0 && (
           <Button onPress={onClear} position="absolute" right={12} top={17}>
                <Close color="black"/>
            </Button>
           )}
            <Button position="absolute" left={12} top={17}>
                <Search color={theme.colors.grey}  />
            </Button>
            </Box>
           { isFocus && (
            <Button onPress={onCancel} px={14} height={52}>
                <Text>Vazgeç</Text>
            </Button>
           )}
        </Box>
    )
}
export default SearchBox;