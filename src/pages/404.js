import React from 'react';
import {Wrapper} from './';

const ErrorPage = () => {
    return (
        <>
         <h1> 404 </h1>
        </>
    )
}

export default function NotFound() {
    return (
        <Wrapper content={<ErrorPage />}/>
    )
}