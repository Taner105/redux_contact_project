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
        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact)
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact)
            state = filterContacts
            return state
        default:
            return state;
    }
};

export default contactReducer;