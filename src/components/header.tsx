import { containerStyle, buttonsStyle } from "@/utils/styles/headerStyles";
import { Flex, Box, Text } from "@chakra-ui/react";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { PiGearBold, PiCubeBold } from "react-icons/pi";

interface HeaderProps {
    setCurrentTab: (arg: string) => void
}

export default function Header({setCurrentTab}:HeaderProps){
    return (
        <Flex style={containerStyle}>
        <Flex style={buttonsStyle}>
            <PiGearBold 
                color="#d9d9d9" 
                preserveAspectRatio="1"
                style={{fontSize: '6vh'}}
            />
            <Text color={"#d9d9d9"} fontSize={'0.9rem'}>Ajustes</Text>
        </Flex>
        <Flex style={buttonsStyle}>
            <MdOutlineTableRestaurant 
                color="#d9d9d9" 
                preserveAspectRatio="1"
                style={{fontSize: '6vh'}}
            />
            <Text color={"#d9d9d9"} fontSize={'0.9rem'}>Mesas</Text>
        </Flex>
        <Flex 
            style={buttonsStyle}
            onClick={() => setCurrentTab('comandas')}
        >
            <IoIosPaper 
                color="#d9d9d9" 
                preserveAspectRatio="1"
                style={{fontSize: '6vh'}}
            />
            <Text color={"#d9d9d9"} fontSize={'0.9rem'}>Comandas</Text>
        </Flex>
        <Flex 
            style={buttonsStyle}
            onClick={() => setCurrentTab('produtos')}
        >
            <PiCubeBold 
                color="#d9d9d9" 
                preserveAspectRatio="1"
                style={{fontSize: '6vh'}}
            />
            <Text color={"#d9d9d9"} fontSize={'0.9rem'}>Produtos</Text>
        </Flex>
        <Box flex={1} height={'100%'} bgColor={"#2a2a2a"}/>
    </Flex>
    )
}