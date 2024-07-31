import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main/mainPage'
import Timeline from './features/timeline/timeline'
import Menu from './features/menu/menu';
import { FilesProvider } from '../contexts/FilesContext';
import ResumePage from './pages/resume/resumePage';
import ProjectPage from './pages/project/projectPage';
import CollapsibleContainer from './features/CollapsibleContainer/CollapsibleContainer';



function App() {

  return (
    <FilesProvider>
      <main className='d-flex flex-nowrap'>
        <div className='d-flex flex-row  w-100'>
          <CollapsibleContainer>
            <div className='h-100 d-flex flex-column align-items-center'>
              <Menu />
              <Timeline />
            </div>
          </CollapsibleContainer>
          <div>
            <Routes>
              <Route index element={<Navigate to='/home' replace />} />
              <Route path='/home' element={<MainPage />} />
              <Route path='/resume' element={<ResumePage />} />
              <Route path='/project/:id' element={<ProjectPage />} />
            </Routes>
          </div>
        </div>
      </main>
    </FilesProvider>
  )
}

export default App