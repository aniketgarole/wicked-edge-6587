import React from 'react'
import { Box,Center,Img } from '@chakra-ui/react'

function Carcard() {
  return (
    <>
    <Box h="337px" border="1px solid red" paddingLeft="91.15px" paddingRigth="91.15px" display="flex" justifyContent="space-between">
        {/* <Box paddingLeft="91.15px" paddingRigth="91.15px" border="1px solid blue"> */}

        <Box  marginTop="30px" border="1px solid blue">
        
            <Img src="https://www.avis.com/content/dam/cars/xl/2019/ford/2019-ford-fiesta-se-5door-2wd-hatchback-grey.png" w="419px" h="279px"></Img>
        
        </Box>
        <Box border="1px solid green">
            <h1>Economy</h1>
        </Box>
        <Box solid="1px solid green"></Box>
        <Box solid="1px solide blue"></Box>
        {/* </Box> */}
    </Box>
    </>
  )
}

export default Carcard