import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import { Navigation, Pagination } from 'swiper/modules';

function Contacts({refprop}){
    return(
        <div className="flex w-full h-screen items-end" ref={refprop}>
            <div className="flex flex-col w-full h-[calc(100%-64px)]">
            </div>
        </div>
    )
}

export {Contacts}