import { Form } from "./component/form";
import { CustomFormContext } from "./contextApi";
import { createHashRouter,RouterProvider,createBrowserRouter} from 'react-router-dom';
import { PDFForm } from "./component/pdf";
function App() {
  const router = createHashRouter([{
    
    path : "/" ,
    children : [
       {index : true, element : <Form/>},
      {path : "pdf", element : <PDFForm/>}    
    ]  
  }
    
  ])
//  const router = createBrowserRouter([
//   {
//     path : "/" ,
//     children : [
//        {index : true, element : <Form/>},
//       {path : "/pdf", element : <PDFForm/>}    
//     ]  
//   }
// ]);
  return (
   <>
   <div>
   <CustomFormContext>
      {/* <Form /> */}
      <RouterProvider router={router} >
        
        </RouterProvider>
   </CustomFormContext>
     
   </div>
  
   </>
  );
}

export default App;
