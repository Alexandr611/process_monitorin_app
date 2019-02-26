import { combineReducers } from 'redux';
import iosDeployReducer from './reducers/iosdeploy';
import socketReducer from './reducers/socket';
import iosDeviceReducer from './reducers/iosdevice';
import xcodebuildReducer from './reducers/xcodebuild';

export const rootReducer = combineReducers({
	iosdeploy: iosDeployReducer,
	socket: socketReducer,
	iosdevice: iosDeviceReducer,
	xcodebuild: xcodebuildReducer
});