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
    alignItems: "start",
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
    overflowY: 'scroll'
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
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#a3a3a3',
    borderRadius: 5,
    paddingLeft: 2,
    paddingRight: 2,
    flexDirection: "column",
    alignItems: "center",
}

export const listItemContainer: CSSProperties = {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

export const modalRightSection: CSSProperties = {
    width: '64%',
    height: '100%',
    flexDirection: "column",
    justifyContent: 'start',
    alignItems: 'center',
}

export const ButtonsContainer: CSSProperties = {
    flexDirection: 'row',
    justifyContent: 'end',
    columnGap: 5,
    width: '100%',
    marginTop: 7,
    height: '9%'
}

export const comandaBoxStyle: CSSProperties = {
    width: '76%',
    height: '7vh',
    backgroundColor: '#2a2a2a',
    borderRadius: 4,
    marginTop: '3px',
    color: 'white',
    justifyContent: "center",
    alignItems: 'center',

}

export const itensListLabelsContainer: CSSProperties = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#3a3a3a'
}

export const itensListItemsContainer: CSSProperties = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    width: '100%',
}

export const itensListLabels: CSSProperties = {
    fontSize: '0.9rem',
    fontWeight: 600
}

export const itensListItem: CSSProperties = {
    fontSize: '0.9rem',
}

export const apagarComandaButton: CSSProperties = {
    aspectRatio: 1,
    height: '7vh',
    backgroundColor: '#2a2a2a',
    borderRadius: 4,
    marginTop: '3px',
    color: 'white',
    justifyContent: "center",
    alignItems: 'center',
}