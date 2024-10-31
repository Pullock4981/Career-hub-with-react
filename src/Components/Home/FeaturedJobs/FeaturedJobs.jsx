import { useEffect, useState } from "react";
import JobData from "./JobData/JobData";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() =>{
        fetch(`jobs.json`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

  return (
    <div className="mt-10 mb-7">
      <div>
        <h2 className="text-2xl md:text-5xl font-bold text-center">
          Featured Jobs: {jobs.length}
        </h2>
        <div className="grid md:grid-cols-2 mx-4 lg:mx-28 mt-8 ">
            {
                jobs.map(job =><JobData job={job}></JobData>)
            }
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
