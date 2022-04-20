import { Flex } from '@chakra-ui/react';
import SideBar from './Components/SideBar/SideBar';
import AllRoutes from './Router/Routes';

function App() {
  return (
    <Flex justifyContent="space-between">
      <SideBar />
      <AllRoutes />
    </Flex>
  );
}

export default App;
