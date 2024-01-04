import {
  NextOrObserver,
  User,
  UserCredential,
  onAuthStateChanged as _onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase";

export function onAuthStateChanged(cb: NextOrObserver<User>) {
  return _onAuthStateChanged(auth, cb);
}

export function createAccount(
  email: string,
  password: string
): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signOut() {
  return auth.signOut();
}
