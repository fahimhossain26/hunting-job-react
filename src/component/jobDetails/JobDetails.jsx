import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/LocalStorage";

const JobDetails = () => {
   const jobs=useLoaderData();
   const {id}=useParams();
   const idInt=parseInt(id);
   const job=jobs.find(job=>job.id===idInt);
//    console.log(job);
const handelApplyJob=()=>{
    saveJobApplication(id);
    toast("Apply sucessfully !");
};
const{job_description,job_responsibility, salary,job_type,educational_requirements,experiences ,job_title,contact_information}=job
    
    return (
        <div className="mb-10">
            <h2 className="font-bold text-3xl p-5">Job detaisls of :  {job_title} </h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <p className="mb-5"><span className="font-bold">Job Description : </span>{job_description} </p>
                    <p className="mb-5"><span className="font-bold">Job Responsibility: </span>{job_responsibility} </p>
                    <p className="mb-5"><span className="font-bold">Educational Requirements:  </span>{educational_requirements} </p>
                    <p className="mb-5"><span className="font-bold">Experiences : </span>{experiences} </p>
                </div>
                <div className="border bg-blue-50 p-3">
                    <h2 className="font-bold text-xl mb-5 m-3">Job Details</h2>
                    <hr />
                    <p><span className="font-bold">Salary: </span>{salary}</p>
                    <p><span className="font-bold">Job-Title: </span>{job_title}</p>
                    <h2 className="font-bold text-xl mb-5 m-3">Conatact Information </h2>
                    <hr />
                    <p> <span className="font-bold">Phone: </span> {contact_information.phone}</p>
                    <p><span className="font-bold">Email: </span> {contact_information.email}</p>
                    <p><span className="font-bold">Address: </span> {contact_information.address}</p>
                    
                    <button onClick={handelApplyJob} className="btn btn-success mt-5 w-full"> Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;