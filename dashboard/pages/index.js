import Layout from '../components/Layout'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import LoginContent from '../components/LoginContent'

export default function Home() {
    return (
        <>
            <Layout>
                <MainNav />
                <LoginContent />
                <Footer />
            </Layout>
        </>
    )
}
