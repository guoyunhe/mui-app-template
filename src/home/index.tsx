import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button as={Link} to="/login">
        Login
      </Button>
    </div>
  );
}
