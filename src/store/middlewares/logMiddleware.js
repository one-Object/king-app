
export default function logMiddleware() {
  return store => dispatch => (action) => {

        console.log(action.type + '前',store.getState());
        dispatch(action);
        console.log(action.type + '后',store.getState());
    };
}