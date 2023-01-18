
var initialState = {
    FormObj: {},
    Formlist: {},
}
export default function FormDataRaducer(state = initialState, action) {

    switch (action.type) {
        case "userData":
            state = { FormObj: action.payload,Formlist: state.Formlist}
            return state
        case "userList":
            state = { Formlist: action.payload,FormObj:state.FormObj }
            return state
        default:
            return state;
    }
}