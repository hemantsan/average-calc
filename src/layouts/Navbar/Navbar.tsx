import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const MobileDrawer = () => {
    return (
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <List spacing={3}>
              {pages.map((item) => (
                <ListItem key={'mobile-' + item.label}>
                  <Button padding={{base: 0}} as={NavLink} to={item.to} variant='ghost' onClick={onClose}>
                    {item.label}
                  </Button>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };

  return (
    <Box as='section' pb={{ base: '4' }} className='top-navbar'>
      <MobileDrawer />
      <Box as='nav' bg='bg-surface' boxShadow='sm'>
        <Container py={{ base: '4' }} maxW='xxl'>
          <HStack spacing='10' justify='space-between'>
            <HStack justify='space-between'>
              <img src='logo.png' className='top-navbar__logo' />
              <b style={{ color: '#3182ce' }}>Average Calc</b>
            </HStack>

            {isDesktop ? (
              <Flex justify='space-between' flex='1'>
                <ButtonGroup variant='link' spacing='8'>
                  {pages.map((item) => (
                    <Button as={NavLink} key={item.label} to={item.to}>
                      {item.label}
                    </Button>
                  ))}
                </ButtonGroup>
                <HStack spacing='3'>
                  <Button variant='ghost'>Follow</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant='ghost'
                aria-label='Open drawer'
                icon={<FiMenu fontSize='1.25rem' />}
                colorScheme='teal'
                onClick={onOpen}
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
