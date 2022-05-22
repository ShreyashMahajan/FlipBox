import fetchDataFromApi from "../../shared/utilities/fetchDataFromApi";

const getWatchlistDataService = async () => {
    const response = await fetchDataFromApi({
        url: 'api/user/watchlater',
        method: 'get',
        propertyName: 'watchlater',
    })

    return response;
}

const addToWatchlistService = async (video) => {
    const response = await fetchDataFromApi({
        url: '/api/user/watchlater',
        method: 'post',
        body: { video },
        propertyName: 'watchlater',
    })

    return response;
}

const deleteFromWatchlaterService = async (id) => {
    const response = await fetchDataFromApi({
        url: `/api/user/watchlater/${id}`,
        method: 'delete',
        propertyName: 'watchlater'
    })

    return response;
}

export { getWatchlistDataService, addToWatchlistService, deleteFromWatchlaterService };