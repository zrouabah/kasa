import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import SiteAppartement from './pages/SiteAppartement.jsx';
import About from './pages/About.jsx';
import PageError from './pages/PageError.jsx';
import reportWebVitals from './reportWebVitals.js';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Footer from './Layout/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import Main from './Layout/Main.jsx';


const HeaderfooterLayout = () => {
  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderfooterLayout />,
    errorElement: <PageError/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/flat',
      element: <SiteAppartement />,
        
      },
      {
        path: '/about',
        element: <About/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
