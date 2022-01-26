import styled from "styled-components";

export const Cont = styled.main`
margin-top: 0;
background: linear-gradient(#f35252c7, #70e7d3);
width: 100%;
height: 80vh;
`
export const IngresoProd = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 40%;
    padding: 2%;
    margin: auto;
    border-radius: 5px;
    background: #ffffffcf;
    box-shadow: 1px 5px 30px 2px #979696;
`
export const Titulo = styled.h3`
    color: black;
    margin: auto;
    font-size: 1.8em;
`
export const Inputs = styled.input`
    border-radius: 4px;
    border: 1.5px solid black;
    margin: auto;
    margin-top: 1%;
    text-align: center;
    width: 80%;
    height: 45%;
    font-size: 1rem;
    
    :focus{
        background:#ddd2d2 ;
     }
`
export const ContFile = styled.div`
    display: flex;
    flex-direction: column;
    margin:1% ;
    border-radius: 4px;
    border: 1.5px solid black;
    padding: 1%;
`
export const Label = styled.label`
    margin: 1%;
    margin-bottom: 2%;
    font-weight: bolder;
    color: #d61414;
`
export const InputFile = styled.input`
    margin: auto;
    border: none;
`
export const Boton = styled.button`
    width: 60%;
    border-radius: 5px;
    border:1.5px solid black ;
    background: transparent;
    color: #666666;
    padding: 1%;
    margin: auto;
    font-weight: bolder;
    :hover{
        border:1.5px solid transparent ;
        box-shadow: 1px 5px 30px 2px #9b9b9b4b;
    }
    :focus{
        border:1.5px solid tomato ;
        color: tomato;
        box-shadow: 1px 5px 30px 2px #9b9b9b4b;
    }
`