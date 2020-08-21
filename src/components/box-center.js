import styled from 'styled-components';
import { color, compose, size, space, flexbox } from 'styled-system';
import {View} from 'react-native';

import Box from './box';

const BoxCenter = styled(Box)({});

BoxCenter.defaultProps = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
};

export default BoxCenter;