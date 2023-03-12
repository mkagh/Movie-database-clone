const reducer = (state, action) => {
    if (action.type === 'NO_LOADING') {
        return { ...state, loading: false }
    }
    if (action.type === 'MODAL') {
        return { ...state, showModal: true }
    }
    if (action.type === 'NO_MODAL') {
        return { ...state, showModal: false }
    }

}
export default reducer