import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import { FiBell, FiSearch, FiSettings } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import Bar from '../assets/icons/Menu.png';
import Logo from '../assets/imgs/logo.png';

import { Link } from 'react-router-dom';


const TheHeader = ({setToggle}) => {

    const [fixed, setFixed]                     = useState(false);
    const [toggleBar, setToggleBar]             = useState(false);

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            setFixed(true)
            setToggle(false)
        }else {
            setFixed(false)
        }
    });

    function onToggle(val){
        setToggleBar(val);
        setToggle(val)
    }

  return (
    <>
      <header className={ fixed ? 'headFix bgDefault p-3' : 'bgDefault p-3' }>
          <Container>
              <Row className="alignCenter">
                  <Col md="6" xs='12'>
                      <div className='sideLeft flex alignCenter'>
                          {
                              toggleBar ?
                                  <MdClose size={25} color={'#FFF'} onClick={() => onToggle(false)}/>
                                  :
                                  <img src={Bar} alt="" className='icon' onClick={() => onToggle(true)}/>
                          }
                          <Link to="/home">
                              <img src={Logo} alt="" className='mr-5 ml-5' style={{ maxWidth : 55 }}/>
                          </Link>
                      </div>
                  </Col>
                  <Col md="6" xs='12'>
                      <div className='sideRight flex alignEnd'>
                          <ul className='flex alignCenter m-0'>
                              <li className='mr-3 ml-3'>
                                  <a href={'/'} className='colorWhite'>
                                      <FiSearch size={22}/>
                                  </a>
                              </li>
                              <li className='mr-3 ml-3'>
                                  <a href={'/'} className='colorWhite position-relative'>
                                      <FiBell size={22}/>
                                      <span className='pCircle'/>
                                  </a>
                              </li>
                              <li className='mr-3 ml-3'>
                                  <a href={'/'}>
                                      <img src={'https://blog.hubspot.com/hubfs/How%20to%20Edit%20%26%20Customize%20User%20Roles%20in%20WordPress.jpeg'} className='imgUser' alt=""/>
                                      <span className='colorWhite mr-2 ml-2 userName'>User Name</span>
                                  </a>
                              </li>
                              <li className='mr-3 ml-3'>
                                  <a href={'/'} className='colorWhite'>
                                      <FiSettings size={22}/>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </Col>
              </Row>
          </Container>
      </header>
    </>
  );
};

export default TheHeader;
