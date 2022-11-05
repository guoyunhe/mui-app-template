import { Box, Button, Heading } from '@chakra-ui/react';
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
      <Box display="flex" gap={4} p={4} justifyContent="right">
        <Button as={Link} to="/login">
          Login
        </Button>
        <Button as={Link} to="/register">
          Register
        </Button>
      </Box>
      <Heading
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        top={0}
        display="flex"
        color="white"
        size="4xl"
        fontWeight="bold"
        fontStyle="italic"
        justifyContent="center"
        alignItems="center"
        textTransform="uppercase"
      >
        The Cool Bike App
      </Heading>
    </Box>
  );
}
