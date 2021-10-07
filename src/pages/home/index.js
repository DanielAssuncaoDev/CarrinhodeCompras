import Produto from '../produto/index'


import { useState } from 'react';

import style from 'styled-components'


const Container = style.div`
`;


export default function Home(){

const [produtos, setProdutos] = useState([])

function Listar(){

    const resp = [
        {
            id: 1,
            imgProduto: "https://cdn.dooca.store/2394/products/ykrcuxgjtcnyzgbuhzn5g32ewhdwrlvblwdy_640x640+fill_ffffff.png?v=1622578247&webp=0",
            tituloProduto: "MEMORIA RAM 8GB DDR4 3000MHZ BRAVEX RGB",
            precoProduto: "420,00",
            descProduto: "Uma boa memoria RAM",
            espProduto: "Memoriza a RAM"
        },
        {
            id: 2,
            imgProduto: "https://cdn.awsli.com.br/1000x1000/1271/1271561/produto/49690417/9639bff0e0.jpg",
            tituloProduto: "PROCESSADOR INTEL CORE I9-9900K - 9ª GERAÇÃO - LGA1151",
            precoProduto: " 2.609,99",
            descProduto: "Processador Lindooo",
            espProduto: "Processa a Dor"
        },
        {
            id: 3,
            imgProduto: "https://res.cloudinary.com/gametecgroup/image/upload/c_fit,f_auto,h_1000,w_1000/c_fit,g_south,l_watermark,o_50,w_250,x_5,y_5/63_v1jyux",
            tituloProduto: "Placa de vídeo Gigabyte GeForce RTX 2060 Super 8GB (GV-N206SAORUS-8GC)",
            precoProduto: "3.799,00",
            descProduto: "Placa de videooooooooooo",
            espProduto: "Emplaca o Vídeo"
        }        
    ]

    setProdutos(resp)

}

    return(
        <Container>
            <h1> Produtos </h1>

            <button onClick={Listar} >Listar Produtos</button>

            <div className="ContainerProdutos">
               {
                   produtos.map(
                       (item) => <Produto produto={item} />
                   )
               }
            </div>
        </Container>
    );
}


