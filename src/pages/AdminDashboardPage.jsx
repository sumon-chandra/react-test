import React, { useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import userIcon from "../assets/user-icon.svg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.svg";
import avatar from "../assets/avatar.png";
import likedIcon from "../assets/like-icon.png";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router";

const AdminDashboardPage = () => {
     const ref = useRef(null);
     const { dispatch } = useContext(AuthContext);
     const navigate = useNavigate();
     const handleLogOut = () => {
          dispatch({ type: "LOGOUT" });
          navigate("/");
     };

     // React Drug and Drop
     const [{ handlerId }, drop] = useDrop({
          accept: "card",
          collect(monitor) {
               return {
                    handlerId: monitor.getHandlerId(),
               };
          },
          hover(item, monitor) {
               if (!ref.current) {
                    return;
               }
               const dragIndex = item.index;
               const hoverIndex = index;
               if (dragIndex === hoverIndex) {
                    return;
               }
               const hoverBoundingRect = ref.current?.getBoundingClientRect();
               const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
               const clientOffset = monitor.getClientOffset();
               const hoverClientY = clientOffset.y - hoverBoundingRect.top;
               if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return;
               }
               if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return;
               }
               moveCard(dragIndex, hoverIndex);
               item.index = hoverIndex;
          },
     });
     const [{ isDragging }, drag] = useDrag({
          type: "card",
          item: () => {
               return { id, index };
          },
          collect: monitor => ({
               isDragging: monitor.isDragging(),
          }),
     });
     const opacity = isDragging ? 0 : 1;

     drag(drop(ref));

     return (
          <main className="w-full min-h-screen p-20 text-gray-500 bg-gray-900">
               <header>
                    <div className="flex items-center justify-between">
                         <h3 className="text-6xl font-black text-white">APP</h3>
                         <button
                              onClick={handleLogOut}
                              className="bg-[#9BFF00] text-lg px-5 py-2 rounded-full flex items-center gap-2 justify-center"
                         >
                              <img src={userIcon} alt=" User Icon" /> <span>Logout</span>
                         </button>
                    </div>
                    <div className="flex items-center justify-between mt-20 text-white">
                         <h3 className="text-6xl font-light">Today's Dashboard</h3>
                         <div className="px-5 py-3 space-x-3 bg-gray-700 rounded-lg">
                              <span>30 May 2022 .</span>
                              <span className="bg-[#9BFF00] rounded-md px-3 py-1 text-black">SUBMISSION OPEN</span>
                              <span>. 11:34</span>
                         </div>
                    </div>
               </header>
               <table className="flex flex-col items-stretch justify-between w-full text-gray-200">
                    <thead className="grid items-center w-full grid-cols-12 p-4">
                         <th className="col-span-1">#</th>
                         <th className="col-span-7">Title</th>
                         <th className="col-span-2">Author</th>
                         <th className="col-span-2">Most Liked</th>
                    </thead>
                    <tbody className="flex flex-col gap-5">
                         <tr data-handler-id={handlerId} ref={ref} className="grid items-center grid-cols-12 gap-10 p-4 bg-gray-800 rounded-lg ga-10">
                              <td className="col-span-1">01</td>
                              <td className="flex items-center justify-start col-span-7 gap-4">
                                   <img src={img2} alt="" />
                                   <span>Rune raises $100,000 for marketing through NFT butterflies sale</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <img src={avatar} alt="" />
                                   <span>ninjanft</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <span>240 </span>
                                   <img src={likedIcon} alt="" />
                              </td>
                         </tr>

                         <tr data-handler-id={handlerId} ref={ref} className="grid items-center grid-cols-12 gap-10 p-4 bg-gray-800 rounded-lg ga-10">
                              <td className="col-span-1">02</td>
                              <td className="flex items-center justify-start col-span-7 gap-4">
                                   <img src={img3} alt="" />
                                   <span>The Cryptocurrency Trading Bible</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <img src={avatar} alt="" />
                                   <span>ninjanft</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <span>240 </span>
                                   <img src={likedIcon} alt="" />
                              </td>
                         </tr>

                         <tr data-handler-id={handlerId} ref={ref} className="grid items-center grid-cols-12 gap-10 p-4 bg-gray-800 rounded-lg ga-10">
                              <td className="col-span-1">03</td>
                              <td className="flex items-center justify-start col-span-7 gap-4">
                                   <img src={img4} alt="" />
                                   <span>Designing our new company brand: Meta</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <img src={avatar} alt="" />
                                   <span>ninjanft</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <span>240 </span>
                                   <img src={likedIcon} alt="" />
                              </td>
                         </tr>

                         <tr data-handler-id={handlerId} ref={ref} className="grid items-center grid-cols-12 gap-10 p-4 bg-gray-800 rounded-lg ga-10">
                              <td className="col-span-1">04</td>
                              <td className="flex items-center justify-start col-span-7 gap-4">
                                   <img src={img5} alt="" />
                                   <span>Connect media partners, earn exciting rewards for today</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <img src={avatar} alt="" />
                                   <span>ninjanft</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <span>240 </span>
                                   <img src={likedIcon} alt="" />
                              </td>
                         </tr>

                         <tr data-handler-id={handlerId} ref={ref} className="grid items-center grid-cols-12 gap-10 p-4 bg-gray-800 rounded-lg ga-10">
                              <td className="col-span-1">01</td>
                              <td className="flex items-center justify-start col-span-7 gap-4">
                                   <img src={img6} alt="" />
                                   <span>Designing a more effective proejcts</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <img src={avatar} alt="" />
                                   <span>ninjanft</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <span>240 </span>
                                   <img src={likedIcon} alt="" />
                              </td>
                         </tr>

                         <tr data-handler-id={handlerId} ref={ref} className="grid items-center grid-cols-12 gap-10 p-4 bg-gray-800 rounded-lg ga-10">
                              <td className="col-span-1">01</td>
                              <td className="flex items-center justify-start col-span-7 gap-4">
                                   <img src={img2} alt="" />
                                   <span>Rune raises $100,000 for marketing through NFT butterflies sale</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <img src={avatar} alt="" />
                                   <span>ninjanft</span>
                              </td>
                              <td className="flex items-center justify-end col-span-2 gap-2">
                                   <span>240 </span>
                                   <img src={likedIcon} alt="" />
                              </td>
                         </tr>
                    </tbody>
               </table>
          </main>
     );
};

export default AdminDashboardPage;
