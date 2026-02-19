import { useRouteLoaderData } from "react-router"
import EventItem from '../components/EventItem'

const EventDetails = () => {
   const { event } = useRouteLoaderData('eventID')
   
   return <>
      <h1>Event Details Page</h1>
      <EventItem event={event} />
   </> 
}

export default EventDetails