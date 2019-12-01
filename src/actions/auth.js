import uuid from 'uuid'
import { firebase  , googleAuthProvider} from "../firebase/firebase"

export const login = ( uuid ) => ( {
    type: "LOGIN",
    uuid
} )

export const startLogin = () => {
    return () => {
        console.log("loged in")
        return firebase.auth().signInWithPopup( googleAuthProvider )
    }
}

export const logout = () => ( {
    type: "LOGOUT"
} )

export const startLogout = () => {
    return () => {
        console.log("loged out")
        return firebase.auth().signOut()
    }
}