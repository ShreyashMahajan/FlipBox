import fetchDataFromApi from "../../shared/utilities/fetchDataFromApi";

const getPlaylistListService = async () => {
    const response = await fetchDataFromApi({
        url: '/api/user/playlists',
        method: 'get',
        propertyName: 'playlist',
    })

    return response;
}

const addPlaylistService = async (playlistName) => {
    const response = await fetchDataFromApi({
        url: '/api/user/playlists',
        method: 'post',
        propertyName: 'playlist',
        body: { playlist: { title: playlistName, description: "this is description" } },
    })

    return response;
}

const deletePlaylistService = async (id) => {
    const response = await fetchDataFromApi({
        url: `/api/user/playlists/${id}`,
        method: 'delete',
        propertyName: 'playlist',
    })

    return response;
}

const getVideoFromPlaylistService = async (id) => {
    const response = await fetchDataFromApi({
        url: `api/user/playlists/${id}`,
        method: 'get',
        propertyName: 'user playlist',
    })

    return response;
}

const addVideoToPlaylistService = async (id, video) => {
    const response = await fetchDataFromApi({
        url: `/api/user/playlists/${id}`,
        method: 'post',
        propertyName: 'user playlist',
        body: { video }
    })
    return response;
}


const deleteVideoFromPlaylistService = async (playlistId, videoId) => {

    const response = await fetchDataFromApi({
        url: `/api/user/playlists/${playlistId}/${videoId}`,
        method: 'delete',
        propertyName: 'playlist video',
    })
    console.log('delete video service', response);

    return response;
}


export { deletePlaylistService, deleteVideoFromPlaylistService, addVideoToPlaylistService, getVideoFromPlaylistService, addPlaylistService, getPlaylistListService }
