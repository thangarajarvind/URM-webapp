import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AdminPagesLayout, AdminDashboard, AdminUserManagement, AdminSettings, AdminChatPage} from './pages/admin';
import { AboutPage, ContactPage, HomePage, LoginPage, LogoutPage, PublicPagesLayout, RegistrationPage, ServicesPage, ForgetPassword } from './pages';
import {CandidateApplicationsPage, CandidateChatPage, CandidateDashboardPage, CandidatePagesLayout,CandidateNewLayout, CandidateProfilePage, NewApplication,CandidateSettingsPage, } from './pages/candidate';
import { RecruiterHomePage, RecruiterLayoutPage, RecruiterProfilePage, RecruiterJobPostPage,RecruiterJobNewPage, RecruiterCandidateInterviewPage,RecruiterApplicationStatusPage, RecruiterSearchCandidatePage, RecruiterCandidateDetailPage, RecruiterCandidateSearchResultPage, RecruiterApplicationStatusDetailsPage, RecruiterJobDescriptionPage } from './pages/recruiter';


import {AcademiaMatching, AcademiaChatPage, AcademiaDashboardPage, AcademiaPagesLayout, AcademiaProfilePage, AcademiaCandidatesPage, AcademiaCreateJobPage, AcademiaNotifications} from './pages/academia';
import { JobDescriptionPage } from './pages/academia';

import { DeiMatching, DeiChatPage, DeiDashboardPage, DeiPagesLayout, DeiProfilePage, DeiCandidatesPage, DeiCreateJobPage, DeiNotifications} from './pages/deiofficer';
import { DeiJobDescriptionPage } from './pages/deiofficer';



const App =() =>{

  return (
    <BrowserRouter>
      <Routes>
        
        {/* Public routes */}
        <Route path='/' element ={<PublicPagesLayout />}>
          <Route index element ={<HomePage />}/>
          <Route path='about' element ={<AboutPage />}/>
          <Route path='services' element ={<ServicesPage />}/>
          <Route path='login' element ={<LoginPage />}/>
          <Route path='forget' element ={<ForgetPassword />}/>
          <Route path='register' element ={<RegistrationPage />}/>
          <Route path='contact' element ={<ContactPage />}/>
          <Route path='logout' element ={<LogoutPage />}/>
        </Route>

        {/* admin routes */}
        <Route path='/admin' element ={<AdminPagesLayout />}>
          <Route index element ={<AdminDashboard />}/>
          <Route path='manage-users' element ={<AdminUserManagement />}/>
          <Route path='settings' element ={<AdminSettings />}/>
          <Route path='chat' element ={<AdminChatPage />}/>
        </Route>

        
        {/* candidate Routes */}
        <Route path='/candidate' element ={<CandidateNewLayout />}>
          <Route index element ={<CandidateDashboardPage />}/>
          <Route path='profile' element ={<CandidateProfilePage />}/>
          <Route path='chat' element ={<CandidateChatPage />}/>
          <Route path='applications' element ={<CandidateApplicationsPage />}/>
          <Route path='settings' element ={<CandidateSettingsPage />}/>
          <Route path='job_details/:id' element ={<NewApplication/>} />
        </Route>
        
        {/* candidate routes 
        <Route path='/candidate' element ={<CandidatePagesLayout />}>
          <Route index element ={<CandidateDashboardPage />}/>
          <Route path='profile' element ={<CandidateProfilePage />}/>
          <Route path='chat' element ={<CandidateChatPage />}/>
          <Route path='applications' element ={<CandidateApplicationsPage />}/>
          <Route path='settings' element ={<CandidateSettingsPage />}/>
        </Route>
        */}

      {/* academia routes */}
      <Route path='/academia' element ={<AcademiaPagesLayout />}>
          <Route index element ={<AcademiaDashboardPage />}/>
          <Route path='profile' element ={<AcademiaProfilePage />}/>
          <Route path='chat' element ={<AcademiaChatPage />}/>
          <Route path='matching' element ={<AcademiaMatching />}/>
          <Route path='CandidateSearchPage' element ={<AcademiaCandidatesPage />}/>
          <Route path='create' element ={<AcademiaCreateJobPage />}/>
          <Route path='notifications' element ={<AcademiaNotifications />}/>
          <Route path='jobDescription' element ={<JobDescriptionPage />}/>
      </Route>

        

      {/* recruiter routes */}
      <Route path='/recruiter' element ={<RecruiterLayoutPage />}>
        <Route index element ={<RecruiterHomePage />} />
        <Route path='profile' element ={<RecruiterProfilePage />} />
        <Route path='jobs' element ={<RecruiterJobPostPage />} />
        <Route path='candidates' element ={<RecruiterSearchCandidatePage />} />
        <Route path='interview' element ={<RecruiterCandidateInterviewPage />} />
        <Route path='applications' element ={<RecruiterApplicationStatusPage />} />
        <Route path='cand_details/:id' element ={<RecruiterCandidateDetailPage />} />
        <Route path='cand_result' element ={<RecruiterCandidateSearchResultPage />} />
        <Route path='app_status/:id' element ={<RecruiterApplicationStatusDetailsPage />} />
        <Route path='job_new' element ={<RecruiterJobNewPage />} />
        <Route path='job_desc/:id' element ={<RecruiterJobDescriptionPage />} />
      </Route>

      {/* deiofficer routes */}
      <Route path='/deiofficer' element ={<DeiPagesLayout />}>
          <Route index element ={<DeiDashboardPage />}/>
          <Route path='profile' element ={<DeiProfilePage />}/>
          <Route path='chat' element ={<DeiChatPage />}/>
          <Route path='matching' element ={<DeiMatching />}/>
          <Route path='CandidateSearchPage' element ={<DeiCandidatesPage />}/>
          <Route path='create' element ={<DeiCreateJobPage />}/>
          <Route path='notifications' element ={<DeiNotifications />}/>
          <Route path='jobDescription' element ={<DeiJobDescriptionPage />}/>
      </Route>
      
      </Routes>

    </BrowserRouter>
  )
}

export default App;