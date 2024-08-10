
import Button from "../../component/Button";

function JobForm() {
  const inputcl =
    "px-12 w-1/2 py-3 m-4 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500";
  return (
    <div>
      <form action="" className="flex flex-col justify-center items-center p-6">
        <div className="flex justify-around w-full items-center text-lg ">
          <label htmlFor="">Job Name</label>
          <input type="text" placeholder="job name" className={inputcl} />
        </div>
        <div className="flex justify-around w-full items-center text-lg">
          <label htmlFor="">Skill Req</label>
          <textarea type="textarea" placeholder="Give one required skill in one line " className={inputcl} />
        </div>
        <div className="flex justify-around w-full items-center text-lg">
          <label htmlFor="">Qualification</label>
          <input
            type="text"
            placeholder="qualification need"
            className={inputcl}
          />
        </div>
        <div className="flex justify-around w-full items-center text-lg">
          <label htmlFor="">Min Pay</label>
          <input type="text" placeholder="min pay" className={inputcl} />
        </div>

        <div className="flex justify-around w-full items-center text-lg">
        <label htmlFor="startDate" className="">
            Start Date
          </label>
          <input
            id="startDate"
            type="text"
            placeholder="Start Date"
            onBlur={(e) => (e.target.type = "text")}
            onFocus={(e) => (e.target.type = "date")}
            className={inputcl}
          />
        </div>
        <div className="flex justify-around w-full items-center text-lg">
          <label htmlFor="endDate" className="">
            End Date
          </label>
          <input
            id="endDate"
            type="text"
            placeholder="End Date"
            onBlur={(e) => (e.target.type = "text")}
            onFocus={(e) => (e.target.type = "date")}
            className={inputcl}
          />
        </div>
        <div className="flex justify-end w-3/4 text-xl items-end">
          <Button primary outline rounded>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default JobForm;
