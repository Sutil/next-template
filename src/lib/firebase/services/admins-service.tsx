import { User } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export async function isAdminUser(user: User): Promise<boolean> {
  const uid = user.uid;

  const result = await getDocs(
    query(collection(db, "admins"), where("uid", "==", uid))
  );

  if (result.docs.length) {
    return true;
  }
  return false;
}
