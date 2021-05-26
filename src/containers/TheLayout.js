import React, {useState} from 'react'
import {
  TheContent,
  TheFooter,
  TheHeader,
  TheSideBar
} from './index'

const TheLayout = () => {

    const [valBar, setValBar]             = useState(false);

    return (
        <div className="c-app c-default-layout">
          <TheSideBar data={valBar}/>
          <div className="c-wrapper">
            <TheHeader setToggle={(val)=> {
                setValBar(val)
            }}/>
            <div className="c-body">
              <TheContent/>
            </div>
            <TheFooter/>
          </div>
        </div>
    )
}

export default TheLayout
