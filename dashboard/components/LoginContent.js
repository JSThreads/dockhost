export default function LoginContent() {
    return (
        <>
            <div id="layout">
                <form>
                    <h2>Login to your dashboard</h2>
                    <div class="formField"><label>Username</label><input /></div>
                    <div class="formField"><label>Password</label><input /><span class="material-symbols-outlined">visibility_off</span></div>
                    <div><button>Login</button></div>
                </form>
            </div>
            <style jsx>{`
                #layout {
                    padding: 20px;
                    background: #4C96ED;
                    color: #fff;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                form {
                    padding: 20px;
                }
            `}</style>
        </>
    )
}