import {Link} from 'react-router-dom'

import styled from "styled-components";

const BoxProduto = styled.div`

`;



export default function Produto(props){


    return(
        <BoxProduto>
            <div className="ImgProduto">
                <img src={props.produto.imgProduto} alt="" />
            </div>

            <div className="TituloProduto">
                {props.produto.tituloProduto}
            </div>

            <div className="PrecoProduto">
                R$: {props.produto.precoProduto}
            </div>

            <Link to={{
                    pathname: "/infoproduto",
                    state: props.produto
                }} 
            >
                <button>
                    Ver Detalhes
                </button>

            </Link>

        </BoxProduto>
    );
}