import { useRouter } from 'next/router'

import styles from '../styles/Index.module.css'

export default function Home() {
    const router = useRouter()
    //router.replace('/dashboard')

    let changePasswordState = (e) => {
        let passwordElement = document.getElementById('password-input');
        if (passwordElement.type == 'password') {
            passwordElement.type = 'text'
            passwordElement.parentElement.querySelector('button').querySelector('span').innerText = 'visibility' 
        }
        else {
            passwordElement.type = 'password'
            passwordElement.parentElement.querySelector('button').querySelector('span').innerText = 'visibility_off'
        } 
    }

    return (
        <>
            <img src="/assets/fishes1.svg" id={styles["fishes1"]} />
            <img src="/assets/fishes2.svg" id={styles["fishes2"]} />
            <img src="/assets/baleine.svg" id={styles["baleine"]} />
            <div id={styles["login-box"]}>
                <h1>Login to your dashboard</h1>
                
                <div><span>Username</span><input type="text" /></div>
                <div><span>Password</span><input id="password-input" type='password' /><button onClick={changePasswordState}><span class="material-symbols-outlined">visibility_off</span></button></div>

                <div><span>Remember this user on this device <i>(optional)</i></span><input type="checkbox" /></div>

                <button>Login</button>
            </div>
        </>
    )
}
