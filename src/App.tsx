import Navbar from './layouts/Navbar/Navbar';
import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useMatches } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';
import BottomNav from './layouts/BottomNav/BottomNav';

export default function App() {
  const routerMatch: any = useMatches();

  console.log(routerMatch);

  return (
    <main className='average-calc-app' id='averageCalcApp'>
      <Navbar />
      <Container maxW='container.xl'>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>{routerMatch[1].handle.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Outlet />
        <BottomNav />
      </Container>
    </main>
  );
}
