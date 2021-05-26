import React  from 'react'
import {BsArrowRight} from "react-icons/bs";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const GridItem = (data) => {

    return (
        <ScrollAnimation animateIn="fadeIn">
            <Link className='blockItem position-relative' to={{pathname : '/details', data}}>
                <div className='imgItem'>
                    <img src={data.data.urlToImage} alt=""/>
                </div>
                <div className='infoItem Fix p-3'>
                    <h6>Category</h6>
                    <h3>{data.data.title}</h3>
                    <Link to={{pathname : '/details', data}} className='colorDefault'>
                        View Details
                        <BsArrowRight/>
                    </Link>
                </div>
            </Link>
        </ScrollAnimation>
    )
}

export default GridItem
