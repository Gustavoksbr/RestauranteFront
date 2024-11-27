import { CSSProperties } from "react"

export const modalComandaPorMesaStyle: CSSProperties = {
    zIndex: 999,
    width: '50%',
    height: '70%',
    backgroundColor: '#d9d9d9',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: "translate(-50%, -50%)",
    boxShadow: '0px 0px 6px 6px rgba(0, 0, 0, 0.3)'
}

export const modalComandaPorMesaBodyStyle: CSSProperties = {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: "space-evenly",
    alignItems: "center",
}

export const modalComandaPorMesaHeaderStyle: CSSProperties = {
    height: '10%',
    width: '99%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',   
}

export const headerTextStyle: CSSProperties = {
    alignSelf: "center",
    justifySelf: "center",
    fontWeight: 600,
    fontSize: '1.3rem'
}

export const modalComadnaPorMesaContainerStyle: CSSProperties = {
    width: '99%',
    height: '89%',
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: "center",
    paddingBottom: '5px'
}

export const closeButtonStyle: CSSProperties = {
    height: '80%',
    width: '10%',
    justifySelf: 'end',
}

export const comandaListStyle: CSSProperties = {
    height: '100%',
    width: '35%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

export const internalListStyle: CSSProperties = {
    borderColor: '#a2a2a2',
    borderRadius: 5,
    borderWidth: 2,
    width: '100%',
    height: '89%',
    flexDirection: 'column',

}

export const newComandaButton: CSSProperties = {
    width: '100%'
}

export const headerTextContainer: CSSProperties = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
}

export const itensListStyle: CSSProperties = {
    width: '64%',
    height: '100%',
    backgroundColor: 'purple'
}

export const comandaBoxStyle: CSSProperties = {
    width: '98%',
    height: '7vh',
    backgroundColor: '#2a2a2a',
    borderRadius: 4,
    marginTop: '3px',
    color: 'white',
    justifyContent: "center",
    alignItems: 'center',

}