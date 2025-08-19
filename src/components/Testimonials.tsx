import React, { useEffect, useState } from "react";
import { testimonialData } from "../data/testimonialsData";
import { TestimonialsCard } from "../ui/TestimonialsCard";
import type { Testimonial } from "../interfaces/interfaces";
import { Button } from "../ui/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        setTestimonials(testimonialData);
    }, []);

    return (
        <div className="mt-15 mb-10 w-full flex justify-center items-center">
            <div className="w-full max-w-[1200px]">
                <div className="mb-10 w-[900px]">
                    <Button text="Depoimentos" />
                    <h3 className="mb-2 font-bold text-[24px]">
                        Experiências que inspiram e fortalecem nossa jornada:
                    </h3>
                    <span className="text-[17px] text-left">
                        A satisfação de nossos clientes é a nossa maior conquista. Cada depoimento reflete não apenas os resultados alcançados, mas também a confiança construída ao longo das parcerias. É através dessas histórias que reafirmamos nosso compromisso com qualidade e dedicação.
                    </span>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop
                    speed={2000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="testimonials-swiper [--swiper-pagination-color:#4f9e22] [--swiper-pagination-bullet-inactive-color:#9ca3af] [--swiper-pagination-bullet-inactive-opacity:1]
                    dark:[--swiper-pagination-color:#4f9e22] dark:[--swiper-pagination-bullet-inactive-color:#fff]"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center w-auto">
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
};

export default Testimonials;
