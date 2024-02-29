// routes.js
import React from 'react';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SiteAppartement from './pages/SiteAppartement.jsx';
import About from './pages/About.jsx';
import PageError from './pages/PageError.jsx';
import Footer from './Layout/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import Main from './Layout/Main.jsx';

const HeaderfooterLayout = () => (
  <>
    <NavBar />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderfooterLayout />,
    errorElement: <PageError />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/flat/:id', element: <SiteAppartement /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

export default router;
