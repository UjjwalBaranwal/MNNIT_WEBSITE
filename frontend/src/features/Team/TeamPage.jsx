import {useState,useEffect} from "react";
import InfoCard from "./InfoCard";

function TeamPage() {
    const [data, setData] = useState([]);
    const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchData() {
          setIsLoading(true);
          try {
            const res = await fetch("http://localhost:8080/teams");
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await res.json();
            // Ensure the data structure matches your expectation
            setData(data || []);
          } catch (error) {
            setError(error);
            setData([]); // Provide a default empty array in case of error
          } finally {
            setIsLoading(false);
          }
        }
        fetchData();
      }, []);
  return (
    <div className="flex flex-col justify-center items-center m-4 p-5">
      {/* ------------------------------------------------  Dean Section --------------------------------------*/}
      <div className="flex flex-col justify-between items-center border-b-4 border-b-black p-4 m-10 ">
        <div className="p-10">
          <h1 className="text-5xl ">Dean, Resources and Alumni</h1>
        </div>
        <div className="grid grid-cols-1 w-7/12 justify-items-center p-4 h-3/5">
        {data?.slice(0,1).map((item) => (
          <InfoCard 
          name={item.name}
          location={item.location}
          post={item.post}
          duration={item.duration}
          email={item.email}
          phoneno={item.phoneno}
           key={item.id} />
        ))}
        </div>
      </div>
      {/* ------------------------------------------------  Teacher Section --------------------------------------*/}
      <div className="flex flex-col space-y-20 items-center m-4 p-5 h-screen border-b-4 border-black">
        <h1 className="text-5xl ">Coodinator</h1>

        <div className="grid grid-cols-2 gap-4 m-4 p-5 h-3/5">
        {data?.slice(1,3).map((item) => (
          <InfoCard 
          name={item.name}
          location={item.location}
          post={item.post}
          duration={item.duration}
          email={item.email}
          phoneno={item.phoneno}
           key={item.id} />
        ))}
        </div>
      </div>
      {/* ------------------------------------------------  support Section --------------------------------------*/}
      <div className="flex flex-col space-y-20 items-center m-4 border-b-4 border-black  h-fit">
        <div>
          <h1 className="text-5xl ">Member</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 m-4 p-5 h-3/5">
        {data?.slice(3,8).map((item) => (
          <InfoCard 
          name={item.name}
          location={item.location}
          post={item.post}
          duration={item.duration}
          email={item.email}
          phoneno={item.phoneno}
           key={item.id} />
        ))}
        </div>
      </div>
      {/* ------------------------------------------------  support Section --------------------------------------*/}
      <div className="flex flex-col space-y-20 items-center m-4  h-fit">
        <div>
          <h1 className="text-5xl ">Web Team</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 m-4 p-5 h-3/5">
        {data?.slice(8,10).map((item) => (
          <InfoCard 
          name={item.name}
          location={item.location}
          post={item.post}
          duration={item.duration}
          email={item.email}
          phoneno={item.phoneno}
           key={item.id} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
