import { createContext, useContext } from "react";
import { useReducer, useEffect, } from "react";
import { useAuth } from "../authContext/authContext";
import {
    deletePlaylistService, deleteVideoFromPlaylistService,
    addVideoToPlaylistService, getVideoFromPlaylistService,
    addPlaylistService, getPlaylistListService
} from '../../services/playlistServices/playlistServices.jsx';
import { playlistReducer } from "../../reducers/playlistReducer";

const initialState = {
    playlist: []
}

const PlaylistContext = createContext(null);

const PlaylistProvider = ({ children }) => {

    const [playlistState, playlistDispatch] = useReducer(playlistReducer, initialState);
    const { isUserLoggedIn } = useAuth();

    useEffect(() => {
        if (isUserLoggedIn) {
            (async () => {
                const { data } = await getPlaylistListService();
                if (data) {
                    playlistDispatch({ type: 'UPDATE_PLAYLIST', payload: data.playlists })
                } else {
                    throw new Error('getting data failed');
                }
            })();
        }
    }
        , [isUserLoggedIn]);

    const addPlaylist = async (title) => {
        const { data } = await addPlaylistService(title);
        playlistDispatch({ type: 'UPDATE_PLAYLIST', payload: data.playlists });
    }

    const deletePlaylist = async (id) => {
        const { data } = await deletePlaylistService(id);
        playlistDispatch({ type: 'UPDATE_PLAYLIST', payload: data.playlists });
    }

    const getVideoFromPlaylist = async (id) => {
        const { data } = await getVideoFromPlaylistService(id);
        playlistDispatch({ type: 'UPDATE_PLAYLIST', payload: data.playlists });
    }

    const addVideoToPlaylist = async (id, video) => {
        const { data } = await addVideoToPlaylistService(id, video);
        playlistDispatch({ type: 'ADD_PLAYLIST_VIDEO', payload: data.playlist });
    }

    const deleteVideoFromPlaylist = async (playlistID, videoId) => {
        const { data } = await deleteVideoFromPlaylistService(playlistID, videoId);
        playlistDispatch({ type: 'DELETE_PLAYLIST_VIDEO', payload: data.playlist });
    }

    return (
        <PlaylistContext.Provider value=
            {{
                playlistState,
                addPlaylist,
                deletePlaylist,
                getVideoFromPlaylist,
                addVideoToPlaylist,
                deleteVideoFromPlaylist
            }}>
            {children}
        </PlaylistContext.Provider>
    )
}

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider };  