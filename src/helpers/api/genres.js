import { firestore } from '../../services/firebase';

export function fetchGenresApi() {
    return firestore
        .collection('genres')
        .orderBy('label')
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}
