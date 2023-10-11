import React from "react";

function Input() {
    return (
        <div className="input h-16 bg-blue-300 p-4 flex items-center justify-between">
            <input className='w-full text-lg border-none outline-none text-blue-900' type="text" placeholder="Type Some Thing.." />
            <div className="send flex items-center gap-2">
                <img className="w-10 h-7 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C75E2Wc6fpsnwQVGFJv3wmIblfjrrm3Y99IunU2_tZCi9hccfuGEYGWNdDNFwls9b5c&usqp=CAU" alt="" />
                <input type="file" style={{display:"none"}} id='file' />
                <label htmlFor="='file">
                    <img className="w-10 h-7 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7Nq5EYnvJ-tI-nOthotkhSjJBz7DUvoO-5fqbpi0nRkQZfXXX88ATDarddtwIwsQFq0&usqp=CAU" alt="" />
                </label>
                <button className="bg-black-500 text-white bg-black rounded font-bold cursor-pointer px-4 py-2">Send</button>
            </div>
            </div>

    )
    }
export default Input 