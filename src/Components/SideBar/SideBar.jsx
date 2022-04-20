import React from 'react'
import {
    Button, 
    VStack
} from '@chakra-ui/react'
import Login from '../Login/Login'
import RouteBar from './RouteBar'
const SideBar = () => {
  return (
    <VStack  >
        <Login />
        <RouteBar />
        <Button mt={4} colorScheme='gray'>
          Log Out
        </Button>
    </VStack>
  )
}

export default SideBar