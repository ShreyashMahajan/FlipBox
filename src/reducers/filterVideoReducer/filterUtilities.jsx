const getFilterByCategory = (state, video) => {
    if (state.currentCategory === "ALL") {
        return video;
    }
    return video.filter((videoItem) => videoItem.categoryName === state.currentCategory);
}

const getFilterBySearch = (state, videos) => {
    if (state.showBySearch) {
        return videos.filter((video) => video.title.toLowerCase().includes(state.showBySearch.toLowerCase()));
    }
    else {
        return videos;
    }
}

export { getFilterByCategory, getFilterBySearch };