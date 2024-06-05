import { forwardRef } from "react";
import { useValue } from "../contextApi";
import styles from "./pdf.module.css"
export const PDFForm = forwardRef((props, ref) => {
    const {formData} = useValue();
    const formattedDOB = formData.dob ? new Date(formData.dob).toLocaleDateString() : '';
    return(
        <>
        <div ref={ref}>
            <div class={styles.heading}>
                <div><h1>{formData.name}</h1></div>
                <div class={styles.date}><h1>DOB : {formattedDOB}</h1></div>
            </div>
            <hr></hr>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>dob:</strong> {formData.dob}</p>
            <p><strong>Qualification :</strong> {formData.qualification}</p>
            <p><strong>Occupation :</strong> {formData.occupation}</p>
            <p><strong>Age :</strong> {formData.age}</p>
            <p><strong>Height :</strong> {formData.height}</p>
            <br></br>
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