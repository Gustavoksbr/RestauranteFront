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
    borderWidth: '4px',
    width: '25%',
    flexDirection: 'column',
    overflowY: 'scroll',
    padding: 6
}

export const comandaItensStyle: CSSProperties = {
    height: '90%',
    width: '70%',
    borderColor: '#2a2a2a',
    borderWidth: '4px',
}

export const comandaStyle: CSSProperties = {
    backgroundColor: '#2a2a2a',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
}

export const comandaTextStyle: CSSProperties = {
    color: 'white',
}