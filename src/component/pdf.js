import { forwardRef, useEffect, useState } from "react";
import { useValue } from "../contextApi";
import styles from "./pdf.module.css"
export const PDFForm = forwardRef((props, ref) => {
    const {formData} = useValue();
    const[ageDetails, setAgeDetails] = useState({age : 0, month : 0, day : 0})
    const formattedDOB = formData.dob ? new Date(formData.dob).toLocaleDateString() : '';
    useEffect(()=>{
        if(formData.dob){
            const formattedDOB = new Date(formData.dob);
            calculateAge(formattedDOB);
        }
    }, [formData.dob])
    // let age=0;
    // let month =0;
    // let day =0;
    // calculateAge(formattedDOB);
    function calculateAge(date){
        let dobDate = new Date(date);
        //current date 
        let currentDate = new Date();
        let age = currentDate.getFullYear() - dobDate.getFullYear();
        let month = currentDate.getMonth() - dobDate.getMonth();
         let day = currentDate.getDay() - dobDate.getDate();

        if (month < 0 || (month === 0 && day < 0)) {
            age--;
            month += 12;
        }
        if (day < 0) {
            month--;
            day += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }

        setAgeDetails({ age, month, day });

    }
    return(
        <>
        <div ref={ref}>
            <div class={styles.heading}>
                <div><h1>{formData.name}</h1></div>
                <div class={styles.date}><h1>DOB : {formattedDOB}</h1></div>
            </div>
            <hr></hr>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>DOB:</strong> {formattedDOB}</p>
            <p><strong>Qualification :</strong> {formData.qualification}</p>
            <p><strong>Occupation :</strong> {formData.occupation}</p>
            {/* <p><strong>Age :</strong> {formData.age}</p> */}
            <p><strong>Age :</strong>{ageDetails.age} y, {ageDetails.month} m, {ageDetails.day} d</p>
            <p><strong>Height :</strong> {formData.height}</p>
            <p><strong>Father Name:</strong> {formData.fatherName}</p>
            <p><strong>Mother Name:</strong> {formData.motherName}</p>
            <p><strong>Father Occupation:</strong> {formData.fatherOccupation}</p>
            <p><strong>Address :</strong> {formData.address}</p>
            <br></br>
            <p><strong>Nana jee Name:</strong> {formData.nanaName}</p>
            <p><strong>Mama Name:</strong> {formData.mamaName}</p>
            <p><strong>Mama Address:</strong> {formData.mamaAddress}</p>
            <br></br>
            <hr></hr>
           
            
        </div>
        </>
    )
})