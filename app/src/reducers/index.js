import {combineReducers} from 'redux'

import articleReducers from './ArticleReducer';
import articlesReducers from './articlesReducers';

export default combineReducers({

    articles: articlesReducers,
    article: articleReducers,
});