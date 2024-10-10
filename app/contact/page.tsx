import { Input } from "postcss";

export default function contact(){
    return(
        <div>
            <h1 className="text-4xl flex justify-center mt-4 text-red-500">CONTACT US</h1>
            <form className="border-2 border-black mt-4 mb-12 max-w-lg mx-auto">

                <div className= "mt-8  justify-center flex mx-4">
                <label htmlFor="name:" className="text-2xl font-semibold">name:</label>
                <input type="text" className="border-2 border-yellow-600 mx-2" placeholder="Enter your name" required/></div>

             <div className="mt-4  justify-center flex mx-4">
                <label htmlFor="email:" className="text-2xl font-semibold ">email:</label>
                <input type="email" className="border-2 border-yellow-600 mx-2" placeholder="Enter your email" required/>
                </div>

                <div className="mt-4 justify-center flex mx-4">
                    <label htmlFor="message" className="text-2xl font-serif  pt-4 mx-4 ">message:</label>
                    <textarea name="message" id="message" cols={40} rows={4} placeholder="Enter your message here" required className="border-2 border-yellow-600 mx-2 mb-11"></textarea>
                </div>

               <div className="flex justify-center">
                <button type="submit" className="border-2 border-black  py-2 px-12 font-serif bg-yellow-300 rounded-xl mb-9 hover:bg-yellow-700 hover:text-yellow-50">submit</button>
                </div>
            </form>
        </div>
    ) 
}