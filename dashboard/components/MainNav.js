export default function MainNav() {
    return(
        <>
            <nav>
                <img src="/assets/dockhostbanner-xsm.svg" />
                <div></div>
            </nav>
            <style jsx>{`
                nav {
                    width: 100%;
                    height: 100%;
                    background: #6CACEA;
                    position: relative;
                    
                    overflow: hidden;
                    
                    display: flex;
                    justify-content: center;
                }
                img {
                    max-height: 100%;
                    transform: translateY(18px);
                }
                div {
                    position: absolute;
                    left: 0px;
                    bottom: -3px;

                    width: 100%;
                    height: 25px;

                    background: url("/assets/waves.svg");
                    background-repeat: repeat-x;
                    background-position-y: bottom;
                    background-size: 401.62px 25px;
                }

                @media screen and (min-width: 340px) {
                    img {
                        content: url("/assets/dockhostbanner-sm.svg");

                        transform: translateY(15px);
                    }
                }
                @media screen and (min-width: 750px) {
                    img {
                        max-height: 185px;
                        height: 185px;
                        content: url("/assets/dockhostbanner-md.svg");

                        transform: translateY(0px);
                    }
                }
                @media screen and (min-width: 1000px) {
                    img {
                        max-height: 195px;
                        height: 195px;
                        content: url("/assets/dockhostbanner-xl.svg");

                        transform: translateY(0px);
                    }
                }
            `}</style>
        </>
    )
}