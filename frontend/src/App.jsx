import { Box, Center } from "@chakra-ui/react";
import ProductDisplay from "./components/ProductDisplay";

function App() {
  return (
    <Box bg="gray.900" height="100vh">
      <Center color="whiteAlpha.900">Tienda Fake Music Store</Center>
      <ProductDisplay />
    </Box>
  );
}

export default App;
