
import { createContext, useContext, useEffect, useState } from "react";
const formContext = createContext();

function useValue(){
    const value = useContext(formContext);
    return value;
}
export function CustomFormContext({children}){
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        fatherName: '',
        motherName: '',
        address: '',
        nanaName: '',
        mamaName: '',
        mamaAddress: '',
        qualification: '',
        occupation: '',
        fatherOccupation: '',
        age: '',
        height: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
       
        setFormData({ ...formData, [name]: value });
    };

    return(
        <formContext.Provider value={{formData,
                                    setFormData, handleChange}} >
            {children}
        </formContext.Provider>
    )
   
}
export {useValue}
export default CustomFormContext;
