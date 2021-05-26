import React  from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import imgOne from '../assets/imgs/slider.png';
import imgTwo from '../assets/imgs/footer.png';

const Slider = () => {

    const options            = {
            loop                : true,
            margin              : 10,
            center              : true,
            autoplay            : true,
            autoplayTimeout     : 6000,
            smartSpeed          : 3000,
            dragEndSpeed        : 3000,
            pagination          : false,
            nav                 : true,
            navText:[
                "<div class='navBtn prevSlide'></div>",
                "<div class='navBtn nextSlide'></div>"
            ],
            responsive          : {
                0       : {
                    items   : 1,
                },
                600     : {
                    items   : 1,
                },
                1000    : {
                    items   : 1,
                },
            },
        }
    const sliders            = [
        {
            url : imgOne
        },
        {
            url : imgTwo
        }
    ]

    return (
        <>
            <OwlCarousel className="owl-theme"{...options}>
                {sliders.map((slide, i) =>
                    <div key={i.toString()} className="item position-relative">
                        <img alt={''} className='imgSlider' src={slide.url}/>
                        <div className='infoSection'>
                            <div className=' text-center'>
                                <h1 className='colorWhite'>Al Foundation</h1>
                                <h6 className='colorWhite mt-4 mb-4' style={{lineHeight : '30px'}}>
                                    is focused on inspiring the next generation of  kids
                                    <br />
                                    Healthcare professionals.
                                </h6>
                                <a href={'/'} className='btnButton btnDefault pt-2 pb-2 pr-3 pl-3'>Donate Now</a>
                            </div>
                        </div>
                    </div>
                )}
            </OwlCarousel>
        </>
    )
}

export default Slider
