import { useLoaderData } from "react-router"
import EventItem from '../components/EventItem'
import {} from '../utils/eventsLoader'

const EventDetails = () => {
   const {event} = useLoaderData()
   
   return <>
      <h1>Event Details Page</h1>
      <EventItem event={event} />
   </> 
}

export default EventDetails