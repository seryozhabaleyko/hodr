import { firestore } from '../../services/firebase';

export function fetchArticlesApi() {
    return firestore
        .collection('articles')
        .orderBy('createdAt', 'desc')
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}
