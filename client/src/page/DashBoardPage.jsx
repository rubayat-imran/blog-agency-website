import Layout from '../layout/Layout.jsx';
import DashboardBlogList from '../component/DashboardBlogList.jsx';
import DashboardServiceList from '../component/DashboardServiceList.jsx';
import DashboardTeamList from '../component/DashboardTeamlist.jsx';
import CreateBlogForm from '../component/CreateBlogFrom.jsx';
import CreateServiceForm from '../component/CreateServiceForm.jsx';
import CreateTeamForm from '../component/CreateTeamForm.jsx';

function DashBoardPage() {
    return (
        <Layout>
            <section className="dashboard pt-5 pb-4">
                <div className="container">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-lg-8">
                            <h2 className="display-4">Dashboard</h2>
                            <p className="lead text-muted">
                                Welcome to your dashboard! Here, you can manage your blog posts, services, and team members.
                            </p>
                            {!sessionStorage.getItem("loginToken") && <p className="lead pt-5 text-muted">
                                Please login first to manage your blog posts, services, and team members.
                            </p>}

                        </div>
                    </div>
                </div>
            </section>
            {sessionStorage.getItem("loginToken") && <CreateBlogForm />}
            {sessionStorage.getItem("loginToken") && <DashboardBlogList />}
            {sessionStorage.getItem("loginToken") && <CreateServiceForm />}
            {sessionStorage.getItem("loginToken") && <DashboardServiceList />}
            {sessionStorage.getItem("loginToken") && <CreateTeamForm />}
            {sessionStorage.getItem("loginToken") && <DashboardTeamList />}

        </Layout>
    )
}

export default DashBoardPage