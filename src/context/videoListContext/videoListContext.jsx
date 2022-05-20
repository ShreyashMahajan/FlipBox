import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useReducer } from "react";
import { filterVideoReducer } from "../../reducers/filterVideoReducer/filterVideoReducer";
import { getFilterByCategory, getFilterBySearch } from "../../reducers/filterVideoReducer/filterUtilities";

const initialState = {
    currentCategory: 'ALL',
    showBySearch: '',
}


const VideoListContext = createContext();

const VideoListProvider = ({ children }) => {

    const [videoList, setVideoList] = useState([]);
    const [videoState, videoDispatch] = useReducer(filterVideoReducer, initialState);


    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/api/videos');
                console.log('from useEffect', data);
                setVideoList([...data.videos]);
            }
            catch (error) {
                console.log(error, 'error occured while getting videos');
            }
        })()
    }, [])

    const filteredVideoList = getFilterBySearch(videoState, getFilterByCategory(videoState, videoList));

    console.log('filtered videos', filteredVideoList);

    return (
        <VideoListContext.Provider value={{ filteredVideoList, videoDispatch }}>
            {children}
        </VideoListContext.Provider>
    )
}

const useVideoList = () => useContext(VideoListContext);

export { useVideoList, VideoListProvider };