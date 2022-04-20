import { Box, Stack } from '@chakra-ui/react';
import SideBar from './Components/SideBar/SideBar';
import AllRoutes from './Router/Routes';

function App() {
  return (
    <Stack direction={{base : "row", lg : 'row', md : "column", sm : "column"}}>
      <Box p={4} boxShadow='xl'>
      <SideBar />
      </Box>
      <Box>
        <AllRoutes />
      </Box>
    </Stack>
  );
}

export default App;
