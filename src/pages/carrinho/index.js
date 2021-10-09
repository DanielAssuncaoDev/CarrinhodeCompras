import Cookie from 'js-cookie'
import { useEffect, useState } from 'react';

import Item from './carrinhoItem/index'

import styled from "styled-components";

    const Container = styled.div`

    `;

export default function Carrinho(){

    const [item, setItem] = useState([])
        


        function Itens(){
            let carrinho = JSON.parse(Cookie.get('Carrinho'))
            setItem(carrinho)
        }
            useEffect( () => {
                Itens()

            }, [] )



        function AlterarQtd(){
            let newCarrinho = JSON.stringify(item)
            // console.log(item)

            Cookie.set('Carrinho', newCarrinho)            
        }



        function ExcluirProduto(produtoItem){
            let newCarrinho = item.filter( p => p.id !== produtoItem.id)
            
            Cookie.set('Carrinho', JSON.stringify(newCarrinho))
            Itens()
        }
            
        

    return(
        <Container>
            {
                item.map( (item) =>
                    <Item produto={item} onAlterar={AlterarQtd} onExcluir={ExcluirProduto} />
                )
            }


        </Container>
    );
}