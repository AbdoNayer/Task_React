import React from 'react'
import API from "../newsapi.json";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const TheLayout = (data) => {

    const allLinks              = API.LinksSite
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
        <div className={data.data ? 'sideBar bgDefault fadeX' : 'sideBar bgDefault'}>
            {
                allLinks.map((up, i) =>
                    <div key={i.toString()} className='secLink mt-2 mb-2'>
                        <h5 className={up.name !== 'Home' ? 'mt-3 mb-3 colorWhite font-weight-bold' : 'mt-3 mb-3 colorMain font-weight-bold'}>
                            { up.name }
                        </h5>
                        {
                            up.subLink ?
                                up.subLink.map((sub, i) =>
                                    <a key={i.toString()} href={'/'} className='w-100 mt-2 mb-2 d-block' style={{ color : 'rgba(225,225,225,0.9)' }}>
                                        - {sub.name}
                                    </a>
                                )
                                :
                                null
                        }
                    </div>
                )
            }
            <ul className='flex social socialBar flexColumn'>
                {
                    social.map((it, i) =>
                        <li key={i.toString()} className='m-1'>
                            <a rel='noreferrer' href={it.link} target='_blank' className={it.class}>
                                {it.icon}
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TheLayout
