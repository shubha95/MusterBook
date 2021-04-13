/**
 * @format
 */

 import {AppRegistry,LogBox } from 'react-native';
 import App from './App';
//  import Bblcall from './Bblcall';
//  import LiveRoom from './src/page/liveRoom';
 import {name as appName} from './app.json';
 
 AppRegistry.registerComponent(appName, () => App);
 LogBox.ignoreLogs(['Warning: ...']);
 
 // Ignore all log notifications:
 LogBox.ignoreAllLogs();