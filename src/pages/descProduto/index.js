import { useHistory } from "react-router-dom";
import Cookie from 'js-cookie'
import { useState } from "react";


import styled from "styled-components";

    const Container = styled.div`

    `;



export default function DetalhesProduto(props){

    const [produto, setProduto] = useState(props.location.state)

    let navigation = useHistory()


        function Compra(){

            // Cookie.remove('Carrinho');
            let carrinho = Cookie.get('Carrinho')
            

            carrinho = carrinho === undefined
                                    ? []
                                    : JSON.parse(carrinho)


            let ProdutoAdd = carrinho.some( (item) => item.id === produto.id )
            if( ProdutoAdd === false ){
                carrinho.push({...produto, qtd: 1})
                // console.log("opa" + carrinho)
            }

            // console.log(carrinho)

            carrinho = JSON.stringify(carrinho)
            Cookie.set('Carrinho', carrinho)

            navigation.push('/carrinho')

        }


    return(
        <Container>
            <div className="BoxImg">
                <img src={produto.imgProduto} alt="" />
            </div> 

            <div className="InfoProduto">

                <div className="TituloProduto">
                    {produto.tituloProduto}
                </div>

                <div className="PrecoProduto">
                    {produto.precoProduto}
                </div>

                <button onClick={Compra}>
                    Comprar
                </button>
             
                <div className="DescricaoProduto">
                    <h2> Descrição Produto </h2>

                    {produto.descProduto}

                </div>

                <div className="EspecificacaoProduto">
                    <h2> Especificações do Produto </h2>

                    {produto.espProduto}

                </div>

            </div>

        </Container>
    );
}