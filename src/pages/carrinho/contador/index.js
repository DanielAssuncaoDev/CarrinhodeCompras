import { useEffect, useState } from 'react';


import styled from 'styled-components'

    const Container = styled.div`
        display: flex;
    `;


export default function Contador(props){
const [qtd, setQtd] = useState(props.Qtd)



    function Incrementar(){
        setQtd(qtd + 1)
        
    }

    function Decrementar(){

        if(qtd === 1)
            return

        setQtd(qtd - 1)

    }

    useEffect( () => {
        // console.log("opa")
        props.onChange(qtd)

    }, [qtd] )



    return(
        <Container>

            <button onClick={Decrementar}>
                -
            </button>

            <div>
                {qtd}
            </div>

            <button onClick={Incrementar} >
                +
            </button>

        </Container>
    );
}