import React  from 'react'
import {Col, Form, Row} from "react-bootstrap";
import { IoFilter, IoSearchOutline } from "react-icons/io5";

const FilterItem = () => {

    return (
        <div className='mt-3 mb-4'>
            <Row className='alignCenter'>
                <Col md={2} xs={12}>
                    <label className='w-100 d-block'>Form</label>
                    <input type="date" className='bgWhite pl-2 pr-2' style={{ fontSize : 11 }}/>
                </Col>
                <Col md={2} xs={12}>
                    <label className='w-100 d-block'>To</label>
                    <input type="date" className='bgWhite pl-2 pr-2' style={{ fontSize : 11 }}/>
                </Col>
                <Col md={2} xs={12}>
                    <label className='w-100 d-block'>Category</label>
                    <select style={{ fontSize : 11 }}>
                        <option value="" disabled selected>Select</option>
                    </select>
                </Col>
                <Col md={4} xs={12}>
                    <Form className='formSub w-100'>
                        <label>Search Services</label>
                        <div className='position-relative'>
                            <input placeholder='Search Services' className='bgWhite pl-2 pr-2' style={{ fontSize : 11 }}/>
                            <button className='btnButton btnDefault' style={{ top: 0, width: 60, height: '100%' }}>
                                <IoSearchOutline size={20}/>
                            </button>
                        </div>
                    </Form>
                </Col>
                <Col md={2} xs={12}>
                    <a href={'/'} className='colorMain flex contentCenter mt-4'>
                        Sort By
                        <IoFilter className='mr-2 ml-2 mt-1'/>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default FilterItem
