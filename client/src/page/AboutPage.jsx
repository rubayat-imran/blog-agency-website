import Layout from '../layout/Layout.jsx';
import TeamList from '../component/TeamList.jsx';
import AboutUs from '../component/AboutUs.jsx';

function AboutPage() {
    return (
        <Layout>
            <AboutUs />
            <TeamList />
        </Layout>
    )
}

export default AboutPage