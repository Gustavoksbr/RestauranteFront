'use client'

import { Flex} from "@chakra-ui/react"
import { useState } from "react"
import Header from "@/components/header"
import ComandasBody from "@/components/comandasBody"
import CadastroProduto from "@/components/CadastroProduto"

export default function Home() {

    const [ currentTable, setCurrentTable ] = useState('Mesas')
    console.log("currentTable: ", currentTable)

    return (
        <>
            <Flex direction={"column"} height={'100vh'} width={'100vw'} bgColor={'#d9d9d9'}>
                <Header setCurrentTab={setCurrentTable}/>
                {currentTable === "comandas" &&
                    <ComandasBody />
                }
                {currentTable === 'produtos' &&
                    <CadastroProduto />
                }
            </Flex>
        </>
    )
}