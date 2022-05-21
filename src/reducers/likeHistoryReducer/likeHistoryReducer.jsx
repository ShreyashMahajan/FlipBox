export const likeHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_HISTORY':
            return { ...state, historyList: action.payload.history };
        case 'UPDATE_LIKED_VIDEO':
            return { ...state, likeList: action.payload.likes };
        case 'UPDATE_WATCHLATER':
            return { ...state, watchlaterList: action.payload.watchlater };
        default:
            return state;
    }
};
