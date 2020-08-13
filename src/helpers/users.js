import { firestore } from '../services/firebase';

export function fetchUserApi(username) {
    return firestore
        .collection('users')
        .where('username', '==', username)
        .get()
        .then((snapshot) => {
            const user = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            return user[0];
        });
}

export function updateUserApi(userId, data) {
    return firestore.collection('users').doc(userId).set(data);
}
