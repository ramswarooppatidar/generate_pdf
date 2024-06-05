import styles from "./form.module.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from "react";
import { PDFForm } from "./pdf";
import { useValue } from "../contextApi";
import { Loader } from "./loader";

export function Form(){
    const formRef = useRef();
    const pdfRef = useRef();
     const [isLoading, setIsLoading] = useState(false);
     const{formData, setFormData, handleChange} = useValue();

    const generatePDF = () => {
       
        const input = pdfRef.current;
        if (input) {
            setIsLoading(true);
            html2canvas(input, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                // Create a new jsPDF object with custom page size
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width*2;
    
                // Ensure the canvas height does not exceed the half-A4 page height
                const adjustedPdfHeight = Math.min(pdfHeight, 168.5/1);
    
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, adjustedPdfHeight);
                pdf.save("download.pdf");
                setIsLoading(false);
            }).catch(err => {
                console.error("Error generating PDF", err);
            });
        } else {
            console.error("PDFRef is not defined");
        }
    };

    return(
        <>
        {isLoading ? <Loader/> 
        : (<div class="container"  ref={formRef}>
            <h1>Patidar engagment form...!</h1>
            <form>
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" name="name" type="text" placeholder="your name" onChange={handleChange} value={formData.name} />

                <label htmlFor="dob" className="form-label">Date of birth</label>
                <input id="dob" name="dob" type="datetime-local" placeholder="date of birthday" onChange={handleChange} value={formData.dob} />

                <label htmlFor="fatherName" className="form-label">Father Name</label>
                <input id="fatherName" name="fatherName" type="text" placeholder="Mr. Rameshwar Patidar" onChange={handleChange} value={formData.fatherName} />

                <label htmlFor="motherName" className="form-label">Mother name</label>
                <input id="motherName" name="motherName" type="text" placeholder="Miss Krishna Patidar" onChange={handleChange} value={formData.motherName} />

                <label htmlFor="address" className="form-label">Your address</label>
                <textarea id="address" name="address" rows="5" cols="40" placeholder="village Dupada, district Shajapur..." onChange={handleChange} value={formData.address} />

                <hr />

                <label htmlFor="nanaName" className="form-label">Nana Name</label>
                <input id="nanaName" name="nanaName" type="text" placeholder="Mr. Radheshyam Choudary" onChange={handleChange} value={formData.nanaName} />

                <label htmlFor="mamaName" className="form-label">Mama Name</label>
                <input id="mamaName" name="mamaName" type="text" placeholder="Miss. Sanwtra Devi" onChange={handleChange} value={formData.mamaName} />

                <label htmlFor="mamaAddress" className="form-label">Mama address</label>
                <textarea id="mamaAddress" name="mamaAddress" rows="5" cols="40" placeholder="Village Lahori, District Shajapur" onChange={handleChange} value={formData.mamaAddress} />

                <hr />

                <label htmlFor="qualification" className="form-label">Qualification</label>
                <textarea id="qualification" name="qualification" rows="5" cols="40" placeholder="MTech-2018 in VLSI design&nbsp;BE-2018 in Electronics" onChange={handleChange} value={formData.qualification} />

                <label htmlFor="occupation" className="form-label">Occupation</label>
                <textarea id="occupation" name="occupation" rows="5" cols="40" placeholder="Software Engineer, Location Mumbai.." onChange={handleChange} value={formData.occupation} />

                <label htmlFor="fatherOccupation" className="form-label">Father Occupation</label>
                <textarea id="fatherOccupation" name="fatherOccupation" rows="5" cols="40" placeholder="Agriculture, pradhan" onChange={handleChange} value={formData.fatherOccupation} />

                <hr />

                <label htmlFor="age" className="form-label">Your age</label>
                <input id="age" name="age" type="text" placeholder="24,7" onChange={handleChange} value={formData.age} />

                <label htmlFor="height" className="form-label">Your height in Inch</label>
                <input id="height" name="height" type="text" placeholder="5.2" onChange={handleChange} value={formData.height} />
            </form>
            <div class={styles.btn_container}>
                {/* <button>submit</button> */}
                {/* <button onClick={generatePDF}>Download PDF</button> */}
                <button class="download-button" onClick={generatePDF}>
                    <div class="docs"><svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg>Pdf</div>
                    <div class="download">
                        <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                    </div>
                </button>
            </div>  
             <PDFForm ref={pdfRef} />      
            
        </div>)
        }        
        </>
        )
    
}