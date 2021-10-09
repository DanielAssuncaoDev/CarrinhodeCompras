import { useEffect, useState } from 'react';

import Contador from '../contador/index'

import styled from 'styled-components'

    const Container = styled.div`
        display: flex;
        align-items: center;

        img{
            height: 70px;
        }
    `;

export default function CarrinhoItem(props){

const [produto, setProduto] = useState(props.produto)
const [ qtd, setQtd ] = useState(props.produto.qtd)

    function AlterarProduto(Qtd){
        // console.log("opa")
        produto.qtd = Qtd;
        setQtd(Qtd)
        props.onAlterar()
        
        
    }

    useEffect( () => {
        
    } )

    
    return(
        <Container>
            <img src={produto.imgProduto} alt="" />

            <Contador Qtd={produto.qtd} onChange={AlterarProduto} />


            <div className="TituloP" title={produto.tituloProduto}>
                {produto.tituloProduto.length > 10
                    ?
                        produto.tituloProduto.substring(0, 25) + '...'

                    :
                        produto.tituloProduto
                }
            </div>

            <div className="PrecoProduto">
                {'R$ ' + produto.precoProduto}
            </div>

            <div className="QtdProduto" style={{margin: '6px'}} >
                {qtd}
            </div>

            <button onClick={() => props.onExcluir(produto) } >
                Excluir
            </button>
 
        </Container>
    );
}