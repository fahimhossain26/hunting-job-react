import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/LocalStorage";

const Appliedjob = () => {
    const jobs=useLoaderData();
    useEffect(()=>{
        const storedJobsId=getStoredJobApplication();
        if(jobs.length>0){
            const jobsApplied=jobs.filter(job=> storedJobsId.includes(jobs.id)) 
        }
    },[])
    return (
        <div>
            <h2>Jobs I applyed </h2>
        </div>
    );
};

export default Appliedjob;