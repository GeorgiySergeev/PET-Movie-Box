import React from 'react';
import { useEffect, useState } from 'react';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { TopBar } from 'components/Topbar/Topbar';
import { MobileHeader } from 'components/Mobile/Header/MobileHeader';
import { Container } from 'components/App/App.styled';

import { Footer } from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';

import { Suspense } from 'react';

const Layout = () => {
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const shouldRender = window.innerWidth >= 1280;
      setShouldRenderSidebar(shouldRender);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Container className="Main-Container">
        <MobileHeader />
        {shouldRenderSidebar ? <Sidebar /> : null}
        {/* <TopBar /> */}
        <Suspense fallback={<></>}>
          <Main>
            <Outlet />
          </Main>
        </Suspense>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default Layout;
