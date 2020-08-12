import { firestore } from '../services/firebase';

export function fetchReviewsApi() {
    return firestore
        .collection('reviews')
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}
