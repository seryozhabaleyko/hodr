import { combineReducers } from 'redux';

import { reducer as games } from '../pages/Games';
import game from '../pages/Game/reducer';

export default combineReducers({ games, game });
