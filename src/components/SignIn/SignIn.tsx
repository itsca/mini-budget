import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
interface SignInComponentProps {
    auth: firebase.auth.Auth
}

export const SignIn: React.FC<SignInComponentProps> = (props: SignInComponentProps) => {
    // export function SignIn(auth: firebase.auth.Auth) {
    const {auth} = props;
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <button onClick={signInWithGoogle}>
        Sign in with Google
        </button>
    );
}