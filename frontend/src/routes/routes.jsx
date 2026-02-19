import { createBrowserRouter } from "react-router";
import EditEvent from '../pages/EditEvent'
import EventDetails from '../pages/EventDetails'
import Events from '../pages/Events'
import Home from '../pages/Home'
import NewEvent from '../pages/NewEvent'
import MainLayout from "../layouts/MainLayout";
import EvetsLayout from '../layouts/EventsLayout'
import Error from "../pages/Error";
import { eventsLoader, eventDetailLoader } from "../utils/eventsLoader";
import { createNewEvent } from "../utils/eventActions";
const routes = createBrowserRouter([
   {
      path: '/', element: <MainLayout />, children: [
      {index: true, element: <Home />},
      {path: 'events', element: <EvetsLayout/>, children:[
         {path: '', element: <Events/>, loader: eventsLoader, errorElement: <Error />},
         {path: 'new', element: <NewEvent/>, action: createNewEvent},
         {path: ':id', loader: eventDetailLoader, id: 'eventID', children: [
            {index: true, element: <EventDetails/>, },
            {path: 'edit', element: <EditEvent/>},
         ]}
      ]},
   ]},
])

export default routes