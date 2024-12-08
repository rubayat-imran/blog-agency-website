import Layout from '../layout/Layout.jsx';
import BlogListForHome from '../component/BlogListForHome.jsx';
import HomepageCarousel from '../component/HomeCarousel.jsx';
import OurGoal from '../component/OurGoal.jsx';

function HomePage() {
    return (
        <Layout>
            <HomepageCarousel />
            <BlogListForHome />
            <OurGoal />
        </Layout>
    )
}

export default HomePage