import { db, storage } from '../services/firebase';

storage
    .collection('users')
    .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
    })
    .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
        console.error('Error adding document: ', error);
    });

export function fetchGamesApi() {
    return db
        .ref('games')
        .once('value')
        .then((snapshot) => {
            return snapshot.val();
        });
}
