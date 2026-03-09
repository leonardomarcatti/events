const eventsLoader = async () => {
   const response = await fetch('/api/events', {
      method: 'get',
      headers: {
         "Content-Type": "application/json",
      },
   });
   if (!response.ok) {
      throw new Response(JSON.stringify({ message: 'Could not fetch events' }), {status: 500})
   } else {
      const { events } = await response.json();
      return events
   }
}

const deferEvents = () => {
   return {
      events: eventsLoader()
   }
}

const eventDetailLoader = async ({request, params}) => {
   const {id} = params
   const response = await fetch(`/api/events/${id}`, {
      method: 'get',
      headers: {
         "Content-Type": "application/json",
      },
   });

   if (!response.ok) {
      throw new Response(JSON.stringify({ message: 'Could not fetch data for this event' }), { status: 500 })
   } else {
      const json = await response.json();
      return json
   }

   
}

export { deferEvents, eventDetailLoader, eventsLoader }