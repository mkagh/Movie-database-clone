import React, { useContext, useReducer, useState } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()
const initialState = {
    loading: false,
    showModal: false,
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [sliderHeight, setSliderHeight] = useState()

    const isModal = () => {
        dispatch({ type: 'MODAL' })
    }
    const isNoModal = (id) => {
        dispatch({ type: 'NO_MODAL' })
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                sliderHeight,
                setSliderHeight,
                isModal,
                isNoModal
            }}
        >{children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext }