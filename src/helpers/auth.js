import { auth } from '../services/firebase';

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
