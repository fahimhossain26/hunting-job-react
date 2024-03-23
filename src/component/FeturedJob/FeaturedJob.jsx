import { useEffect, useState } from "react";
import Job from "../job/Job";


const FeaturedJob = () => {
    const [jobs,setJobs]=useState([]);
    //this not the best way to load all data 
    const [dataLenght, setDataLength]=useState(4);
  useEffect(()=>{
  fetch('/public/jobs.json')
  .then(res=>res.json())
  .then(data=>setJobs(data));
 }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
                <p >Explore thousand of jobs opportunities with all the information you need , Its your Future </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLenght).map(job=> <Job key={job.id} job={job}></Job> )
                }
            </div>
            <div className={dataLenght==jobs.length && 'hidden'}>
                <button className="btn btn-primary mt-5 mb-5"
                onClick={()=>setDataLength(jobs.length)}>Show All jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;