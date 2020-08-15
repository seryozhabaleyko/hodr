import { auth, firestore } from '../services/firebase';

export function signup(username, email, password, dob, address) {
    return auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            auth().currentUser.updateProfile({ displayName: username });
        });
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function logout() {
    return auth().signOut();
}

export async function createUser({
    username,
    email,
    password,
    avatarUrl = '',
    name = '',
    surname = '',
}) {
    return await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            const user = auth().currentUser;
            console.log(user);
            if (user !== null) {
                user.updateProfile({ displayName: `${name} ${surname}` });
                firestore.collection('users').doc(user.uid).set({
                    id: user.uid,
                    username,
                    email,
                    avatarUrl,
                    name,
                    surname,
                    games: [],
                    news: [],
                    articles: [],
                    reviews: [],
                });
            }
        });
}
