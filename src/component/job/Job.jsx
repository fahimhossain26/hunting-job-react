import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";




const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
    return (
        <div>
           <div className="card  bg-base-100 shadow-xl">
  <figure className="w-32 h-20 ml-8"><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {job_title}
      <div className="badge badge-warning">NEW</div>
    </h2>
    <p>{company_name}</p>
    <p className="flex items-center gap-2"> <CiLocationOn />Location: {location}</p>
    <p className="flex items-center gap-2"> <RiMoneyDollarCircleLine /> Salary: {salary}</p>

    <div className="card-actions justify-end">
      <div className="badge badge-outline bg-blue-50">{remote_or_onsite}</div> 
      <div className="badge badge-outline  bg-blue-50">{job_type}</div>
      
      
      
    
    </div> 
    <Link to={`/job/${id}`}> 
       <button className="btn btn-primary w-28">View Detais</button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Job;