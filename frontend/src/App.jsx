import './App.css'
import { RouterProvider } from 'react-router'
import routes from './routes/routes.jsx'

const App = () => {
  return <RouterProvider router={routes}/>
}

export default App
