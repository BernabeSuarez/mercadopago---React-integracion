import { Box, SimpleGrid } from "@chakra-ui/react";
import ProductData from "../data/productsList";
import ProductCard from "./ProductCard";

const ProductDisplay = () => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      {ProductData.map((prod) => (
        <Box key={prod.id} p="10">
          <ProductCard prod={prod} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProductDisplay;
