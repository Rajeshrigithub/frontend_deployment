import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const HomeSlider = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Check if the performance object is available before using it
        if (typeof performance !== 'undefined') {
            // Your code that uses the performance object
            const timing = performance.now();
            console.log(`Performance timing: ${timing}ms`);
        }
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const banners = [
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1699437370622_tiger3webenglish.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg'
        }
    ];

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <Image src={banner.imgUrl} alt="" width={width} height={height / 2} style={{ objectFit: "cover" }} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HomeSlider;
