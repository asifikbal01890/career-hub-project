
import { Toaster } from 'react-hot-toast'
import './App.css'
import MainLayout from './Components/Common/Layout/MainLayout'

function App() {

  return (
    <>
     <MainLayout></MainLayout>
     <Toaster
      position="top-right"
     ></Toaster>
    </>
  )
}

export default App
