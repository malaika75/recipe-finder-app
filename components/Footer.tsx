import React from "react";

function footer(){
    return(
        <div className=" bg-yellow-200 sm:bg-yellow-300 min-w-full sm:h-80 h-96 border-t-2 border-gray-500">
            <ul className="text-red-950 text-bold text-3xl px-20 my-12 text-center">
                <li className="my-2 hover:underline cursor-pointer">privacy policy</li>
                <li className="my-2 hover:underline cursor-pointer">terms & conditions</li>
                <li className="my-2 hover:underline cursor-pointer">contact-us</li>
            </ul>
            <div className="flex justify-center gap-4 text-3xl hover:text-5xl cursor-pointer">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-square-twitter"></i>
            </div>
                <p className="text-center text-red-950 my-5">&copy; {new Date().getFullYear()} Recipe Haven. All rights reserved.</p>
            </div>
            
    )
}

export default footer