import { redirect } from "react-router"

const createNewEvent = async ({request, params}) => {
   const data = await request.formData()
   const title = data.get('title')
   const image = data.get('image')
   const date = data.get('date')
   const description = data.get('description')

   const eventData = {title, image, date, description}

   const response = await fetch('http://192.168.1.160:3001/events', {
      method: 'post',
      body: JSON.stringify(eventData),
      headers: {
         "Content-Type": "application/json",
      },
   })

   if (!response.ok) {
         throw new Error("Could not create new event");
   }

   return redirect('..')
}

export {createNewEvent}