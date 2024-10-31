

const Job = ({job}) => {
    const{job_title} = job
    return (
        <div>
            <h2>Job Title: {job_title}</h2>
        </div>
    );
};

export default Job;