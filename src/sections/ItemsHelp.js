import React from "react";
import { FiPlus } from "react-icons/fi";

import img1 from '../assets/icons/time.png';
import img2 from '../assets/icons/pin.png';
import img3 from '../assets/icons/face.png';
import img4 from '../assets/icons/hand.png';
import img5 from '../assets/icons/info.png';
import img6 from '../assets/icons/phone.png';
import img7 from '../assets/icons/show.png';

const ItemsHelp = () => {

    const allItems         = [
        {
            "icon" : img1,
            "name" : 'Give Time',
        },
        {
            "icon" : img2,
            "name" : 'Find place',
        },
        {
            "icon" : img3,
            "name" : 'Tofoula',
        },
        {
            "icon" : img4,
            "name" : 'Zakat',
        },
        {
            "icon" : img5,
            "name" : 'Omniyat',
        },
        {
            "icon" : img6,
            "name" : 'Fundraising',
        },
        {
            "icon" : img7,
            "name" : 'A’awen',
        },
    ]

    return (
        <>
            {
                allItems.map((item, i) =>
                    <div key={i.toString()} className='boxItem flex25 p-2'>
                        <div className='upItem'>
                            <div className='subItem w-100 flex alignCenter contentCenter flexColumn p-2'>
                                <img src={item.icon} alt=""/>
                                <h6 className='colorWhite m-0 mt-3 mb-3'>{item.name}</h6>
                                <h6 className='colorWhite m-0'><FiPlus/></h6>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ItemsHelp;
