const eventsLoader = async () => {
   const response = await fetch('http://192.168.1.160:3001/events');
   if (!response.ok) {
      null
   } else {
      const { events } = await response.json();
      return events
   }
}

export {eventsLoader}