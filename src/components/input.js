import styled from 'styled-components';
import {TextInput} from 'react-native';
import theme from '../utils/theme';

import {
  compose,
  color,
  size,
  space,
  typography,
  borderRadius,
  shadow,
} from 'styled-system';

const Input = styled(TextInput).attrs(props => ({
    placeholderTextColor: theme.colors[props.placeholderTextColor] || "#999"
}))(
    compose(
        borderRadius,
        typography,
        color,
        size,
        space,
        shadow,
    )
);

export default Input;
