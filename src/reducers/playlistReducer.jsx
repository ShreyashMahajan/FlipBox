export const playlistReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PLAYLIST':
            return { ...state, playlist: action.payload };
        case 'ADD_PLAYLIST_VIDEO':
            return {
                ...state, playlist: state.playlist.map((playlist) =>
                    playlist._id === action.payload._id ? action.payload : playlist)
            }
        case 'DELETE_PLAYLIST_VIDEO':
            return { ...state, playlist: state.playlist.map((playlist) => playlist._id === action.payload._id ? action.payload : playlist) }
        default:
            return state;
    }
};
