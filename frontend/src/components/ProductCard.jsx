import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const ProductCard = ({ prod }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={prod.image}
        alt="Guitarra"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{prod.title}</Heading>

          <Text py="2">{prod.description}</Text>
          <Text fontSize="3xl">Precio</Text>
          <Text fontSize="4xl">$ {prod.price}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Comprar
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProductCard;
