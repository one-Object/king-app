
export default function routerMiddleware(history) {
    //参数是简易的store对象：{getState,dispatch}
    return ({ getstate, dispatch }) => next => (action) => {
        return next(action);
    };
}
