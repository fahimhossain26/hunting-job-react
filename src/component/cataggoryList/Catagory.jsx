import { MdOutlineAccountBalance } from "react-icons/md";
import { TiLightbulb } from "react-icons/ti";
import { FaLandmark } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";




const Catagory = () => {
    return (
        <div className="mb-10">
            <h2 className="text-5xl text-center  mb-10 font-bold">Job Catagory List</h2>
            <p className="text-center mb-10 ">Explore thousand of jobs opportunities with all the information you need , Its your Future </p>

            <div className="flex justify-around">
                <div className="card w-46 bg-base-100 shadow-xl">
                    <div className="card-body">
                   <div className="text-6xl text-blue-700 mx-auto">  <MdOutlineAccountBalance /></div>
                        <h2 className="card-title">Account & Finance</h2>
                        <p>300 Jobs Available</p>

                    </div>
                </div>

                <div className="card w-46 bg-base-100 shadow-xl">
                    <div className="card-body">
                    <div className="text-6xl text-blue-700 mx-auto ">   <TiLightbulb /> </div>
                        <h2 className="card-title">Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                </div>


                <div className="card w-46 bg-base-100 shadow-xl">
                    <div className="card-body">
                    <div className="text-6xl text-blue-700 mx-auto ">   <MdEngineering /> </div>
                        <h2 className="card-title">Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                </div>


                <div className="card w-46 bg-base-100 shadow-xl">
                    <div className="card-body">
                    <div className="text-6xl text-blue-700 mx-auto ">   <TiLightbulb /> </div>
                        <h2 className="card-title">Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Catagory;