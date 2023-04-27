import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import './BottomNav.scss';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <Tabs
      colorScheme='red'
      isFitted
      variant='enclosed-colored'
      className='bottom-nav'
      sx={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
      }}>
      <TabList>
        <Tab as={NavLink} to={'/'}>Home</Tab>
        <Tab as={NavLink} to={'/stock-average'}>Stock</Tab>
        <Tab as={NavLink} to={'/crypto-average'}>Crypto</Tab>
      </TabList>
    </Tabs>
  );
}
