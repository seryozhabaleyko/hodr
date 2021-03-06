import { combineReducers } from 'redux';

import games from '../pages/Games/reducer';
import collections from '../pages/Games/reducers/collections';
import game from '../pages/Game/reducer';
import news from '../pages/News/reducer';
import newsSingle from '../pages/NewsSingle/reducer';
import articles from '../pages/Articles/reducer';
import reviews from '../pages/Reviews/reducer';
import user from '../pages/User/reducer';
import editUser from '../pages/UserEdit/reducer';

export default combineReducers({
    games,
    collections,
    game,
    news,
    newsSingle,
    articles,
    reviews,
    user,
    editUser,
});
