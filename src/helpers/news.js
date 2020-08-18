import { firestore } from '../services/firebase';

export function fetchNewsApi(pageSize = 24) {
    return firestore
        .collection('news')
        .orderBy('createdAt', 'desc')
        .limit(pageSize)
        .get()
        .then((querySnapshot) => querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

export function fetchNewsByCategoryApi(category) {
    return firestore
        .collection('news')
        .where('categories', 'array-contains', category)
        .orderBy('createdAt', 'desc')
        .limit(24)
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

export async function fetchNewsSingleApi(slug) {
    const news = await firestore
        .collection('news')
        .where('slug', '==', slug)
        .get()
        .then((snapshot) =>
            snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })),
        );

    const user = await firestore.collection('users').doc(news[0].author.id).get().then(mapDoc);

    return {
        ...news[0],
        author: {
            id: user.id,
            name: user.name,
            surname: user.surname,
            avatar: user.avatar,
            username: user.username,
        },
    };
}

/* function mapSnapshot(snapshot) {
    return snapshot.docs.map(mapDoc);
}

function mapRef(ref) {
    return ref.get().then(mapDoc);
} */

function mapDoc(doc) {
    return {
        id: doc.id,
        ...doc.data(),
    };
}
