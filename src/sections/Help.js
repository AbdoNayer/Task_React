import React  from "react";
import { Container, } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import ItemsHelp from "./ItemsHelp";

const Help = () => {

    return (
        <>
            <div className='sectionHelp flex alignCenter contentCenter pt-5'>
                <div className='OverLay'/>
                <div className='boxContentHelp position-relative overflow-hidden' style={{ zIndex : 999 }}>
                    <Container>
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className='infoHelp text-center mt-4 mb-4'>
                                <h1 className='colorWhite'>How we have helped</h1>
                                <p className='colorWhite'>See how Al Foundation have promoted change locally and to the world</p>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className='flex alignCenter contentCenter flexWrap mt-5 mb-5 pt-5 pb-5'>
                                <ItemsHelp />
                            </div>
                        </ScrollAnimation>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Help;
