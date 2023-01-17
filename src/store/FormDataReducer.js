var initialState = {
    Formlist: {}
}
export default function FormDataRaducer(state = initialState, action) {
    switch (action.type) {
        case "userData":
            state = {Formlist:action.payload}
            return state
        default:
            return state;
    }
}