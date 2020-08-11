
const initialState = {
    sidebarVisible: false,
    rightIcons: ['search', 'cart'],
    leftIcons: ['back'],
  };

export default function autoInfo(state = initialState, action) {
    switch (action.type) {
        case 'INITIAL_PERSON_LIST':
            return {
                ...state,
                ...action.payload,
            };
        case 'DELETE_PERSON_LIST':
            return action.payload;
        case 'EDIT_PERSON_LIST':
            return action.payload;
        default:
            return state;
    }
}