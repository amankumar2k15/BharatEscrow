import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const ContactForm = () => {
    const navigate = useNavigate()
    const [contactData, setContactData] = useState({
        Email: null, Phone: null, Name: null, Message: null
    })

    const handleSubmitToSpreadSheet = (e) => {
        e.preventDefault()
        const formData = new FormData();
        Object.keys(contactData).forEach((item) => {
            formData.append(item, contactData[item])
        })
        try {
            const header = {
                method: 'POST',
                mode: 'no-cors', // Set mode to 'no-cors',
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                body: formData,
            }
            fetch(`https://sheet.best/api/sheets/471a8c9b-3456-48ce-9337-ffb79ec05e3b`, header).then((res) => {
                navigate('/')
            }).catch((err) => console.log("err====>", err))
        } catch (err) {
            console.log("error while form submission ", err);
        }

    }


    // action='https://formspree.io/f/myyqnjdz'

    return (
        <>
            <form method='POST' onSubmit={handleSubmitToSpreadSheet}>
                <div className="relative z-0 w-full mb-6 group">
                    <div>

                    </div>

                    <input
                        type="email"
                        name="Email :-"
                        id="floating_email"
                        onChange={(e) => setContactData((p) => ({ ...p, Email: e.target.value }))}
                        className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        required
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>


                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="Your Name :-"
                            id="floating_first_name"
                            onChange={(e) => setContactData((p) => ({ ...p, Name: e.target.value }))}
                            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Your Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="number"
                            name="Phone Number :-"
                            onChange={(e) => setContactData((p) => ({ ...p, Phone: e.target.value }))}
                            id="floating_phone"
                            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            required
                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phone number
                        </label>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea
                            type="text"
                            name="Textarea"
                            onChange={(e) => setContactData((p) => ({ ...p, Message: e.target.value }))}
                            id="Textarea"
                            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="Textarea"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Message
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center yellow dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>

        </>
    )
}

export default ContactForm