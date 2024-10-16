import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

const links = [
    "https://teenhacks-media.s3.us-east-2.amazonaws.com/public/img/f19/f19(3).JPG",
    "https://teenhacks-media.s3.us-east-2.amazonaws.com/public/img/f19/f19(4).JPG",
    "https://teenhacks-media.s3.us-east-2.amazonaws.com/public/img/f19/f19(1).JPG",
    "https://teenhacks-media.s3.us-east-2.amazonaws.com/public/img/f19/f19(5).JPG",
];

export default function ImageCarousel() {
    return (
        <div className="w-full overflow-hidden rounded-3xl h-[60vh] flex space-x-4 justify-center mt-14">
            <Swiper
                slidesPerView={2}
                spaceBetween={16}
                className="w-full h-full"
                autoplay={{
                    delay: 4500,
                    pauseOnMouseEnter: true,
                }}
                modules={[Pagination, Autoplay]}
            >
                {links.map((link) => {
                    return (
                        <SwiperSlide className="flex justify-center">
                            <img src={link} className="h-full relative rounded-3xl" loading="lazy" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
