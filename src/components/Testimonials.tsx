import { testimonialData } from "../data/testimonialsData";
import { TestimonialsCard } from "../ui/TestimonialsCard";
import type { Testimonial } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Testimonials() {

    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        setTestimonials(testimonialData);
    }, []);

    return (
        <div className="mt-20 mb-10 w-full flex justify-center items-center">
            <div className="w-full max-w-[1200px]">
                <Button text="Depoimentos"/>
                <h3 className="mb-10 font-bold text-[24px] text-[#1C1C1E]">O que nossos clientes falam sobre nós: </h3>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="testimonials-swiper [--swiper-pagination-color:#006677] [--swiper-pagination-bullet-inactive-color:#9ca3af] [--swiper-pagination-bullet-inactive-opacity:1]"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex justify-center items-center w-auto"
                        >
                            <div className="flex items-center justify-center">
                                <TestimonialsCard
                                    text={testimonial.text}
                                    picture={testimonial.picture}
                                    client={testimonial.client}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
