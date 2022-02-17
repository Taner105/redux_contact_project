const initialState = [
    {
        id: 0,
        name: "Taner",
        email: "taner@com",
        number: 123456654654,


    },
    {
        id: 1,
        name: "test",
        email: "test@com",
        number: 5465654,

    },
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state;
        default:
            return state;
    }
};

export default contactReducer;