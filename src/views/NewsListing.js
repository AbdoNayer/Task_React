import React  from 'react'
import {Container, Row} from "react-bootstrap";
import API from "../newsapi.json";
import BreadCrumb from '../sections/BreadCrumb'
import BlockItem from "../sections/BlockItem";
import FilterItem from "../sections/FilterItem";

const NewsListing = () => {

    const allNews            = API.articles

    return (
        <div style={{ minHeight : 400, backgroundColor : '#EFEFEF', padding : '30px 0' }}>

            <Container className='overflow-hidden'>

                <BreadCrumb data={'News'}/>

                <h2 className='mt-4 mb-4'>News</h2>

                <FilterItem/>

                <div className='mb-5'>
                    <Row>
                        {
                            allNews.map((news, i) =>
                                <BlockItem key={i.toString()} data={news}/>
                            )
                        }
                    </Row>
                </div>
            </Container>

        </div>
    )
}

export default NewsListing
