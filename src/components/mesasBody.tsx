'use client'

import { getMesas } from "@/service/mesas"
import { GetMesasResponse } from "@/service/utils/apiResponses"
import { mesaBoxHoverStyle, mesaBoxStyle, mesasContainerStyle } from "@/utils/styles/mesasBodyStyle"
import { Text, Flex, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ComandaPorMesa from "./modais/comandaPorMesa"

export default function MesasBody() {

    const [mesas, setMesas] = useState<GetMesasResponse[]>()
    const [ showComandaPorMesaModal, setShowComandaPorMesaModal ] = useState(false)
    const [ mesaClicada, setMesaClicada ] = useState<number|null>(null)

    async function FetchMesasList() {
        const response = await getMesas()
        setMesas(response)
    }

    useEffect(() => {
        FetchMesasList()
    },[])

    console.log('mesasResponse: ', mesas)

    function handleMesaClick(mesaId: number) {
        setMesaClicada(mesaId)
        setShowComandaPorMesaModal(true)
    }

    return (
        <>
            <Flex
                style={mesasContainerStyle}
            >
                <SimpleGrid minChildWidth={'7vw'} width={'100%'} gapX={5} gapY={5}>
                   {mesas?.map((mesa, index) => (
                    <Flex
                        onClick={() => handleMesaClick(mesa.id)}
                        key={index}
                        style={mesaBoxStyle}
                        _hover={mesaBoxHoverStyle}
                    >  
                        <Text color={'white'}>{mesa.id}</Text>                        
                    </Flex>
                ))} 
                </SimpleGrid>
            </Flex>
            {showComandaPorMesaModal &&
                <ComandaPorMesa mesaId={mesaClicada} setMesaId={setMesaClicada} setIsModalVisible={setShowComandaPorMesaModal}/>
            }
            
        </>
    )
}