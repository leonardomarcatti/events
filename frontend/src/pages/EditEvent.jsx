import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router'

const EditEvent = () => {
   const {event} = useRouteLoaderData('eventID')
   return <EventForm event={event}/>
}

export default EditEvent