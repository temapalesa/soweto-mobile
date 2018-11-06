import {FETCH_ARTICLES, FETCH_ARTICLE , FETCH_VIDEO} from './types';
import { AppRegistry } from 'react-native';


const baseURL = "http://10.0.2.2:80/api"

export const fetchArticles = () => async dispatch => {
    const res = await fetch(baseURL + '/articles');
    const data = await res.json();
    console.log(data);
    dispatch({type:FETCH_ARTICLES, payload: data});
};

export const fetchArticle = (id) => async dispatch => {
 
    const res = await fetch( baseURL + '/articles/'+ id);
    const data = await res.json();
    dispatch({type:FETCH_ARTICLE, payload: data});
};

export const fetchVideo = () => async dispatch => {

    const res = await fetch(baseURL + 'video')

}


AppRegistry.registerComponent('Soweto-Mobile', () => HomeScreen);