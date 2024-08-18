
import Button from "../../component/Button";
import InputField from "./InputField";
function JobForm() {
  const inputcl =
    "px-12 w-1/2 py-3 m-4 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500";
  return (
    <div>
      <form action="" className="flex flex-col justify-center items-center p-6">
        
        <InputField
          type="Job Name"
          placeholder="Job Name"
          labelName="Job Name"
        />
        
        <div className="flex justify-around w-full items-center text-lg">
          <label htmlFor="" className="m-4  font-semibold text-xl tracking-wider w-1/2 text-center">Skill Req</label>
          <textarea type="textarea" placeholder="Give one required skill in one line " className={inputcl} />
        </div>
        <InputField
          type="Qualification"
          placeholder="Qualification"
          labelName="Qualification"
        />
    
      <InputField
          type="Min Pay"
          placeholder="Min Pay"
          labelName="Min Pay"
        />
        
        <div className="flex justify-around w-full items-center text-lg">
        <label htmlFor="startDate" className="m-4  font-semibold text-xl tracking-wider w-1/2 text-center">
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
          <label htmlFor="endDate" className="m-4  font-semibold text-xl tracking-wider w-1/2 text-center">
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
