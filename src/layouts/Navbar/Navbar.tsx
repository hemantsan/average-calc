import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

export default function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const pages = [
    {
      label: 'Stock Average',
      to: '/stock-average',
    },
    {
      label: 'Crypto Average',
      to: '/crypto-average',
    },
  ];
  return (
    <Box as='section' pb={{ base: '4' }} className='top-navbar'>
      <Box as='nav' bg='bg-surface' boxShadow='sm'>
        <Container py={{ base: '4' }} maxW='xxl'>
          <HStack spacing='10' justify='space-between'>
            <HStack justify='space-between'>
              <img src='logo.png' />
              <b style={{ color: '#3182ce' }}>Average Calc</b>
            </HStack>

            {isDesktop ? (
              <Flex justify='space-between' flex='1'>
                <ButtonGroup variant='link' spacing='8'>
                  {pages.map((item) => (
                    <Button as={NavLink} key={item.label} to={item.to}>{item.label}</Button>
                  ))}
                </ButtonGroup>
                <HStack spacing='3'>
                  <Button variant='ghost'>Follow</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant='ghost'
                icon={<FiMenu fontSize='1.25rem' />}
                aria-label='Open Menu'
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
