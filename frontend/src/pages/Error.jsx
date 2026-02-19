import PageContent from "../components/PageContent"
import { useRouteError } from 'react-router';

const Error = () => {
   const error = useRouteError()

   let title = 'Some generic error'
   let message = 'Some generic message'

   if(error.status == 500){
      title = '500'
   }


   if (error.status == 404) {
      title = 'Not found'
   }

   return <PageContent title={title}>
      <p>{message}</p>
   </PageContent>
}

export default Error