import EventsList from '../components/EventsList';
import { useLoaderData, Await } from 'react-router';
import { Suspense } from 'react';

const Events = () => {
   const {events} = useLoaderData()
   
   if (events.error) {
      <p>{events.message}</p>
   }
   return <Suspense fallback={<h1 style={{'text-align' : 'center'}}>Loading...</h1>}>
      <Await resolve={events}>
      {
         (loadedEvents) => <EventsList events={loadedEvents} />
      }         
      </Await>
   </Suspense> 
}

export default Events;