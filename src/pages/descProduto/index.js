// import { Link } from "react-router-dom";
import Cookie from 'js-cookie'
import styled from "styled-components";

const Container = styled.div`

`;

export default function DetalhesProduto(props){

    const produto = props.location.state

    function Compra(){
        let carrinho = Cookie.get('carrinho')

        console.log(carrinho)


        // if(carrinho !== undefined){
        //     carrinho = JSON.parse(carrinho)
        //     console.log(carrinho)

        // } else{
        //     carrinho = []
        // }

        carrinho = carrinho !== undefined
                            ? carrinho = JSON.parse(carrinho)
                            : carrinho = []

                            console.log(carrinho)


        let ProdutoAdd = carrinho.some( (item) => item.id === produto.id )

        if( ProdutoAdd === false ){
            carrinho.push({...produto, qtd: 1})
        }


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