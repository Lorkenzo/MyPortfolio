import { useState, useRef, useEffect } from "react"
import myPhoto from "../assets/my-photo.jpeg";
import emailjs from '@emailjs/browser';

function Contacts({refprop}){
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
        <div className="flex w-full h-screen items-end max-md:items-start max-md:h-fit" ref={refprop}id="contacts">
            <div className="flex flex-col w-full h-[calc(100%-64px)] max-md:h-[calc(120%-128px)]">
                <div className="w-full h-16 md:hidden"></div>
                <div className="flex w-full h-[10%] justify-center items-center">
                    <p className={`text-[32px] font-semibold font-mono`}>Contact Me</p>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center w-full h-[85%] md:flex-row max-md:h-[80%]'>
                    <div className='flex flex-col gap-3 h-full w-[40%] p-2 items-center justify-center max-md:h-1/4 max-md:w-full max-md:justify-around max-md:flex-row'>
                         <div className={`h-1/2 rounded-full bg-my_gradient_reversed overflow-hidden drop-shadow-md max-md:h-full`}>
                            <img className="h-full w-full object-contain grayscale" src={myPhoto} alt="My Photo" />
                        </div>
                        <div className="flex flex-col h-fit w-1/2 max-md:h-full max-md:justify-center">
                            <div ><i className="bi bi-envelope-fill fs-3 align-middle mr-2"></i>lorenzo.cuccu01@gmail.com</div>
                            <div><i className="bi bi-telegram fs-3 align-middle mr-2"></i>LorKenzo</div>
                            <div><i className="bi bi-instagram fs-3 align-middle mr-2"></i>lorenzo.qq_</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-[50%] h-full max-md:w-[90%] max-md:items-center'>
                        <div className='font-bold text-xl'>Let's get in touch!</div>
                        <form ref={formRef} onSubmit={sendEmail} className='flex flex-col w-full h-[90%] justify-around'>
                            <input onChange={handleFormData} value={formData.name} className='p-3 bg-my_gray placeholder:text-[rgba(0,0,0,0.6)] rounded-md' type="text" name="name" placeholder='Your Name'/>
                            <input onChange={handleFormData} value={formData.email} className='p-3 bg-my_gray placeholder:text-[rgba(0,0,0,0.6)] rounded-md' type="email" name="email" placeholder='Your Email'/>
                            <textarea onChange={handleFormData} value={formData.message} className='p-3 bg-my_gray placeholder:text-[rgba(0,0,0,0.6)] rounded-md resize-none overflow-auto' name="message" rows="8" cols="5" placeholder='Message'></textarea>
                            <input type="text" name="bot-field" className="hidden" autoComplete="off" tabIndex="-1" />
                            <button type="submit" className='flex p-2 border-2 justify-center border-black text-black rounded-md font-bold w-60 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </button>
                            {status === "success" && <p className='text-green-600 mt-2'>Messaggio inviato con successo!</p>}
                            {status === "error" && <p className='text-red-600 mt-2'>Errore durante l'invio. Riprova.</p>}
                        </form>
                    </div>
                    <div className="w-full h-16 md:hidden"></div>

                </div>
            </div>
        </div>
    )
}

export {Contacts}