import React, { useState, useEffect } from "react";

const PaginatedVideoList = () => {
     const [videos, setVideos] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);

     useEffect(() => {
          const fetchVideos = async () => {
               try {
                    const response = await fetch("https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE", {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                              "x-project": "cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==",
                              Authorization: "Bearer <token>",
                         },
                         body: JSON.stringify({
                              payload: {},
                              page: currentPage,
                              limit: 10,
                         }),
                    });

                    if (!response.ok) {
                         alert("Network response was not ok");
                         throw new Error("Network response was not ok");
                    }

                    const data = await response.json();
                    setVideos(data.list);
               } catch (error) {
                    console.error("Error fetching data:", error);
               }
          };

          fetchVideos();
     }, [currentPage]);

     const handleNextPage = () => {
          setCurrentPage(currentPage + 1);
     };

     const handlePrevPage = () => {
          if (currentPage > 1) {
               setCurrentPage(currentPage - 1);
          }
     };

     return (
          <div>
               <h1>Video List</h1>
               <ul>
                    {videos.map(video => (
                         <li key={video.id}>
                              <img src={video.photo} alt={video.title} />
                              <p>{video.title}</p>
                              <p>Username: {video.username}</p>
                              <p>Created At: {video.create_at}</p>
                              <p>Likes: {video.like}</p>
                         </li>
                    ))}
               </ul>
               <button
                    onClick={handlePrevPage}
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
               >
                    Previous
               </button>
               <button
                    onClick={handleNextPage}
                    className="px-4 py-2 ml-10 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
               >
                    Next
               </button>
          </div>
     );
};

export default PaginatedVideoList;
