import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  // call a state for load jobs data
  const [jobs, setJobs] = useState();

  // for load data call useEffect
  useEffect(() => {
    fetch(`jobs.json`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-10 mb-7">
      <div>
        <h2 className="text-5xl font-bold text-center">
          Featured Jobs: {jobs.length}
        </h2>
        <div>
          {jobs.map((job) => (
            <Job job={job}></Job>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
