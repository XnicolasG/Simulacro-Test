
import React, { useEffect, useState } from 'react';
import { url } from '../helpers/url';
import { BotonB, Card, ContCards, ContImg, Image, Main, Nombre, Precio } from '../style/StyledListado';

export const Listado = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setItems(data)
    }

    const deleteData = async (id)=>{
        const res = await fetch(url+id,{
            method: "DELETE"
        })
            getData();
    }

    return (
        <Main>
            <ContCards>
                {
                    items.map(p => (
                        <Card key={p.id}>
                            <ContImg>
                                <Image src={p.imagen} alt=" " />
                            </ContImg>
                            <Nombre>{p.nombre}</Nombre>
                            <Precio>$ {p.precio}</Precio>
                            <center>
                            <BotonB onClick={() =>deleteData(p.id) }>Borrar</BotonB>
                            </center>
                        </Card>
                    ))
                }
            </ContCards>
        </Main>
    )
};
