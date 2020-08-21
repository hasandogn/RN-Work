import styled from 'styled-components';
import { color, compose, size, space, flexbox, layout } from 'styled-system';
import {TouchableOpacity} from 'react-native';

const Button = styled(TouchableOpacity)(
    compose(
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