import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Close(props) {
  return (
    <Svg
      width="24" 
      height="24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      class="feather feather-x"
      {...props}
    >
      
      <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  )
}

export default Close;