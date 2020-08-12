import { firestore } from '../services/firebase';

export function fetchNewsApi() {
    return firestore
        .collection('news')
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}
