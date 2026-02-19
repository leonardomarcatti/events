import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router';

const Events = () => {
   const events = useLoaderData()
   
   if (events.error) {
      <p>{events.message}</p>
   }
   return <EventsList events={events} />
}

export default Events;