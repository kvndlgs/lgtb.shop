import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items:center;
  justify-content:center;
  background: #252226;
`


const Nav = styled.div`
 display: flex;
 flex-direction: row;
 align-items:center;
 justify-content: space-between;
 width:100%;
 padding:0 4rem;
 height: auto;

 @media(max-width:600px){
	justify-content:center;
 }

   #logo {
      fill: white;
      padding:0.5rem;
      cursor: pointer;

 &:hover #bread, &:active #bread {
	transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
   fill: #f9edd9;
 }

 &:hover #crust, &:active #crust {
	transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
   fill: #edb769;
 }
  }

 #link  {
  font-family: 'Riverside Texture Regular', sans-serif;
   font-size:15px;
   letter-spacing:3px;
   transition: color 0.4s cubic-bezier(0.23, 1, 0.320, 1);
   cursor: pointer !important;
   &:hover {
     color: #8869ed;
     cursor: pointer !important;
   }

   @media(max-width: 600px){
     display: none;
   }
 }

`

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
      <Link id="link" to="#"></Link>
      <Link id="link" to="#"></Link>
	  <Link id="logo" to="/">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 315.59"
          width="46px"
        >

<path id="crust" d="M256,48.2c0,1.8-0.1,3.5-0.4,5.2c-0.5,3.3-1.2,6.6-2.3,9.8c-1.5,4.5-3.6,8.7-6.1,12.7c-3.3,5.2-7.2,9.9-11.7,14
	l-4.7,4.4l1.5,6.2c1.4,5.6,2.6,11.3,3.6,17c1.4,7.5,2.5,15,3.3,22.3c1,8.9,1.5,17.5,1.6,25.7c0.1,9-0.4,18-1.6,27
	c-0.2,1.3-0.6,5.1-1.6,10.8c-1.2,7.3-2.8,15-4.6,22.9c-2.5,10.7-5.3,21.3-8.6,31.8c-4,13-8.6,25.5-13.6,37.4c-1,2.5-2.4,4.8-4,6.9
	c-3.2,4.1-7.4,7.3-12.2,9.2c-2.5,1-5,1.6-7.6,1.9c-5,0.6-10.2,1-15.4,1.4s-10.6,0.6-15.9,0.7s-10.7,0.1-16.1,0s-10.8-0.3-16.1-0.7
	c-7-0.4-13.9-1.1-20.7-1.9c-0.2-0.3-0.2-0.6-0.3-0.9c-0.1-0.1-0.3-0.1-0.4,0c-0.2,0.2-0.3,0.4-0.3,0.7c-2.8-0.3-5.6-0.7-8.4-1.1
	c-8.4-1.3-16.5-2.8-24.3-4.7c0-0.1,0-0.2,0-0.3c0-0.3,0-0.3-0.3-0.2v0.2c0,0.1,0.1,0.2,0.1,0.3c-0.9-0.2-1.9-0.4-2.8-0.6
	c-8-2-15.9-4.4-23.6-7.2c-6.8-2.5-13.4-5.4-19.7-8.8c-1-0.5-2-1.2-2.9-1.9c-0.9-0.8-1.8-1.6-2.6-2.5c-0.8-0.9-1.5-1.9-2.2-3
	c-0.7-1.1-1.3-2.2-1.8-3.4c-0.5-1.2-1-2.4-1.6-3.5s-1.2-2.4-1.8-3.5s-1.3-2.4-2-3.6c-0.6-1-1.2-2-1.9-3c0.7,0.5,1.4,0.9,2.2,1.3
	c6.8,3.5,13.9,6.6,21.2,9c7.8,2.6,15.8,4.8,23.9,6.5c8.2,1.8,16.9,3.2,25.9,4.3c8.7,1.1,17.8,1.8,26.9,2.2h0.6l60.8-2.5h0.4l0.3-0.1
	c2.1-0.3,4.1-0.8,6.1-1.6c1.9-0.7,3.8-1.7,5.5-2.8c1.7-1.1,3.4-2.4,4.8-3.9c1.5-1.5,2.8-3.1,4-4.8l0.1-0.1l0.1-0.1l1.5-2.5l0.1-0.2
	l0.1-0.2l0.2-0.4l0.2-0.4l0.2-0.4l0.1-0.3v0c3.8-8.9,7.5-18.2,10.8-27.9c2.8-8.2,5.5-16.7,7.8-25.3c1.9-7,3.7-14.1,5.3-21.1
	c1.2-5.3,2.3-10.5,3.1-15.4l0.5-3.1c0.2-1,0.3-1.9,0.4-2.7s0.2-1.4,0.3-2s0.1-1,0.2-1.2l0.1-0.4c1.7-11.9,2.3-23.9,1.7-35.9
	c-0.4-10.6-1.5-21.1-3.1-31.6c-1.4-9.5-3.1-17.3-4.2-22.3c-0.4-1.8-0.8-3.3-1.1-4.5c5-4,9.4-8.7,13.3-13.9c3.5-4.8,6.4-10,8.4-15.6
	c1.4-3.7,2.3-7.6,2.8-11.6c0.2-1.6,0.3-3.1,0.3-4.7c0.2-4.6-0.6-9.2-2.3-13.5l9.1,7.8l0.3,0.3c1.3,1,2.6,2.2,3.7,3.4
	c1.3,1.5,2.5,3.1,3.4,4.9c1.1,2.1,2,4.3,2.6,6.6c0.7,2.9,1,5.8,1,8.8V48.2z M70.1,302.6c0-0.1-0.2-0.4-0.3-0.7
	c-0.1-0.3-0.4-0.4-0.7-0.2c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.3-0.4,0.5-0.6,0.8c0,0.2,0,0.3,0,0.5c0,0,0.2,0.1,0.3,0
	c0.4-0.2,0.8-0.1,1.2,0.1C70,303.4,70.3,303.1,70.1,302.6L70.1,302.6z M73.3,303.1c-0.1-0.1-0.3-0.2-0.4-0.2c-0.3,0.2-0.7,0.4-1,0.7
	v0.2c0,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.4,0.3,0.7,0.2c0.1,0,0.1-0.1,0.2-0.1c0.2-0.3,0.4-0.5,0.6-0.8
	C73.4,303.4,73.4,303.2,73.3,303.1L73.3,303.1z M93.8,309.5L93.8,309.5l0.1,0.1C94,309.5,94,309.4,93.8,309.5z M94.2,303
	c0-0.1,0-0.3-0.1-0.4h-0.2c0,0-0.1,0.3-0.1,0.4S94.1,303.2,94.2,303L94.2,303z M94.7,299.3c-0.7,0.2-0.9,0.7-1.1,1.3
	c0,0.1,0.1,0.3,0.1,0.5c0.1,0.1,0.2,0.2,0.4,0.1c0,0,0,0,0.1,0C95.1,300.7,95.2,300.3,94.7,299.3L94.7,299.3z M96.8,310.8
	c0-0.1-0.3-0.1-0.4-0.1c-0.3,0.1-0.6,0.4-0.6,0.7c0,0.1,0.2,0.4,0.3,0.4c0.2,0,0.4-0.1,0.6-0.3C96.8,311.3,96.8,311,96.8,310.8
	L96.8,310.8z M100.1,304.1L100,304l-0.1,0.1L100.1,304.1z M102.2,304.1c0-0.3-0.3-0.5-0.6-0.4c-0.2,0.1-0.3,0.3-0.4,0.5
	c-0.1,0.2,0.2,0.4,0.5,0.4S102.2,304.4,102.2,304.1z M104.4,299.8c0,0-0.1-0.1-0.2-0.2s-0.2,0.1-0.2,0.2s0.1,0.1,0.2,0.2
	S104.4,299.9,104.4,299.8z M107.7,306.2c-0.1-0.2-0.2-0.3-0.4-0.1c-0.1,0-0.1,0.1-0.1,0.2c0,0.2,0.1,0.3,0.3,0.3
	c0.1,0,0.2-0.1,0.2-0.2C107.7,306.3,107.7,306.2,107.7,306.2L107.7,306.2z M109.2,307.8v-0.3c-0.2-0.1-0.3-0.3-0.5-0.4
	c-0.2,0-0.5,0.1-0.7,0.2v0.2c0.1,0.3,0.3,0.6,0.6,0.8c0.3,0.1,0.5-0.1,0.6-0.3C109.2,307.9,109.2,307.9,109.2,307.8L109.2,307.8z
	 M4,125.8c-0.6-1-1.1-2.1-1.6-3.3v-0.1c0.2,0.3,0.5,0.5,0.7,0.8c3,3.1,6.6,5.5,10.7,7.1c2.9,1.1,5.9,1.9,8.9,2.3
	c0.1,0.6,0.2,1.2,0.3,2c0.4,3.1,0.7,6.2,0.8,9.4v2.6l-1.7-1c-1-0.6-1.9-1.2-2.9-1.9s-1.9-1.3-2.7-1.9c-0.8-0.7-1.6-1.4-2.3-2.1
	c-0.7-0.7-1.3-1.5-1.8-2.3l-6.2-8.5l-0.3-0.4C5.1,127.6,4.5,126.7,4,125.8z"/>
<path id="bread" d="M134.2,239.1l1.2,0.2c8.4,1.1,14.6-2.6,17.3-10.7c2.2-6.6,0.4-10.9-4.9-12.8c-1.7-0.3-3.3-0.4-5-0.3l-2.4,0.1
	c-1.4,0.2-2.2,0.4-2.3,0.9c0,0.3,0,0.5,0.1,0.8c-0.1,0.4-0.4,0.8-0.7,1.1c-0.7,3.1-1.3,5.6-1.9,7.6c-0.1,0.3-0.1,0.5-0.2,0.8
	c-0.3,0.8-0.6,1.6-1.1,2.4c0.1,0.4,0.1,0.7,0,1.1c-0.1,0.4-0.3,0.5-0.5,0.5c-0.2,1.1-0.3,1.6-0.5,2.7L132,238
	C132,238.5,132.7,238.9,134.2,239.1L134.2,239.1z M9.4,258.5c-1.8-1-3.4-2.3-4.7-4c-1.3-1.6-2.2-3.5-2.8-5.5c-0.6-2-0.8-4.2-0.6-6.3
	c0.2-2.2,0.7-4.3,1.7-6.3c2.8-5.9,5.7-12.1,8.4-18.7s5.2-13.2,7.5-20.1c2.2-6.8,4.1-13.7,5.7-20.6c1.5-6.7,2.5-13.5,3-20.3
	c0.5-6.4,0.5-11.7,0.4-16c-0.1-3.4-0.3-6.8-0.8-10.1c-0.2-1.8-0.6-3.6-1.1-5.3c-0.1-0.5-0.3-1.1-0.6-1.6h-0.1
	c-1.1,0-2.3-0.1-3.4-0.2c-2.7-0.3-5.4-1-7.9-2c-3.2-1.2-6-3.1-8.4-5.5c-0.3-0.3-0.5-0.6-0.8-0.9c0.1,0.1,0.2,0.1,0.3,0.1
	c0.2-0.1,0.3-0.2,0.2-0.4s-0.2-0.3-0.4-0.2c0,0-0.1,0-0.1,0.1c-0.1,0-0.1,0.1-0.2,0.2c0,0.1,0.1,0.2,0.1,0.3
	c-2.3-2.9-3.8-6.3-4.4-9.9c-0.5-2.2-0.6-4.4-0.3-6.6c0.3-4.1,1.8-10,6.2-17c0.5-0.8,1.1-1.6,1.6-2.5c1.6-2.1,3.4-4.2,5.2-6.2
	c5.2-5.4,10.9-10.3,17-14.5c7.5-5.2,15.3-9.9,23.4-14c8.9-4.6,19.1-9.2,30.2-13.6l0.6-0.2l1.4-0.6c0.2,0.1,0.3,0.2,0.5,0.3
	c0.3,0.2,0.4,0.5,0.4,0.9c0,0.2,0.3,0.4,0.5,0.5s0.5-0.2,0.5-0.5s0-0.9,0-1.3v-0.7c2-0.9,4.7-2,8-3.4c7.7-3.1,15.5-6.1,23.2-8.8
	c10.6-3.8,20.8-6.9,30.3-9.5c8.4-2.3,16.4-4,23.7-5.3c2.4-0.4,4.9-0.8,7.3-1c4.8-0.6,9.7-1,14.5-1c1.6,0,3.1,0,4.6,0.1
	c5.4,0.2,10.8,1.3,15.9,3.2c4.4,1.6,8.1,4.6,10.8,8.4c2.5,3.8,3.9,8.7,3.7,14.9c0,1.3-0.1,2.6-0.2,3.9c-0.5,3.5-1.3,6.9-2.5,10.2
	c-1.9,5-4.4,9.7-7.6,14c-4.3,5.8-9.4,10.9-15.3,15.1c0,0,0.9,3,2.1,8.3s2.8,12.8,4.1,21.8c1.6,10.2,2.6,20.5,3,30.9
	c0.5,11.6,0,23.2-1.6,34.8l-0.1,0.4c0,0.3-0.1,0.6-0.2,1.2l-0.3,1.9c-0.1,0.8-0.3,1.6-0.4,2.6l-0.5,3c-0.7,4-1.7,9.1-3.1,15.2
	s-3.1,13.1-5.2,20.8s-4.7,16.1-7.7,24.9s-6.6,18.1-10.6,27.4l-0.1,0.3l-0.1,0.3l-0.1,0.3c-0.1,0.1-0.1,0.2-0.2,0.3l-1.5,2.5
	c-0.9,1.4-2,2.6-3.1,3.8c-3.5,3.5-8.1,5.7-13,6.5l-60.8,2.5c-8.8-0.4-17.7-1.1-26.5-2.2s-17.1-2.5-25.3-4.2
	c-7.9-1.7-15.6-3.8-23.2-6.3C22.7,264.7,15.9,261.8,9.4,258.5z M10.7,111.5v-0.1l-0.1,0.1L10.7,111.5z M44.7,257.3
	c0-0.2-0.1-0.5-0.3-0.7c-0.1-0.1-0.3-0.2-0.5-0.1c-0.2,0-0.4,0.4-0.3,0.6s0.2,0.6,0.3,1C44.4,258,44.7,257.7,44.7,257.3z
	 M46.4,259.2c-0.1-0.1-0.3-0.1-0.5-0.1c-0.1,0-0.2,0.2-0.2,0.3c0,0,0,0.1,0,0.1c0,0.1,0.1,0.1,0.2,0.2c0.1-0.1,0.3-0.2,0.4-0.3
	C46.4,259.4,46.4,259.3,46.4,259.2z M53.1,263.2c-0.1,0-0.3-0.1-0.4-0.1s-0.1,0.1-0.1,0.2c0,0.1,0.1,0.2,0.3,0.2c0,0,0.1,0,0.1,0
	C53,263.4,53,263.3,53.1,263.2L53.1,263.2z M55.2,271.1l-0.1-0.2l-0.1,0.2L55.2,271.1z M61.4,248.1c-0.6,0.4-0.9,1-1,1.7
	c0,0.1,0.1,0.3,0.3,0.4c0.1,0.1,0.3,0.1,0.5,0C61.8,249.7,61.9,248.8,61.4,248.1C61.4,248.2,61.4,248.1,61.4,248.1z M64.1,266.2
	L64,266l-0.1,0.2L64.1,266.2z M66.1,265.5c0-0.2-0.2-0.2-0.3,0v0.2c0,0.1,0.2,0.1,0.2,0C66.1,265.7,66.1,265.6,66.1,265.5z
	 M69.3,271.9c-0.2-0.2-0.3-0.4-0.5-0.5c-0.1,0.6-0.3,1-0.4,1.5c0,0.1,0.2,0.2,0.3,0.3s0.2,0,0.2,0C69.5,272.8,69.6,272.4,69.3,271.9
	L69.3,271.9z M85.5,267.8c-0.2-0.1-0.4-0.1-0.4,0.1s-0.1,0.7-0.1,0.9s0,0.6,0.1,0.6c0.3,0.1,0.4-0.1,0.6-0.3
	c0.1-0.1,0.2-0.3,0.3-0.4C86,268.3,85.9,268,85.5,267.8L85.5,267.8z M92,264.5c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.3-0.4-0.4-0.6-0.3
	c-0.2,0.1-0.3,0.3-0.4,0.5c0,0.4,0.5,0.9,0.8,0.8C91.8,265,91.9,264.7,92,264.5L92,264.5z M95.7,271.1c0,0,0-0.1-0.1-0.2v0.4
	C95.6,271.2,95.7,271.2,95.7,271.1z M95.9,268.2c-0.1-0.2-0.4-0.3-0.7-0.2c-0.1,0.1-0.3,0.3-0.2,0.4c0.1,0.2,0.3,0.3,0.4,0.5
	C95.7,268.8,96,268.4,95.9,268.2z M96.1,269.7H96l0.1,0.1L96.1,269.7z M96.8,275.9c-0.1-0.3-0.1-0.6-0.2-0.9c0,0-0.2-0.1-0.2-0.1
	s-0.3,0.1-0.3,0.3S96.6,275.6,96.8,275.9z M98.3,276c-0.2-0.3-0.5-0.4-0.9-0.3c-0.2,0.1-0.4,0.3-0.6,0.4V276v0.1
	c0.2,0.3,0.4,0.5,0.6,0.8c0.2,0.2,0.5,0.2,0.7,0C98.3,276.7,98.4,276.3,98.3,276L98.3,276z M102.9,273.9c0-0.1,0-0.1-0.1-0.2h-0.2
	c-0.1,0-0.1,0.1,0,0.2C102.7,274.1,102.8,274.1,102.9,273.9z M189.7,127.8c-0.1,0-0.2-0.1-0.2-0.1c-0.2,0.1-0.4,0.2-0.6,0.3
	c0,0.2,0,0.3,0.1,0.4c0.3,0.1,0.5-0.1,0.6-0.3C189.6,128.1,189.7,128,189.7,127.8z M106.4,66.1c0.2,15.1-0.1,21.1,0.5,24.8
	c0.2,1,0.2,1.5,0.4,2.5c0.7,4.4,2.8,8.3,3.6,10.8c2.1,7.9,5.9,15.4,11,21.8c6.4,7.8,20.8,8.7,31.5,6c7.9-1.9,15.5-4.9,22.4-9
	c3.6-3,5.3-4.4,8.6-7c3-4,5.4-8.4,7.1-13.1c1.2-3,2.7-10.6,3.1-22.6c-0.2-2.4-0.3-3.7-0.5-6.1v-3c-0.2,0-0.3-0.2-0.3-0.6
	c0.1-1,0.1-2,0-3c-0.2-1.6-1.3-2.5-3.7-2.3c-5.3,0.6-10.5,1.6-15.6,3.1c-0.5-0.1-1.1-0.1-1.6,0.1c-0.4,0.2-0.7,0.4-1.1,0.6
	c-0.2,0-1,0.1-2.4,0.3c-1.4,0.5-2.2,0.8-2.4,0.9l-2.1,0.3c-0.6,0.1-1.1,0.4-1.6,0.7c-1.3,0.2-2.6,0.5-3.8,0.8
	c-1,0.3-1.5,0.4-2.6,0.8l-2.1,0.9c0-0.2-0.2-0.2-0.5-0.1c-1,0.3-1.6,1.5-1.8,3.6c0.5,3.9,0.8,5.8,1.2,9.8c0.1,1,0.9,1.4,2.3,1.3
	c1.5-0.6,2.3-0.9,2.5-0.9c6.3-1.4,9.5-1.9,10-2l0.8,0.1c-0.8,7.9-2,12.9-3.6,14.8c0.1,2-2.5,4.3-8.1,7.1l-2.1,0.4
	c-1.7,0.3-3.4,0.5-5.1,0.5c-3.9-0.8-7.4-4.1-10.9-9.2c-1.7-1.1-3.3-6.8-5.5-16.4c-0.1-0.3-0.1-0.4-0.1-0.7l0.3-0.6
	c-0.3,0.1-0.4,0.1-0.4-0.1c-0.3-2-0.5-2.9-0.8-4.9c-0.9-5.2-1.1-13.6,1.9-20.9c2.2-4.8,6.1-8.5,11-10.4c2.1-0.7,3.2-1.1,5.3-1.8
	c2.3,0.3,3.4,0.5,5.7,0.9c1.9,0.3,4.5,4.2,7.4,11.3c2.4-0.7,5.1-1.1,7.4-1.8c0.8-0.3,1.5-0.5,2.3-0.9c1.4-0.2,2.1-0.3,3.4-0.5
	c2.1-0.5,4.6-1.2,7.2-2c0.9,0.1,1.7,0.2,2.6,0.2c1.4-0.5,2-0.9,1.9-1.4c-1.4-9.3-4.3-16.1-8.8-20.7c-2-2.5-7.6-7-16.6-9.6
	c-7.7-2.2-19.7-0.9-28.2,1.5c-12,3.3-21.1,13.1-24.6,24.8C108.2,53.7,106.5,60.9,106.4,66.1L106.4,66.1z M188.4,136.5l-0.1,0.2h0.2
	L188.4,136.5z M176.6,144.7c-0.2-0.1-0.5-0.1-0.7,0c-0.2,0.1-0.3,0.5-0.1,0.7c0.2,0.3,0.4,0.5,0.7,0.7c0.1,0.1,0.3,0.1,0.4,0.1
	c0.1-0.1,0.1-0.3,0.2-0.4C177.2,145.3,177,144.9,176.6,144.7L176.6,144.7z M106.1,227.6c-1.4,5.9-2.5,10.4-3.2,13.3
	c-0.1,1.2-0.2,1.8-0.3,3.1c-0.3,0-0.5,0.1-0.5,0.3h0.5c-1.8,7.1-1.8,11.2-0.3,11.3c3.2,0,6.4,0.2,9.7,0.6c7.5,0.9,11.3,2.3,13.8,3.6
	l0.1-0.3c0.6,0.2,1.2,0.5,1.8,0.8c6.8,2.9,15.3,2.1,21.4-0.4c15.5-4.6,33.1-19.2,34.5-33c0.3-3.8-0.2-7.5-1.5-11.1
	c-0.3-5.3-3.4-9.7-8.4-12.9c1.7-1.4,3.3-2.9,4.8-4.5c1.7-0.2,7.6-7,9.9-16.9c1.9-8,2-20.3-5-28.4c-3.8-2.9-10.4-3.9-20.4-2.3
	l-5.7,1.6l-0.8-0.1c0,0.2-0.2,0.4-0.4,0.4l-1.2,0.4c-1.5,0.4-3,0.7-4.5,1l-0.9,0.6l-2.9,0.5c-3.1,0.9-6.5,2.1-10.4,3.5
	c-3.3,0.6-4.9,0.9-8.2,1.4c-4.1,1-6.8,2.1-8.2,3.4c0.4,2.4,0.5,4.8,0.2,7.2c-0.2,1.7-0.2,2.5-0.4,4.1c-0.4,1.6-0.8,3.1-1.4,4.6
	c-0.2,1.6-0.3,2.4-0.6,4l-0.5,0.6l0.4-0.1c-1.3,3.8-1.9,5.6-3.3,9.1c0.3,2.8,0.4,4.2,0.6,6.9c-1,3.1-1.7,5-1.9,5.9
	c-0.3,1.3-0.3,2.9-0.6,3.9s-1.2,2.9-1.9,5.3l-0.5,1.7c-0.3,0.7-0.8,1.4-1.4,1.8h0.5c-0.6,2.1-1.1,4.2-1.4,6.3l-0.7,0.9l0.3,0.4
	L106.1,227.6z M86.8,115.3c0.1,0.3,0.3,0.5,0.6,0.3c0.1-0.1,0.2-0.2,0.2-0.4c0-0.2-0.4-0.5-0.6-0.4S86.9,115.1,86.8,115.3z
	 M81.3,112.1c0,0.2,0.1,0.3,0.3,0.3s0.2-0.1,0.2-0.1s-0.1-0.3-0.3-0.3S81.4,112.1,81.3,112.1z M63.9,42l0.2,0.3l0.4-0.3
	c-0.1-0.1-0.1-0.2-0.2-0.2C64.2,41.9,64,41.9,63.9,42z M55.9,56.5v0.2c0.1,0,0.1,0,0.2,0c0.2-0.1,0.2-0.2-0.1-0.3
	C56,56.5,55.9,56.5,55.9,56.5z M55.9,74.9c-0.1,0-0.1,0.1-0.2,0.1l0.2,0.1l0.2-0.1C56,75,55.9,74.9,55.9,74.9L55.9,74.9z M54.8,68.8
	c0.1,0.1,0.3,0.2,0.4,0.2c0.2-0.1,0.4-0.2,0.6-0.3v-0.3c-0.2,0-0.5,0-0.7,0.1C54.9,68.5,54.9,68.7,54.8,68.8L54.8,68.8z M30.4,75.7
	c0.6,2.3,1,3.5,1.5,5.6c0.1,0.7,0.3,1.3,0.3,2c0.3,0.4,0.4,0.8,0.5,1.3c0.3,1.3,0.5,1.9,0.8,3.2c0.1,0.3,0.1,0.6,0,0.9
	c0.1,0.1,0.2,0.3,0.3,0.5c0.7,3.3,1.3,7.4,2,11.6c0.4,2.4,0.8,4.6,1,6.1c0,0.5,0,0.8-0.1,1.3c0.4,1,0.6,2,0.7,3
	c-0.1,0.2-0.1,0.3-0.2,0.4l0.3,0.3c0,0.3,0,0.5-0.2,0.8c0.2,0.9,0.3,1.8,0.4,2.8c0.1,1.9,0.2,2.8,0.2,4.7c0,1,0,2.8-0.1,5.2
	c-0.2,0-0.2,0.1-0.2,0.3h0.3c0,0.1-0.2,1-0.2,2.7c0,1.2,0.1,2.3,0.3,3.5l-0.3,0.5c0.1,0.5,0.2,0.7,0.3,1.3v8.5l0.3,1.2
	c-0.2,0-0.3,0.1-0.3,0.3c0,0.9,0.1,1.9,0.3,2.8c0.1,1,1.2,1.7,3.8,1.8c0-0.1,0-0.2,0-0.3c10.3-1.2,18.3-2.4,21.7-2.7l5.8-0.7
	c1.6-0.3,3.2-0.2,4.7,0.1L75,144c0.7-0.2,1.5-0.1,2.2,0.1c0.4-0.1,0.8-0.3,1.1-0.5c3.4-0.2,6.3-0.5,8.7-0.8c3-0.4,4.5-0.6,7.4-1
	c2.3-0.3,3.5-1.9,3.5-4.4h-0.3c0.4-4.8,0.6-9.7,0.6-14.5c0.3-0.9,0.5-1.7,0.6-2.6c0.3-3.1-1-5-2.4-4.7l-3.2,0.7
	c-1.2,0.3-2.4,0.6-3.6,1.1c-3.5,0.4-6.4,0.9-8.6,1.4c-0.9,0.2-4.7,1.2-11.1,2.9l-4.8,0.8c-0.4-1.3-0.6-1.9-1-3.1
	c-0.1-3.3-0.4-6.7-0.9-10c-0.3-1.6-0.4-2.4-0.7-4c-0.5-2.6-1.3-5.2-2.3-7.7c0.2-0.1,0.3-0.2,0.3-0.3l-0.3,0.1
	c-0.9-3.8-2.1-7.5-3.5-11.2c0.2-0.1,0.3-0.2,0.3-0.3c-0.2,0.1-0.4,0.1-0.4-0.1c-0.3-1.3-0.5-1.9-0.8-3.2l0.2-0.6
	c-0.2,0.1-0.4,0.1-0.4-0.1l-0.2-0.9c-0.1-0.3,0-0.7,0.1-1c-0.3-0.2-0.5-0.5-0.6-0.8c-0.4-1.4-0.5-2.1-0.9-3.6
	c-0.2-0.7-0.5-1.4-0.9-2.1l0.2-0.7c-0.6-1.3-1-2.6-1.4-4c-0.8-2.9-1.2-4.4-2-7.7c-2.1,0.7-3.1,1.1-5.1,1.8c-2.9,1.6-4.2,2.4-6.6,4
	c-1.2,0.8-2.3,1.8-3.2,3.1L33.7,71c0-0.3-0.1-0.5-0.4-0.6c-0.4,0-0.9,0-1.3,0c0.3,0.4,0.7,0.7,1.1,0.9c-0.7,0.4-1.3,0.9-2,1.4
	C30.5,73.6,30.2,74.6,30.4,75.7L30.4,75.7z M25.1,245.3c-0.8,2.4,0.8,4.5,5.4,5.8l0.1-0.3c3.1,1.3,6.3,2.3,9.6,2.9
	c2.3,0.4,3.5,0.6,5.9,1c1.5-0.1,3.1-0.1,4.6,0c2.5,0.3,4.3-1.8,5.6-5.8c0.5-1.6,0.8-2.4,1.3-3.9l0.6-0.5c-0.3,0-0.4-0.1-0.3-0.3
	c0.7-1.9,1-2.9,1.7-4.7c0.5-1.3,1.1-2.5,1.8-3.7c-0.3,0-0.4-0.1-0.3-0.3l1-1.4c0.5-1.2,0.7-1.9,1.2-3.1l0.6-0.4
	c-0.3,0-0.4-0.1-0.3-0.3s0.2-0.4,0.3-0.7c0.8-2.1,2-3.7,2.5-4.8c0.9-2.2,1.6-4.5,2.2-6.8c0.3,0,0.4,0,0.5-0.2h-0.4
	c0.7-1.7,1.3-3.5,1.6-5.4l0.6-0.4c-0.3,0-0.3-0.8,0-1.9c0.2-0.5,0.6-1,1-1.4c1.8-5.7,2.7-8.4,4.3-14.6l0.2-0.4l0.7-1.1
	c-0.2,0-0.3-0.1-0.3-0.2c0.3-0.9,0.8-1.6,1.5-2.3c2,0.2,3,0.3,5,0.4c3.1-0.1,4.7-0.1,4.8-0.1l1.4,0.3c0.4-0.1,0.8-0.2,1.1-0.2
	l1.7,0.3l1.5-0.2l2.4,0.2c2.1,0,3.3-0.7,3.6-2c0.7-3,1.1-4.5,1.7-7.8c0.2-0.9,0.2-1.8,0.2-2.8c0.4-0.8,0.6-1.7,0.8-2.6
	c0.5-3.4,0.8-5.1,1.2-8.8c0-0.9,0-1.3-0.1-2.2c-1.2,0.1-3.6-0.2-6.6-0.3c-13.5-0.1-29,1.7-43.6,2.1l-0.6-0.3c0,0.2-0.2,0.3-0.4,0.3
	h-2.6c-0.4,0-0.9-0.1-1.3-0.3c-0.4,0.2-0.9,0.3-1.3,0.2c-2.7-0.1-3.9-0.1-6.4-0.3c-1.9-0.1-2.9,0.6-3.1,2c-0.3,2.5-0.4,3.7-0.8,5.9
	c-0.1,1.1-0.1,1.6-0.2,2.6c-0.2,0-0.3,0-0.3,0.2c-0.2,2-0.5,4.1-1,6.1c-0.3,0.7-0.5,1-0.8,1.7c0,0.6,0.5,1.1,1.5,1.3l0.8,0.2
	c1.1,0.2,1.6,0.3,2.8,0.4c0,0.1,0,0.2,0.2,0.2l0.1-0.2c4.4,0.8,8.2,1.2,10.6,1.6l0.3,0.1c-0.9,2.5-1.4,3.7-2.4,6
	c-0.1,0.6-0.2,0.8-0.3,1.4c-0.2,0-0.4,0.2-0.7,0.7c-0.2,0.3-0.2,0.7-0.1,1c-1,1.4-1.9,2.8-2.8,4.3c-1.1,2.7-1.7,4.1-2.8,6.9
	c-0.2-0.1-0.3,0-0.4,0.1c0.2,0.1,0.3,0.1,0.2,0.3c-1.3,2.4-1.9,3.6-3.3,6.2l-0.9,2.5c-0.2-0.1-0.3,0-0.4,0.1l0.3,0.1
	c-0.4,0.8-1,1.6-1.5,2.3c-0.2,0.5-0.4,1-0.4,1.6c-0.8,1.2-1.5,2.5-2.1,3.8c-0.8,1.9-1.3,2.8-2.1,4.8l-0.5,0.4l0.3,0.1
	c-0.3,0.6-0.6,1.1-1,1.6c-0.1,0.3-0.1,0.6,0,0.9c-0.7,1.1-1.2,2.3-1.7,3.5C26.9,239.8,26.3,241.6,25.1,245.3L25.1,245.3z
	 M36.1,205.3v-0.2l-0.2,0.1L36.1,205.3z M24.4,242.3c0,0.2,0.2,0.5,0.4,0.5c0.2,0.1,0.4-0.2,0.4-0.5s-0.2-0.3-0.3-0.4
	S24.5,242.1,24.4,242.3z M22.8,248.3c0.1,0.1,0.1,0.1,0.2,0.1s0.1-0.1,0.2-0.1l-0.2-0.2C23,248.2,22.9,248.2,22.8,248.3z
	 M20.5,241.9c0,0.1,0.1,0.1,0.1,0.2c0-0.1,0.1-0.1,0.1-0.2c0-0.1-0.1-0.1-0.1-0.2S20.6,241.8,20.5,241.9L20.5,241.9z M9.7,255.7
	c0-0.4-0.4-0.7-0.8-0.7c-0.3,0-0.5,0.2-0.4,0.5c0,0,0,0,0,0c0,0.3,0.2,0.6,0.5,0.7C9.3,256.3,9.7,256.1,9.7,255.7
	C9.7,255.8,9.7,255.7,9.7,255.7z M159.3,190.1c0.8-1.3,1.4-2.7,1.7-4.2c0.4-1.6,0.6-2.4,1-4.1c0.8-6.5-1.5-8.9-6.1-7.9
	c-3.2,0.7-5.8,0.9-6.6,1.2s-1.3,0.7-1.3,0.9c-0.6,3.6-1.7,11.1-4.2,22.1l0.7-0.1C150.8,197,155.7,194.5,159.3,190.1z"/>
</svg>
      
      </Link>
      <Link id="link" to="#"></Link>
	  <Link id="link" to="https://teespring.com/stores/lgtb-official-merch"> MERCH </Link>
      </Nav>
    </StyledHeader>
  )
}