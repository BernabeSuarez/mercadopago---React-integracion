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
import axios from "axios";

const buy = (prod) => {
  axios
    .post("http://localhost:8080/payment", prod)
    .then((res) => (window.location.href = res.data.response.body.init_point))
    .catch((err) => console.log(err));
};

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
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => {
              buy(prod);
            }}
          >
            Comprar
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProductCard;
