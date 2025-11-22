import { authFeature }   from "./firebaseapp";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
// import { sendEmailVerification } from "firebase/auth";
export async function loginWithEmail(email,password){
    try{
        const result = await signInWithEmailAndPassword(authFeature,email,password)

        console.log(JSON.stringify(result))
        //await sendEmailVerification(result.user)
    }catch(exception){
        console.log(JSON.stringify(exception))
    }
    
}

export async function createAccount(email,password,newpassword){
    try{
        const result =await createUserWithEmailAndPassword(authFeature,email,password,newpassword)
        console.log(JSON.stringify(result))
    }catch(exception){
        console.log(JSON.stringify(exception))
    }
}
