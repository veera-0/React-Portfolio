/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../main/NotFound.css'
import { useEffect } from 'react';

const PageNotFound = () => {

    useEffect(() => {
        document.title = 'Page not found';
    }, []);

    return (
        <div className="not-found-container">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default PageNotFound;
