'use client'

import { getMesas } from "@/service/mesas"
import { GetMesasResponse } from "@/service/utils/apiResponses"
import { mesaBoxHoverStyle, mesaBoxStyle, mesasContainerStyle } from "@/utils/styles/mesasBodyStyle"
import { Text, Flex, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function MesasBody() {

    const [mesas, setMesas] = useState<GetMesasResponse[]>()

    async function FetchMesasList() {
        const response = await getMesas()
        setMesas(response)
    }

    useEffect(() => {
        FetchMesasList()
    },[])

    console.log('mesasResponse: ', mesas)

    return (
        <>
            <Flex
                style={mesasContainerStyle}
            >
                <SimpleGrid minChildWidth={'7vw'} width={'100%'} gapX={5} gapY={5}>
                   {mesas?.map((mesa, index) => (
                    <Flex
                        key={index}
                        style={mesaBoxStyle}
                        _hover={mesaBoxHoverStyle}
                    >  
                        <Text color={'white'}>{mesa.id}</Text>                        
                    </Flex>
                ))} 
                </SimpleGrid>
            </Flex>
        </>
    )
}