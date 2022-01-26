import React, { useState } from 'react';
import axios from 'axios'
import { imgUpload } from '../helpers/imgUpload';
import { url } from '../helpers/url';
import { Boton, Cont, ContFile, IngresoProd, InputFile, Inputs, Label, Titulo } from '../style/StyledIngreso';

export const Ingreso = () => {
    
    const [productos, setProductos] = useState({
        nombre:"",
        precio:"",
        imagen:""
    })

    const {nombre,precio,imagen} = productos;

    
    
    const postData = async ()=>{
        axios.post(url,productos)
        .then(resp=>console.log(resp.data))
        .catch(error=>console.log(error))
    }

    const handleChange = ({target}) =>{
        setProductos({
            ...productos,
            [target.name]: target.value
        })
    }

    const handleChangeImg = (e) =>{
        const img = e.target.files[0]
        imgUpload(img)
        .then(resp=> {
            productos.imagen = resp;
        })
        .catch(error=> {
            console.log(error.message);
        })
    }

    const handleSubmit = (e) =>{
        e.prevenDefault();
    }

    return (
        <Cont >
      <IngresoProd onSubmit={handleSubmit} >
          <Titulo>Registro de nuevos productos</Titulo>
          <Inputs type="text" name='nombre' value={nombre} onChange={handleChange} placeholder='ingrese nombre del producto' required/>
          <Inputs type="number" name='precio' value={precio} onChange={handleChange} placeholder='ingrese precio del producto' required/>
          <ContFile>
          <Label htmlFor="">Ingrese imagen del producto</Label>
          <InputFile type="file" name='imagen' value={imagen} onChange={handleChangeImg} />
          </ContFile>
          <Boton type='submit' onClick={() => postData()} >Registrar</Boton>
      </IngresoProd>
  </Cont>
    )
  
}


