import { SystemStyleObject } from "@chakra-ui/react";
import { CSSProperties } from "react";

export const mesasContainerStyle:CSSProperties = {
    width: '100%',
    height: '88vh',
    padding: '10px',
    flexDirection: 'column',
    justifyContent: 'start',
    overflowY: 'scroll'
}

export const mesaBoxStyle: CSSProperties = {
    backgroundColor: '#2a2a2a',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
}

export const mesaBoxHoverStyle: SystemStyleObject = {
    backgroundColor: '#4f4f4f',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
}