import {FETCH_ARTICLES, FETCH_ARTICLE} from './types';
import { AppRegistry } from 'react-native';


export const fetchArticles = () => async dispatch => {
    const res = await fetch('https://sowetoobserver.herokuapp.com/api/articles');
    const data = await res.json();
    console.log(data);
    dispatch({type:FETCH_ARTICLES, payload: data});
};

export const fetchArticle = (id) => async dispatch => {
 
    const res = await fetch('https://sowetoobserver.herokuapp.com/api/articles/'+ id);
    const data = await res.json();
    dispatch({type:FETCH_ARTICLE, payload: data});
};

AppRegistry.registerComponent('Soweto-Mobile', () => HomeScreen);