import Button from "../../component/Button";


const JobTable = () => {
  // Sample data array
  const jobList = [
    {
      jobName: 'Software Developer',
      minPay: 'Rs 70,000 - Rs-10000',
      startDate: '2024-08-01',
      endDate: '2025-08-01',
    },
    {
      jobName: 'Product Manager',
      minPay: 'Rs 90,000 - Rs-10000',
      startDate: '2024-09-15',
      endDate: '2026-09-15',
    },
    {
      jobName: 'UX Designer',
      minPay: 'Rs 65,000 - Rs-10000',
      startDate: '2024-07-01',
      endDate: '2025-07-01',
    }
  ];

  return (
    <div className="container mx-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200 ">
        <thead>
          <tr className="border-2 border-gray-400">
            <th className="border px-4 py-2">Job Name</th>
            <th className="border px-4 py-2">Minimum Pay</th>
            <th className="border px-4 py-2">Start Date</th>
            <th className="border px-4 py-2">End Date</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="border-2 border-gray-400 p-8 my-10">
          {jobList.map((job, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{job.jobName}</td>
              <td className="border px-4 py-2">{job.minPay}</td>
              <td className="border px-4 py-2">{job.startDate}</td>
              <td className="border px-4 py-2">{job.endDate}</td>
              <td className="border px-4 py-2">
               <Button secondary outline>View Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobTable;
