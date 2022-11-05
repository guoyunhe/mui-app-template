import { Box, Button, Center, Heading, HStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelect from '../i18n/LanguageSelect';
import bikeImage from './bike.jpg';

export default function Header() {
  const { t } = useTranslation();
  return (
    <Box
      bgImage={bikeImage}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="700px"
    >
      <HStack position="absolute" top={4} right={4} spacing={4}>
        <div>
          <LanguageSelect />
        </div>
        <div>
          <Button as={Link} to="/login">
            {t('Login')}
          </Button>
        </div>
        <div>
          <Button as={Link} to="/register">
            {t('Register')}
          </Button>
        </div>
      </HStack>
      <Center h="100%">
        <Heading
          color="white"
          size="4xl"
          fontWeight="bold"
          fontStyle="italic"
          textTransform="uppercase"
        >
          {t('The Cool Bike App')}
        </Heading>
      </Center>
    </Box>
  );
}
