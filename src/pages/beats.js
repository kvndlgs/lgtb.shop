import React from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
 display: flex;
 width:100%;
 height: auto;
 justify-content: center;
 flex:1;
 background: rgba(41,37,42,0.8);
 transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
 iframe {
    width: 100%;
    height: auto;
    max-height:900px;
    padding:40px;
    z-index:999;
 }
`



export default function Beats(){
    return (
        <>
    <PlayerWrapper>
    <iframe id="bs-player" src="https://player.beatstars.com/?storeId=122232" frameBorder="0" />
    </PlayerWrapper>
</>
    )
}
