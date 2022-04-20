import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const RouteBar = () => {
  return (
    <VStack >
        <Button colorScheme='blue' variant='outline' w='full' >
            All
        </Button>
        <Button colorScheme='green' variant='outline' w='full'>
            Personal
        </Button>
        <Button colorScheme='purple' variant='outline'w='full' >
            <Text>Offical  </Text>   
        </Button>
        <Button colorScheme='orange' variant='outline' w='full'>
            Others
        </Button>
    </VStack>
  )
}

export default RouteBar