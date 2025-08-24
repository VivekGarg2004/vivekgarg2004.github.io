import React from "react";
import Header from "../components/Header"; // Adjust the import path as needed

const RESUME_PDF_URL = "/vivek_garg_resume.pdf"; // Place your resume.pdf in the public directory

const ResumePage = () => (
    <div style={{ height: "100vh", width: "100vw", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
        <Header />
        <div style={{ flex: 1 }}>
            <iframe
                src={RESUME_PDF_URL}
                title="Resume"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                }}
            />
        </div>
    </div>
);

export default ResumePage;