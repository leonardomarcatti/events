import { redirect } from "react-router"

const createEditEventAction = async ({request, params}) => {
   const data = await request.formData()
   const title = data.get('title')
   const image = data.get('image')
   const date = data.get('date')
   const description = data.get('description')
   const eventData = { title, image, date, description }
   let url = '/api/events/'
   
   if (request.method == 'PUT') {
      url += `${params.id}`
   }
   
   const response = await fetch(url, {
      method: request.method,
      body: JSON.stringify(eventData),
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
      },
   })

   if (response.status == 422) {      
         const json = await response.json()
         return json
   }

   return redirect('/events')
}

const deleteEventAction = async ({params}) => {   
   const response = await fetch(`/api/events/${params.id}`, {
      method: 'delete',
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
      },
   })

   if (!response.ok) {
      throw new Error("Could not delete the event");
   }

   return redirect('/events')
}

const newsLetterAction = async ({ request }) => {
   const data = await request.formData();
   const email = data.get('email');

   return { message: 'Signup successful!' };
}

export { createEditEventAction, deleteEventAction, newsLetterAction }