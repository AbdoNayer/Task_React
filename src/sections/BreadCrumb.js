import React from 'react'
import {Link} from "react-router-dom";

const BreadCrumb = (data) => {

    return (
        <>
            <div className='flex alignCenter breadCrumb'>
                <Link className='colorMain font-weight-bold position-relative' to={'/home'}>
                    Home
                </Link>
                <Link className='mr-5 ml-5 font-weight-bold position-relative'>
                    {data.data}
                </Link>
            </div>
        </>
    )
}

export default BreadCrumb
