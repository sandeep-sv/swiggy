import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import ResMenu from './components/ResMenu.jsx'
import SearchResults from './components/SearchComponents/SearchResults.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/test",
    element:<Banner />
  },
  {
    path:"/restaurant/:id",
    element:<ResMenu />
  },
  {
    path:"/searchResults/:dish",
    element:<SearchResults/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore} >
      <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>,
)
