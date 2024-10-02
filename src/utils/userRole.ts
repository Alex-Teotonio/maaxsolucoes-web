import { getDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase-config";

export const getUserRole = async (uid: string) => {
  try {
    const userDoc = await getDoc(doc(firestore, "users", uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      return data.role || "client";
    } else {
      return "client";
    }
  } catch (error) {
    console.error("Erro ao buscar o papel do usuário:", error);
    return "client";
  }
};
