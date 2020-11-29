import {createStore} from 'redux'
import rootReducer from './reducers/rootreducer'

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer)

export default store;