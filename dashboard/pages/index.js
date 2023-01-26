import Layout from '../components/Layout'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Layout>
                <MainNav />
                <div style={{'width': '100%', 'background': '#4C96ED'}}>dfs</div>
                <Footer />
            </Layout>
        </>
    )
}
