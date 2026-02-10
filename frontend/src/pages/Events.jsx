import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';

const Events = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [fetchedEvents, setFetchedEvents] = useState();
   const [error, setError] = useState();

   useEffect(() => {
      async function fetchEvents() {
         setIsLoading(true);
         const response = await fetch('http://192.168.1.160:3001/events');

         if (!response.ok) {
            setError('Fetching events failed.');
         } else {
            const resData = await response.json();
            setFetchedEvents(resData.events);
         }
         setIsLoading(false);
      }

      fetchEvents();
   }, []);
   return (
      <>
         <div style={{ textAlign: 'center' }}>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
         </div>
         {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
      </>
   );
}

export default Events;