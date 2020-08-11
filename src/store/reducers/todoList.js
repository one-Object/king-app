
const initialState = {
    sidebarVisible: false,
    rightIcons: ['search', 'cart'],
    leftIcons: ['back'],
  };

export default function todoList(state = initialState, action) {
    switch (action.type) {
        case 'INITIAL_PERSON_LIST':
            return action.payload;
        case 'DELETE_PERSON_LIST':
            return action.payload;
        case 'EDIT_PERSON_LIST':
            return action.payload;
        default:
            return state;
    }
}