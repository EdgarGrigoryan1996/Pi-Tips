import { usePi } from "../hooks/usePi";

export default function Login() {
    const { user, login } = usePi();

    return (
        <div>
            {user ? <p>Привет, {user}!</p> : <button onClick={login}>Войти через Pi</button>}
        </div>
    );
}
