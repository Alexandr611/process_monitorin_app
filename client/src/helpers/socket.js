import io from 'socket.io-client';
import EventEmmiter from 'eventemitter3';
import { store } from '../store/configureStore';
import {
  getIosDeployInfoSuccess,
  getIosDeviceInfoSuccess,
  getXcodebuildInfoSuccess
} from '../store/actions/'

const connectionURI = 'http://localhost:3030';

const socket = io(connectionURI);

socket.on('iosdeploy', data => {
  console.log('iosdeploy ', data);
  store.dispatch(getIosDeployInfoSuccess(data))
});

socket.on('iosdevice', data => {
  console.log('iosdevice ', data);
  store.dispatch(getIosDeviceInfoSuccess(data))
});

socket.on('xcodebuild', data => {
  console.log('xcodebuild', data)
  store.dispatch(getXcodebuildInfoSuccess(data))
})

function getConnection() {
  return socket;
}


export { getConnection, socket } ;