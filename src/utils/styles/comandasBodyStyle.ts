import { CSSProperties } from "react";

export const containerStyle: CSSProperties = {
    flexDirection: 'row',
    height: '88vh',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

export const listStyle: CSSProperties = {
    height: '90%',
    borderColor: '#2a2a2a',
    borderWidth: '5px',
    width: '25%',
    flexDirection: 'column',
    overflowY: 'scroll',
    padding: 6,
    borderRadius: 5
}

export const comandaItensStyle: CSSProperties = {
    height: '90%',
    width: '70%',
    borderColor: '#2a2a2a',
    borderWidth: '5px',
    borderRadius: 5
}

export const comandaStyle: CSSProperties = {
    backgroundColor: '#2a2a2a',
    aspectRatio: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
}

export const comandaTextStyle: CSSProperties = {
    color: 'white',
}

export const tableStyle: CSSProperties = {
    margin: 10,
    width: '100%',
    color: 'black',
}

export const tableCellStyle : CSSProperties = {
    padding: 10,
    borderBottom: '1px solid #2a2a2a',
    backgroundColor: '#d9d9d9',
    textAlign: 'center',
}

export const tableRowStyle : CSSProperties = {
    backgroundColor: '#d9d9d9',
}