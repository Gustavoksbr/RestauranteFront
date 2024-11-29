'use client'

import { Flex } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import ComandasBody from "@/components/comandasBody"
import MesasBody from "@/components/mesasBody"
import { useRouter } from 'next/navigation'

export default function Home() {   
    const router = useRouter()
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentTable, setCurrentTable] = useState('Mesas')
    console.log("currentTable: ", currentTable)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/login')
        } else {
            setIsAuthenticated(true)
        }
    }, [router])

    if (!isAuthenticated) {
        return null 
    }

    return (
        <>
            <Flex direction={"column"} height={'100vh'} width={'100vw'} bgColor={'#d9d9d9'}>
                <Header setCurrentTab={setCurrentTable}/>
                {currentTable === "comandas" &&
                    <ComandasBody/>
                }
                {currentTable === "mesas" &&
                    <MesasBody/>   
                }
            </Flex>
        </>
    )
}