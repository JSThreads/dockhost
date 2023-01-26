export default function Layout(props) {
    return(
        <>
            <div>
                {props.children}
            </div>
            <style jsx>{`
                div {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    min-width: 100%;
                    min-height: 100%;

                    display: grid;
                    grid-template-rows: 200px 1fr;
                }
            `}</style>
        </>
    )
}