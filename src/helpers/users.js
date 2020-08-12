import { firestore } from '../services/firebase';

export function trackGame(userId, gameId) {
    firestore
        .collection('games')
        .doc(gameId)
        .get()
        .then((doc) => {
            console.log(doc.data());
        });
    return firestore.collection('users').doc(userId).set({ subscriptions: gameId });
}
