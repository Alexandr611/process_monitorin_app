import { combineReducers } from 'redux';
import iosDeployReducer from './reducers/iosdeploy';
import socketReducer from './reducers/socket';

export const rootReducer = combineReducers({
	iosdeploy: iosDeployReducer,
	socket: socketReducer
});