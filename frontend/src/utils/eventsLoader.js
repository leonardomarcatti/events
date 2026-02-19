const eventsLoader = async () => {
   const response = await fetch('http://192.168.1.160:3001/events', {
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

const eventDetailLoader = async ({request, params}) => {
   const {id} = params
   const response = await fetch(`http://192.168.1.160:3001/events/${id}`, {
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

export { eventsLoader, eventDetailLoader }