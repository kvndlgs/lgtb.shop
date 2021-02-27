import React from "react";
import Helmet from 'react-helmet';
import Footer from '../../components/footer';
import Header from '../../components/header'; 
import Beats from './beats';

import styled, { createGlobalStyle } from 'styled-components';


const Global = createGlobalStyle`

@import url('static\fonts\Riverside Texture.otf');

 * {
   &::after, &::before {
     box-sizing: border-box;
   } 
 }

 html {
   box-sizing: inherit;
 }
 body {
   margin:0;
   padding:0;
   width:100%;
   height:95vh;
   background: #4b434c;
 }

 a {
   text-decoration: 0 !important;
   color: #fff;
   cursor: pointer !important;
 }
`

const Container = styled.div`
 position: absolute;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 margin:0;
 padding:0;
 top: 0;
 bottom:0;
 left:0;
 right:0;
 width:100%;
 height:100%;
`

export function Wrapper({content, title}){
  return (
    <>
    <Global />
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Quality Beats At Fair Prices." />
      <meta property="og:title" content="LGTB Beat Shop" />
      <meta property="og:description" content="Quality Beats At Fair Prices." />
      <meta property="og:url" content="https://lgtb.shop" />
      <meta property="og:image:secure_url" content="https://i.imgur.com/Ayn1QlA.png"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="800"/>
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, no-follow" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <script src="https://airbit.com/js/embeds/html5/gatracking.js?gatracking=UA-167543913-1"></script>
      <title> LGTB Beat Shop </title>
    </Helmet>

    <Container>
    <Header />
      { content }
     <Footer />
    </Container>
    </>
  )
}


export default function Home() {

  return (
    <Wrapper content={<Beats />}/>
  )
}
