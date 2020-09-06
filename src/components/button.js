import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';

import { 
    position,
    color, 
    compose, 
    size, 
    space, 
    flexbox, 
    layout 
} from 'styled-system';


const Button = styled(TouchableOpacity)(
    compose(
        position,
        color, 
        size, 
        space,
        flexbox,
        layout,
    ),
);

Button.defaultProps = {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
}

export default Button;