import {
  NextOrObserver,
  User,
  UserCredential,
  onAuthStateChanged as _onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "./firebase";

export function onAuthStateChanged(cb: NextOrObserver<User>) {
  return _onAuthStateChanged(auth, cb);
}

export async function createAccount(
  name: string,
  email: string,
  password: string
): Promise<UserCredential> {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  updateProfile(credential.user, { displayName: name });
  return credential;
}

export function signOut() {
  return auth.signOut();
}
