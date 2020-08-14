import { firestore } from '../services/firebase';

export function fetchUserApi(userId) {
    return firestore
        .collection('users')
        .doc(userId)
        .get()
        .then((doc) => ({ ...doc.data(), id: doc.id }));
}

export function updateUserApi(userId, data) {
    return firestore.collection('users').doc(userId).update(data);
}
