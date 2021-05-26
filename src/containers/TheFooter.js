import React from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import API from "../newsapi.json";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const TheFooter = () => {

    const allLink               = API.LinksFooter
    const social                = [
        {
            "link" : "https://www.facebook.com/",
            "icon" : <FaFacebookF/>,
            "class" : 'facebook',
        },
        {
            "link" : "https://twitter.com/home",
            "icon" : <FaTwitter/>,
            "class" : 'twitter',
        },
        {
            "link" : "https://www.linkedin.com/",
            "icon" : <FaLinkedin/>,
            "class" : 'linkedin',
        },
        {
            "link" : "https://www.youtube.com/?gl=EG",
            "icon" : <FaYoutube/>,
            "class" : 'youtube',
        },
        {
            "link" : "https://www.instagram.com/",
            "icon" : <FaInstagram/>,
            "class" : 'instagram',
        },
    ]

  return (
    <>
        <footer className='footer pt-3 pb-3'>
            <Container>
                <Row>
                    <Col md={5} xs={12}>
                        <ul className='flex flexWrap'>
                            {
                                allLink.map((link, i) =>
                                    <li key={i.toString()} className='flex50 mt-2 mb-2'>
                                        <a href={'/'} className='colorInfo'>
                                            {link.name}
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </Col>
                    <Col md={4} xs={12}>
                        <Form className='formSub'>
                            <Form.Group>
                                <Form.Label>Subscribe to Newsletter</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Button type="submit" className='btnButton btnDefault'>
                                Subscribe
                            </Button>
                        </Form>
                    </Col>
                    <Col md={3} xs={12}>
                        <div className=''>
                            <Form.Label className=''>Follow us on</Form.Label>
                            <ul className='flex social'>
                                {
                                    social.map((it, i) =>
                                        <li key={i.toString()} className='mr-2 ml-2'>
                                            <a rel='noreferrer' href={it.link} target='_blank' className={it.class}>
                                                {it.icon}
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        <div className='endFooter p-2 bgDefault text-center'>
            <p className='m-0 colorWhite'>All rights reserved - Link Development Company © 2020</p>
        </div>
    </>
  )
}

export default TheFooter
