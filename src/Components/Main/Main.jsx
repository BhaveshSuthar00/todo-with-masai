import { Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../SideBar/SideBar'
import RightSide from './RightSide'
const Main = () => {
  return (
    <Flex border='1px'>
        <RightSide />
    </Flex>
  )
}

export default Main