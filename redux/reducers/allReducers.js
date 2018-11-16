import KeywigReducers from './keywigReducers.js';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    keywig:KeywigReducers
});

export default allReducers;
