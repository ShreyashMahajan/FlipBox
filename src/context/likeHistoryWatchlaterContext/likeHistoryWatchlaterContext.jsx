import { useContext, useReducer, useEffect, createContext } from "react";
import { addToHistoryService, clearAllFromHistoryService, deleteFromHistoryService, getHistoryDataService } from "../../services/historyServices/historyServices";
import { deleteLikedVideoService, getLikedVideoService, addToLikedVideoService } from "../../services/likevideoServices/likevideoServices";
import { addToWatchlistService, deleteFromWatchlaterService, getWatchlistDataService } from "../../services/watchlaterServices/watchlaterServices";
import { useAuth } from "../authContext/authContext";
import { likeHistoryReducer } from "../../reducers/likeHistoryReducer/likeHistoryReducer";


const LikeHistoryWatchlaterContext = createContext();

const initialState = {
    likeList: [],
    watchlaterList: [],
    historyList: []
}

const LikeHistoryWatchProvider = ({ children }) => {

    const [likeHistoryState, likeHistoryDispatch] = useReducer(likeHistoryReducer, initialState);
    const { isUserLoggedIn } = useAuth();


    useEffect(() => {
        if (isUserLoggedIn) {
            (async () => {
                const [likedData, watchData, historyData] = await Promise.all([getLikedVideoService(), getWatchlistDataService(), getHistoryDataService()]);
                if (likedData && watchData && historyData !== undefined) {
                    likeHistoryDispatch({ type: 'UPDATE_LIKED_VIDEO', payload: data });
                    likeHistoryDispatch({ type: 'UPDATE_HISTORY', payload: data });
                    likeHistoryDispatch({ type: 'UPDATE_WATCHLATER', payload: data });
                } else {
                    throw new Error('getting data failed');
                }
            })();
        }
    }, []);

    console.log('history list', likeHistoryState.historyList)

    const addToLikedVideo = async (video) => {
        const { data } = await addToLikedVideoService(video);
        console.log('data from like context', data);
        likeHistoryDispatch({ type: 'UPDATE_LIKED_VIDEO', payload: data })
    }

    const deleteFromLikedVideo = async (video) => {
        const { data } = await deleteLikedVideoService(video._id);
        likeHistoryDispatch({ type: 'UPDATE_LIKED_VIDEO', payload: data });
    }

    const addToHistory = async (video) => {
        const { data } = await addToHistoryService(video);
        likeHistoryDispatch({ type: 'UPDATE_HISTORY', payload: data })
    }

    const deleteFromHistory = async (video) => {
        const { data } = await deleteFromHistoryService(video._id);
        likeHistoryDispatch({ type: 'UPDATE_HISTORY', payload: data })
    }

    const clearAllFromHistory = async () => {
        const { data } = await clearAllFromHistoryService();
        likeHistoryDispatch({ type: 'UPDATE_HISTORY', payload: data })
    }

    const addToWatchlater = async (video) => {
        const { data } = await addToWatchlistService(video);
        likeHistoryDispatch({ type: 'UPDATE_WATCHLATER', payload: data });
    }

    const deleteFromWatchlater = async (video) => {
        const { data } = await deleteFromWatchlaterService(video._id);
        likeHistoryDispatch({ type: 'UPDATE_WATCHLATER', payload: data });
    }

    return (
        <LikeHistoryWatchlaterContext.Provider
            value={{
                addToHistory,
                deleteFromHistory,
                clearAllFromHistory,
                addToLikedVideo,
                deleteFromLikedVideo,
                addToWatchlater,
                deleteFromWatchlater,
                likeHistoryDispatch,
                likeHistoryState,
            }}>
            {children}
        </LikeHistoryWatchlaterContext.Provider>
    )
}

const useLikeHistoryWatchlater = () => useContext(LikeHistoryWatchlaterContext);

export { useLikeHistoryWatchlater, LikeHistoryWatchProvider };