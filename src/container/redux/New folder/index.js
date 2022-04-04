import { createStore, applyMiddleware,compose } from "redux";
import {reducers} from '../Reducers'

export const store = createStore(
    reducers
);

