import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router';

const Events = () => {
   const events = useLoaderData()
   return <EventsList events={events} />
}

export default Events;