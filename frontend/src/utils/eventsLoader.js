const eventsLoader = async () => {
   const response = await fetch('http://192.168.1.160:3001/eventss', {
      method: 'get',
      headers: {
         "Content-Type": "application/json",
      },
   });
   if (!response.ok) {
      throw {message: 'Could not fetch events'}
   } else {
      const { events } = await response.json();
      return events
   }
}

export {eventsLoader}