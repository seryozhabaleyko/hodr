import { firestore } from '../../services/firebase';

export function fetchPlatformsApi() {
    return firestore
        .collection('platforms')
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}
