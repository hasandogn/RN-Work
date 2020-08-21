import styled from 'styled-components';
import { color, compose, size, space, flexbox } from 'styled-system';
import {View} from 'react-native';

const Box = styled(View)(
    compose(
        color, 
        size, 
        space,
        flexbox,
    ),
);

export default Box;