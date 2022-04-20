import React from 'react'
import {
    Box, 
    Button, 
    Text, 
    VStack
} from '@chakra-ui/react'
import Login from '../Login/Login'
import RouteBar from './RouteBar'
const SideBar = () => {
  return (
    <VStack boxShadow='xl' p={4} m={8}>
        <Login />
        <RouteBar />
        <Button
        mt={4}
        colorScheme='gray'
        >
          Log Out
        </Button>
    </VStack>
  )
}

export default SideBar