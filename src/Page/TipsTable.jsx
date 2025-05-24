import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const TipsTable = ({ tip, setTips, tips }) => {
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // start deleting the Tip
                fetch(`https://assignment-10-server-seven-topaz.vercel.app/update/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tip has been deleted.",
                                icon: "success"
                            });

                            // remove the Tips from the state
                            const remainingTips = tips.filter(tip => tip._id !== _id);
                            setTips(remainingTips);
                        }
                    })


            }
        });
    }
    return (
        <tr className="border-t">
            <td className="px-6 py-4">
                <img
                    src={tip.imagesURL}
                    alt={tip.title}
                    className="h-12 w-12 rounded object-cover"
                />
            </td>
            <td className="px-6 py-4 hidden lg:table-cell font-medium">{tip.title}</td>
            <td className="px-6 hidden lg:table-cell py-4">{tip.topic}</td>
            <td className="px-6 hidden lg:table-cell py-4">{tip.category}</td>
            <td className="px-6 hidden lg:table-cell py-4">{tip.level}</td>
            <td className="px-6 py-4 hidden lg:table-cell capitalize">
                <span
                    className={`px-2 py-1 rounded text-xs font-medium ${tip.availability === 'public'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                        }`}
                >
                    {tip.availability}
                </span>
            </td>
            <td className="px-6 py-4 flex justify-center gap-3">
                <Link to={`/update/${tip._id}`} className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                    Update
                </Link>
                <Link onClick={() => handleDelete(tip._id)} className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 transition">
                    Delete
                </Link>
            </td>
        </tr>
    );
};

export default TipsTable;