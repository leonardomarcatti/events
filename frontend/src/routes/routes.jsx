import { createBrowserRouter } from "react-router";
import EditEvent from '../pages/EditEvent'
import EventDetails from '../pages/EventDetails'
import Events from '../pages/Events'
import Home from '../pages/Home'
import NewEvent from '../pages/NewEvent'
import MainLayout from "../layouts/MainLayout";
import EvetsLayout from '../layouts/EventsLayout'

const routes = createBrowserRouter([
   {
      path: '/', element: <MainLayout />, children: [
      {index: true, element: <Home />},
      {path: 'events', element: <EvetsLayout/>, children:[
         {path: '', element: <Events/>},
         {path: 'new', element: <NewEvent/>},
         {path: ':id/edit', element: <EditEvent/>},
         {path: ':id', element: <EventDetails/>},
      ]},
   ]},
])

export default routes