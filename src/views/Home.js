import React  from 'react'
import {Container, Row} from "react-bootstrap";
import SectionSlider from '../sections/Slider'
import BlockItem from '../sections/BlockItem'
import Help from '../sections/Help'
import { FiArrowRight } from "react-icons/fi";
import API from "../newsapi.json";
import { Link } from 'react-router-dom';

const Home = () => {

    const allNews            = API.articles

    return (
        <div>
            <SectionSlider/>
            <div className='allItems'>
                <Container className='overflow-hidden'>
                    <div className='breadCrumb flex alignCenter contentSpace mt-3 mb-4'>
                        <h2>Latest News</h2>
                        <Link className='colorMain' to="/news">
                            View All
                            <FiArrowRight className='colorMain mr-2 ml-2'/>
                        </Link>
                    </div>
                    <div className='mb-5'>
                        <Row>
                            {
                                allNews.slice(0, 6).map((news, i) =>
                                    <BlockItem key={i.toString()} data={news}/>
                                )
                            }
                        </Row>
                    </div>
                </Container>
            </div>
            <Help/>
        </div>
    )
}

export default Home
