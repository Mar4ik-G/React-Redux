const initialState = {
    news: [
        {
            id: 1,
            header: "News",
            text: "Lorem"
        },
        {
            id: 2,
            header: "News",
            text: "Lorem"
        },
        {
            id: 3,
            header: "News",
            text: "Lorem"
        },
        {
            id: 4,
            header: "News",
            text: "Lorem"
        },
        {
            id: 5,
            header: "News",
            text: "Lorem"
        },
    ]
}

export const newsReducer = (state = initialState,action) => {
            return state;
}

export default newsReducer;