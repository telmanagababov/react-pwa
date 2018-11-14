// // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// // The Firebase SDK is initialized and available here!
//
// firebase.auth().onAuthStateChanged(user => { });
// firebase.database().ref('/path/to/ref').on('value', snapshot => { });
// firebase.messaging().requestPermission().then(() => { });
// firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
//
// // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

import { statuses } from './connection.constants';

const DEFAULT_FEATURES = ['hosting'];
const ALL_FEATURES = ['auth', 'database', 'messaging', 'storage'];

export default class ConnectionService {
    app;
    status;
    features;

    start() {
        try {
            this.app = window.firebase.app();
            this.status = statuses.OK;
            this.features = DEFAULT_FEATURES.concat(
                ALL_FEATURES.filter(feature => (
                    typeof this.app[feature] === 'function'
                ))
            );
        } catch (error) {
            this.status = statuses.ERROR;
            this.features = [];
        }
    }
}
