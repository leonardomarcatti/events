import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router'

const EditEvent = () => {
   const {event} = useRouteLoaderData('eventID')
   return <EventForm event={event} method='put'/>
}

export default EditEvent