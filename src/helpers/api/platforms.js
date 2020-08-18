import { firestore } from '../../services/firebase';

export function fetchPlatformsApi() {
    return firestore
        .collection('platforms')
        .orderBy('label')
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}
