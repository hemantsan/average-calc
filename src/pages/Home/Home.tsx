import { Grid, GridItem, Box, AbsoluteCenter, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home() {
  const calcList = [
    {
      label: 'Stock Average',
      icon: '',
      to: '/stock-average',
    },
    {
      label: 'Crypto Average',
      icon: '',
      to: '/crypto-average',
    },
  ];
  return (
    <section className='site-section'>
      <Grid
        autoFlow={'1fr'}
        templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }}
        gap={6}>
        {calcList.map((item) => (
          <GridItem
            position={'relative'}
            key={'home' + item.label}
            w='100%'
            h='150px'
            bg='blue.500'
            borderRadius={4}>
            <AbsoluteCenter textAlign={'center'}>
              <Button as={Link} to={item.to} colorScheme='blue'>
                {item.label}
              </Button>
            </AbsoluteCenter>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
