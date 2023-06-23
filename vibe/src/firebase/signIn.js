import {auth} from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function signIn(email, password, rememberMe) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);

    } catch (e) {
        error = e;
    }

    return { result, error };
}