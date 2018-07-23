import {combineReducers} from 'redux'

import articleReducers from './articlesReducers';

export default combineReducers({

    articles: articleReducers,
});