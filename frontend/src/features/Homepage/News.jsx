import { useEffect, useState } from "react";
import NewsData from "./NewsData";
function News() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:3000/news");
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="border-2 h-full max-h-full col-span-2  border-gray-300">
      <div>
        <h1 className="font-extrabold text-xl my-2 mx-3 border-b-2 ">
          <span className=" rounded p-1 border-t-2 border-r-2 border-t-cyan-700 border-r-cyan-700  border-l-cyan-700 border-l-2 border-b-0">
            {" "}
            News
          </span>
        </h1>
      </div>
      <div>
        {data.map((item) => (
          <NewsData item={item} key={item.id} />
        ))}
      </div>
      <div className="text-sky-600 font-bold text-lg p-2 cursor-pointer my-2 mx-3 hover:text-blue-400">
        See all
      </div>
    </div>
  );
}

export default News;
