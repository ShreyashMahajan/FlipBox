

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isUserLoggedIn: true, token: action.payload.encodedToken }
        case 'LOGOUT':
            return { ...state, isUserLoggedIn: false, token: null };
        case 'SIGNUP':
            return { ...state, isUserLoggedIn: true, token: action.payload.encodedToken }
        default:
            return state;
    }
}