export default function Footer() {
    return (
        <>
            <footer>
                <i>Copyright Dockhost - 2023 ©</i>
            </footer>
            <style jsx>{`
                footer {
                    background: rgb(0,84,182);
                    background: linear-gradient(0deg, rgba(62,126,203,1) 0%, rgba(76,150,237,1) 100%);

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    color: #fff;
                    font-weight: 500;
                }
            `}</style>
        </>
    )
}