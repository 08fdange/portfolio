import React from 'react';
import { Document, Page, pdfjs} from "react-pdf";
import file from '../assets/FD-Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return(
        <div align='center' className='resume-div'>
            <Document file={file}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default Resume; 
