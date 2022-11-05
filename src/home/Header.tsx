import { Box, Button, Center, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bikeImage from './bike.jpg';

export default function Header() {
  return (
    <Box
      bgImage={bikeImage}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="700px"
    >
      <Box position="absolute" top={4} right={4} display="flex" gap={4}>
        <Button as={Link} to="/login">
          Login
        </Button>
        <Button as={Link} to="/register">
          Register
        </Button>
      </Box>
      <Center h="100%">
        <Heading
          color="white"
          size="4xl"
          fontWeight="bold"
          fontStyle="italic"
          textTransform="uppercase"
        >
          The Cool Bike App
        </Heading>
      </Center>
    </Box>
  );
}
