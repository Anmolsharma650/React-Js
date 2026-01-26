import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

//   useEffect(() => {
//     fetch('https://api.github.com/users/Anmolsharma650')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="max-w-2xl mx-auto mt-6">
  <div className="flex flex-col md:flex-row  items-center bg-amber-700 text-white rounded-xl shadow-lg p-6 gap-6 mb-3.5">
    
    {/* Left: GitHub Avatar */}
    <div className="flex-shrink-0">
      <img
        src={data?.avatar_url}  
        alt="GitHub Avatar"
        className="w-32 h-32 rounded-full border-4 border-white object-cover"
      />
    </div>

    {/* Right: GitHub Info */}
    <div className="text-center md:text-left space-y-2">
      <h2 className="text-2xl font-bold">
        {data?.name || "No Name Available"}
      </h2>

      <p className="text-white">
        @{data?.login}
      </p>

      <p className="text-sm">
        {data?.bio || "No bio provided"}
      </p>

      <a
        href={data?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 px-4 py-2 bg-white text-amber-700 rounded-md font-semibold hover:bg-amber-700 hover:border-2 hover:border-white  hover:text-amber-50 transition"
      >
        View GitHub Profile
      </a>
    </div>

  </div>
</div>

  );
}

export default Github;

 export const fetchData = async () => {
  const Response = await fetch('https://api.github.com/users/Anmolsharma650')
  return Response.json();
}