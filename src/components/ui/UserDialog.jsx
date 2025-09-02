import React, { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDialog({ data }) {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const user = data.find((i) => i.id === parseInt(id));

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg relative">
                {/* Close Button */}
                <button
                    onClick={() => navigate("/users")}
                    className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
                >
                    ✕
                </button>
                {/* User Info */}
                <div className="flex flex-col items-center text-center">
                    {
                            !user.image ? (
                            <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-semibold text-gray-700">
                                {user.name[0]}
                            </div>
                            )  :
                            (
                                
                                <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-2xl font-semibold text-gray-700">
                                    <img src={user.image} alt="" className=' object-contain h-full transform scale-125' />
                                </div>
                            )
                    }
                    
                    <h2 className="mt-4 text-lg font-bold text-gray-900">{user.name}</h2>
                    <p className="text-sm text-gray-500">Gender: {user.gender}</p>

                    {/* Extra fields if available */}
                    {user.age && (
                        <p className="text-sm text-gray-500">Age: {user.age}</p>
                    )}
                    {/* Actions */}
                    <div className="mt-6 flex gap-2">
                        <button
                            onClick={() => alert("Saved!")}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => alert("Deleted!")}
                            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDialog;
