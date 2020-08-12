import { firestore } from '../services/firebase';

export function fetchNewsApi() {
    return firestore
        .collection('news')
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

export function cerateNewsApi(data) {
    return firestore
        .collection('news')
        .add(data)
        .then((docRef) => docRef.get())
        .then(mapDoc);
}

export function fetchNewsSingleApi(slug) {
    return firestore.collection('news').where('slug', '==', slug).get().then(mapSnapshot);
}

function mapSnapshot(snapshot) {
    return snapshot.docs.map(mapDoc);
}

function mapRef(ref) {
    return ref.get().then(mapDoc);
}

function mapDoc(doc) {
    return {
        id: doc.id,
        ...doc.data(),
    };
}
