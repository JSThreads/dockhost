import Layout from '../components/Layout'
import MainNav from '../components/MainNav'

export default function Home() {
    return (
        <>
            <Layout>
                <MainNav />
                <div style={{'width': '100%'}}>dfs</div>
                <div style={{'width': '100%', 'background': 'red'}}>dfsf</div>
            </Layout>
        </>
    )
}
