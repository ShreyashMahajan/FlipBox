export const filterVideoReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_BY_CATEGORY':
            return { ...state, currentCategory: action.payload }

        case 'SHOW_BY_SEARCH':
            return { ...state, showBySearch: action.payload }
        default:
            return state;
    }
}