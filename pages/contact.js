import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contact = () => {
    const [hover, setHover] = useState(false);
    const [email, setEmail] = useState('');

    const showToast = () => {
        toast.success("Thanks for contacting us🤝!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <div className='w-full mx-auto'>
            <ToastContainer />
            <div className="md:px-0 mt-10 mb-10 mx-10">
                <div className='h-[200px] w-[100%] my-auto mx-auto lg:border lg:w-[80%] border-black-500 md:border border-black-500 md:w-[80%] px-14 py-4'>
                    <div className="text-[20px] md:text-[14px] mb-10 font-semibold leading-tight">
                        Contact Us
                    </div>
                    <div className="text-md md:text-xl">
                        <div class="relative h-11 w-full mt-[20px]">
                            <div class="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray">
                                <BsSend className={email !== '' ? 'cursor-pointer  text-green-500' : 'pointer-events-none text-red-500'} onClick={showToast} />
                            </div>
                            <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                type='email'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] sm:text-[7px] font-normal leading-tight text-blue-gray transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray">
                                Your Email Here!
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact;
