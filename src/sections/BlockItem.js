import React  from "react";
import { Col } from 'react-bootstrap';
import { FiHeart, FiShare2, FiCalendar } from "react-icons/fi";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const BlockItem = (data) => {

    return (
        <>
            <Col md="4" xs='12'>
                <ScrollAnimation animateIn="fadeIn">
                    <Link className='blockItem' to={{pathname : '/details', data}}>
                        <div className='imgItem'>
                            <img src={data.data.urlToImage} alt=""/>
                        </div>
                        <div className='infoItem p-3'>
                            <div className='flex alignEnd'>
                                <FiHeart size={22} className='colorMain mr-2 ml-2'/>
                                <FiShare2 size={22} className='colorMain mr-2 ml-2'/>
                            </div>
                            <h3>{data.data.title}</h3>
                            <span className='sNew colorInfo'>News</span>
                            <p>{data.data.content}</p>
                            <div className='colorInfo'>
                                <FiCalendar className='colorMain'/>
                                <span className='mr-2 ml-2'>
                                    {
                                        parseInt(data.data.publishedAt.split('-')[0])
                                    }
                                    -
                                    {
                                        parseInt(data.data.publishedAt.split('-')[1])
                                    }
                                    -
                                    {
                                        parseInt(data.data.publishedAt.split('-')[2])
                                    }
                                </span>
                            </div>
                        </div>
                    </Link>
                </ScrollAnimation>
            </Col>
        </>
    );
};

export default BlockItem;
