

const JobData = ({job}) => {
    const {logo, job_title, company_name, location, salary} = job
    return (
        <div>
            <div className="border rounded-lg flex flex-col justify-center items-start p-4 m-4">
                <img className="w-32 h-12" src={logo} alt="" />
                <h2 className="text-lg font-bold">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-5 mt-3">
                    <p className="border-2 border-purple-600 rounded py-1 px-2 text-purple-600">Remote</p>
                    <p className="border-2 border-purple-600 rounded py-1 px-2 text-purple-600">Full Time</p>
                </div>
                <div className=" md:flex gap-5 mt-1">
                    <p>{location}</p>
                    <p>Salary: {salary}</p>
                </div>
                <div className="mt-2">
                <button class="bg-violet-500 py-1 px-2 rounded-sm text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default JobData;