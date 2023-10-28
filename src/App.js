import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { GlobalProvider } from './Context/context';
import { Home } from './Home/home';
import { Layout, LayoutDashboard, Layout404 } from './Layout/layout';
import { LoginRoute, LoginForm, GuardRoute } from './Auth/login';
import { RegisterPage } from './Auth/register';
import { PasswordPage } from './Auth/forgetpassword';
import { Page404 } from './Misc/404';
import { JobDetail } from './Pages/jobdetail';
import { DashboardSummary, DashboardListData, DashboardAddData } from './Pages/dashboard';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <GlobalProvider>

        <Routes>
          <Route path="/" element={
            <Layout>
              <Home/>
            </Layout>
          }/>
          
          <Route path="/job-vacancy" element={<Home/>}/>
          <Route path="/job-vacancy/:id" element={<JobDetail/>}/>

          <Route path="/dashboard" element={
            <GuardRoute>
              <LayoutDashboard>
                <DashboardSummary/>
              </LayoutDashboard>
            </GuardRoute>
          }/>

          <Route path="/dashboard/change-password" element={
            <GuardRoute>
              <LayoutDashboard>
                <PasswordPage/>
              </LayoutDashboard>
            </GuardRoute>
          }/>

          <Route path="/dashboard/list-job-vacancy" element={
            <GuardRoute>
              <LayoutDashboard>
                <DashboardListData/>
              </LayoutDashboard>
            </GuardRoute>
            
          }/>

          <Route path="/dashboard/list-job-vacancy/create" element={
             <GuardRoute>
              <LayoutDashboard> 
                <DashboardAddData/>
              </LayoutDashboard>
             </GuardRoute>
            
          }/>

          <Route path="/dashboard/list-job-vacancy/edit/:id" element={
             <GuardRoute>
                <LayoutDashboard>
                  <DashboardAddData/>
                </LayoutDashboard>
             </GuardRoute>
          }/>

          {/* authentication & authorization */}
          <Route path="/login" element={
            <LoginRoute>
              <Layout>
                <LoginForm/>
              </Layout>
            </LoginRoute>
          }/>

          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/forget-password" element={<PasswordPage/>}/>
          <Route path="*" element={
          <Layout404>
            <Page404/>
          </Layout404>
          }/>

        </Routes>

      </GlobalProvider>
    </BrowserRouter>
    
  </>
  );
}

export default App;
