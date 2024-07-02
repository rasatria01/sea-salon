'use client'
import { useState } from "react";
import Star from "./star";

export default function ReviewForm({review,setReview}) {
    const [hover, setHover] = useState(null)
    const [rating, setRating] = useState(null)
    const [data,setData] = useState({user:"",msg:"",rating:0})
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setReview([...review, data]);
    }
    return <form onSubmit={handleSubmit} className="bg-[#f43e43] py-6 px-4 rounded-md">
        <h6 className="text-center pb-4 font-semibold text-lg">Form Review</h6>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="user" className="block mb-2 text-sm font-medium">Name</label>
                <input type="text" id="user" className="bg-[#454545] border border-gray-600  text-sm rounded-lg focus:ring-[#f43e43] focus:border-[#f43e43] block w-full p-2.5 " onChange={handleChange} placeholder="Username" name="user" value={data.user} required />
            </div>
            <div className="inline-flex text-3xl text-end">
                <label htmlFor="rating" className="block mb-2 text-sm font-medium">Rating</label>

                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;

                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                className="appearance-none"
                                name="rating"
                                value={currentRating}
                                onChange={() => {
                                    setRating(currentRating);
                                    setData((prevFormData) => ({ ...prevFormData, "rating": currentRating }));
                                }}
                            />
                            <span
                                className="star"

                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            >
                                <Star color={(currentRating <= (hover || rating) ? "text-yellow-300" : "")} />
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
        <div>

            <label htmlFor="msg" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comments</label>
            <textarea id="msg" name="msg" value={data.msg} onChange={handleChange} rows="4" className="block p-2.5 w-full text-sm  bg-[#454545] rounded-lg border border-gray-600  placeholder-gray-400 " placeholder="Write your thoughts here..."></textarea>
        </div>
        <div className="pt-4 flex justify-end px-8">
            <button type="submit" className="bg-white py-2 px-4 text-[#f43e43] rounded-md hover:bg-[#C8C8C8] hover:text-[#f43e43] border-none">Submit</button>
        </div>
    </form>
}