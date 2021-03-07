export function createStore(rootReducer, initialState = {}) {
    let state = rootReducer({...initialState}, {type: '__INIT__'})

    const listeners = []

    return {
        subscribe(fn) {
            this.listeners.push(fn)
            return {
                unsubscribe() {
                    this.listeners = this.listeners.filter(l => l !== fn)
                }
            }
        },
        dispatch(action) {
            state = rootReducer(state, action)
            listeners.forEach(listener => listener(state))
        },
        getState() {
            return state
        }
    }
}
