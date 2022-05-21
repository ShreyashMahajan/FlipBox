import fetchDataFromApi from "../../shared/utilities/fetchDataFromApi"

const getHistoryDataService = async () => {
    const response = await fetchDataFromApi({
        url: '/api/user/history',
        method: 'get',
        propertyName: 'history'
    })

    return response;
}

const addToHistoryService = async (video) => {
    const response = await fetchDataFromApi({
        url: '/api/user/history',
        method: 'post',
        body: { video },
        propertyName: 'history'
    })

    return response;
}

const deleteFromHistoryService = async (id) => {
    const response = await fetchDataFromApi({
        url: `/api/user/history/${id}`,
        method: 'delete',
        propertyName: 'history'
    })

    return response;
}

const clearAllFromHistoryService = async () => {
    const response = await fetchDataFromApi({
        url: '/api/user/history/all',
        method: 'delete',
        propertyName: 'history'
    })

    return response;
}



export { addToHistoryService, getHistoryDataService, deleteFromHistoryService, clearAllFromHistoryService }