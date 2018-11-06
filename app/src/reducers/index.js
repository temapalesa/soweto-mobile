import {combineReducers} from 'redux'

import articleReducers from './ArticleReducer';
import articlesReducers from './articlesReducers';
import videoReducer from './VideoReducer';

export default combineReducers({

    articles: articlesReducers,
    article: articleReducers,
    video , videoReducer ,
});