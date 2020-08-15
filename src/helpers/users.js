import { auth, firestore } from '../services/firebase';

export async function fetchUserApi(username) {
    const user = await firestore
        .collection('users')
        .where('username', '==', username)
        .get()
        .then((snapshot) =>
            snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })),
        );

    return user[0];
}

export function updateUserApi(userId, data) {
    const displayName = `${data.name} ${data.surname}`;
    auth().currentUser.updateProfile({ displayName, photoURL: data.avatar });
    return firestore.collection('users').doc(userId).update(data);
}
