import React from 'react';
import './PageError.scss';
import NavBar from '../components/NavBar';
import Main from '../Layout/Main';
import { Link } from 'react-router-dom';

function page_error(){
return (
    <>
        <NavBar/>
        <Main>
            <div className="error_page">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to = "/">Retourner sur la page d’accueil</Link>
            </div>
        </Main>
    </>

);
}
export default page_error