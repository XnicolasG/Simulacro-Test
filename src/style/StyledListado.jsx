import styled from "styled-components";

export const Main = styled.main`
background: linear-gradient(#6edbb1, #598dc9);
width: 100%;
height: 80vh;
`
export const ContCards = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
`
export const Card = styled.div`
    height: 30vh;
    padding: 2%;
    border-radius: 5px;
    margin: 2%;
    box-shadow:1px 2px 10px 5px #83838383 ;
`
export const ContImg = styled.div`
    width: 50%;
    margin: auto;
    background: white;
    border-radius: 5px;
    text-align: center;
`
export const Image = styled.img`
    max-width: 60%;
    height: 80px;
    
`
export const Nombre = styled.h3`
    margin-top: 1%;
    font-size: 1em;
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: #eb541e;
`
export const Precio = styled.p`
    font-weight: bolder;
`
export const BotonB = styled.button`
    border-radius: 5px;
    border: 2px solid white;
    background: transparent;
    color: white;
    text-align: center;
    width: 50%;
   :hover{
       background: #679de4;
   }
`