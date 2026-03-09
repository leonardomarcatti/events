import { createBrowserRouter } from "react-router";
import EditEvent from '../pages/EditEvent'
import EventDetails from '../pages/EventDetails'
import Events from '../pages/Events'
import Home from '../pages/Home'
import NewEvent from '../pages/NewEvent'
import MainLayout from "../layouts/MainLayout";
import EventsLayout from '../layouts/EventsLayout'
import Error from "../pages/Error";
import { deferEvents, eventDetailLoader } from "../utils/eventsLoader";
import { createEditEventAction, deleteEventAction, newsLetterAction } from "../utils/eventActions";
import Newsletter from "../pages/NewsLetter";

const routes = createBrowserRouter([
   {
      path: '/', element: <MainLayout />, children: [
      {index: true, element: <Home />},
      {path: 'news', element: <Newsletter />, action: newsLetterAction},
      {path: 'events', element: <EventsLayout/>, children:[
         {index: true, element: <Events />, loader: deferEvents, errorElement: <Error />},
         { path: 'new', element: <NewEvent />, action: createEditEventAction },
         {path: ':id', loader: eventDetailLoader, id: 'eventID', children: [
            { index: true, element: <EventDetails />, action: deleteEventAction },
            { path: 'edit', element: <EditEvent />, action: createEditEventAction },
         ]}
      ]},
   ]},
])

export default routes