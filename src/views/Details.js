import React  from 'react'
import {Container, Row, Col} from "react-bootstrap";
import {FiArrowRight, FiHeart, FiShare2} from "react-icons/fi";
import GridItem from "../sections/GridItem";
import API from "../newsapi.json";
import BreadCrumb from "../sections/BreadCrumb";
import {Link} from "react-router-dom";

const Details = (data) => {

    const desNew                = data.location.data.data
    const allNews               = API.articles

    return (
        <div style={{ minHeight : 400, backgroundColor : '#EFEFEF', padding : 30 }}>
            <Container>

                <BreadCrumb data={desNew.title}/>

                <h2 className='mt-4 mb-4'>News Details</h2>
                <div className='bgWhite mt-4 mb-4'>
                    <img src={desNew.urlToImage} className='imgDes'  alt=""/>
                    <div className='p-3'>
                        <h6>Category</h6>
                        <div className='flex contentSpace'>
                            <h4>{desNew.title}</h4>
                            <div className='flex alignEnd'>
                                <FiHeart size={22} className='colorMain mr-2 ml-2'/>
                                <FiShare2 size={22} className='colorMain mr-2 ml-2'/>
                            </div>
                        </div>
                        <p>{desNew.description}</p>
                    </div>
                </div>

                <div className='mb-2'>
                    <h2 className='mt-4 mb-4'>Related Topics</h2>
                    <Row>
                        {
                            allNews.slice(0, 3).map((news, i) =>
                                <Col key={i.toString()} md={4} xs={12}>
                                    <GridItem data={news}/>
                                </Col>
                            )
                        }
                    </Row>
                    <Link className='colorMain flex alignEnd mt-2' to="/news">
                        View All
                        <FiArrowRight className='colorMain mr-2 ml-2 mt-1'/>
                    </Link>
                </div>

            </Container>
        </div>
    )
}

export default Details
