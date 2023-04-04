import createSagaMiddlware from 'redux-saga'
import { combineReducers, configureStore, PreloadedState, applyMiddleware } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {

    const sagaMiddlware = createSagaMiddlware()

    const store = configureStore({
        reducer: rootReducer,
        // middleware: [sagaMiddlware],
        preloadedState
    })

    // sagaMiddlware.run(eventsWatcher)

    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']