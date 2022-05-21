import fetchDataFromApi from "../../shared/utilities/fetchDataFromApi";


const getLikedVideoService = async () => {
    const response = await fetchDataFromApi({
        url: '/api/user/likes',
        method: 'get',
        propertyName: 'liked videos',
    })

    return response;
}

const addToLikedVideoService = async (video) => {
    const response = await fetchDataFromApi({
        url: '/api/user/likes',
        method: 'post',
        propertyName: 'liked videos',
        body: { video },
    })

    return response;
}

const deleteLikedVideoService = async (id) => {
    const response = await fetchDataFromApi({
        url: `/api/user/likes/${id}`,
        method: 'delete',
        propertyName: 'liked videos',
    })

    return response;
}

export { getLikedVideoService, addToLikedVideoService, deleteLikedVideoService };