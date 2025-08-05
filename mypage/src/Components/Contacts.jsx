import { useState, useRef } from "react"
import myPhoto from "../assets/my-photo2.jpeg";
import emailjs from '@emailjs/browser';

function Contacts(){
    const formRef = useRef();
    const [status, setStatus] = useState(null); // success | error | loading
    const [formData, setFormData]= useState({
        name: "",
        email: "",
        message: "",
    })

    const handleFormData = (e) =>{
        setFormData((prev)=>(
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("loading");

        const botFieldValue = formRef.current["bot-field"].value;
        if (botFieldValue) {
            console.warn("Spam bot rilevato! Form non inviato.");
            return;
        }

        emailjs.sendForm(
            'service_rj7fvwg',
            'template_qb0vkw9',
            formRef.current,
            'ckzP39Ur0qLV_gG-c'
        ).then(
            (result) => {
                console.log(result.text);
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus(null), 5000);
            },
            (error) => {
                console.log(error.text);
                setStatus("error");
                setTimeout(() => setStatus(null), 5000);
            }
        );
    };

    return(
        <div className="flex w-full items-end max-md:items-center py-20" id="Contacts">
            <div className="flex flex-col w-full gap-4">
                <div className="flex w-full justify-center items-center">
                    <p className={`text-[32px] font-semibold font-mono`}>Contact Me</p>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center w-full md:flex-row'>
                    <div className='flex flex-col gap-3 w-[40%] items-center justify-between max-md:w-full max-md:justify-around'>
                         <div className={`flex w-3/4 rounded-full bg-my_gradient_reversed overflow-hidden drop-shadow-md max-md:w-3/5`}>
                            <img className="w-full object-cover grayscale" src={myPhoto} alt="My Photo" />
                        </div>
                        <div className="flex flex-col max-md:justify-center">
                            <div ><i className="bi bi-envelope-fill fs-3 align-middle mr-2"></i>lorenzo.cuccu01@gmail.com</div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[50%] max-md:w-[90%] max-md:items-center'>
                        <div className='font-bold text-xl py-3'>Let's get in touch!</div>
                        <form ref={formRef} onSubmit={sendEmail} className='flex flex-col w-full justify-around'>
                            <input onChange={handleFormData} value={formData.name} className='p-3 mb-3 bg-my_gray placeholder:text-my_bg_reversed placeholder:opacity-80 rounded-md' type="text" name="name" placeholder='Your Name'/>
                            <input onChange={handleFormData} value={formData.email} className='p-3 mb-3 bg-my_gray placeholder:text-my_bg_reversed placeholder:opacity-80 rounded-md' type="email" name="email" placeholder='Your Email'/>
                            <textarea onChange={handleFormData} value={formData.message} className='p-3 mb-3 bg-my_gray placeholder:text-my_bg_reversed placeholder:opacity-80 rounded-md resize-none overflow-auto' name="message" rows="8" cols="5" placeholder='Message'></textarea>
                            <input type="text" name="bot-field" className="hidden" autoComplete="off" tabIndex="-1" />
                            <button type="submit" className='flex p-2 mb-3 border-2 justify-center border-my_bg_reversed text-my_bg_reversed rounded-md font-bold w-60 hover:bg-my_bg_reversed hover:text-my_bg transition-all duration-300 cursor-pointer'>
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </button>
                            {status === "success" && <p className='text-green-600 mt-2'>Messaggio inviato con successo!</p>}
                            {status === "error" && <p className='text-red-600 mt-2'>Errore durante l'invio. Riprova.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Contacts}