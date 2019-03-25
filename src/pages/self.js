import React from 'react'
import Sidebar from '../layouts/sidebar'

import intro from '../content/photo/self/intro.jpg'
import m1 from '../content/photo/self/1.jpg'
import train from '../content/photo/self/train.jpg'
import m2 from '../content/photo/self/2.jpg'
import m3 from '../content/photo/self/3.jpg'
import m4 from '../content/photo/self/4.jpg'
import m5 from '../content/photo/self/5.jpg'
import traffic from '../content/photo/self/traffic.jpg'
import m6 from '../content/photo/self/6.jpg'
import m7 from '../content/photo/self/7.jpg'
import m8 from '../content/photo/self/8.jpg'
import m9 from '../content/photo/self/9.jpg'
import m10 from '../content/photo/self/10.jpg'
import m11 from '../content/photo/self/11.jpg'
import m12 from '../content/photo/self/12.jpg'
import m13 from '../content/photo/self/13.jpg'
import m14 from '../content/photo/self/14.jpg'
import m15 from '../content/photo/self/15.jpg'
import m16 from '../content/photo/self/16.jpg'
import outro from '../content/photo/self/outro.jpg'


export default class Green extends React.Component {
    render() {
        return (
            <div className="container">
                <Sidebar/>
                <div className="wrapper-img">
                    <img src={intro} alt={"intro"}/>
                    <img src={m1} alt={"m1"}/>
                    <img src={m2} alt={"m2"}/>
                    <img src={m3} alt={"m3"}/>
                    <img src={train} alt={"train"}/>
                    <img src={m4} alt={"m4"}/>
                    <img src={m5} alt={"m5"}/>
                    <img src={traffic} alt={"traffic"}/>
                    <img src={m6} alt={"m6"}/>
                    <img src={m7} alt={"m7"}/>
                    <img src={m8} alt={"m8"}/>
                    <img src={m9} alt={"m9"}/>
                    <img src={m10} alt={"m10"}/>
                    <img src={m11} alt={"m11"}/>
                    <img src={m12} alt={"m12"}/>
                    <img src={m13} alt={"m13"}/>
                    <img src={m14} alt={"m14"}/>
                    <img src={m15} alt={"m15"}/>
                    <img src={m16} alt={"m16"}/>
                    <img src={outro} alt={"outro"}/>
                </div>
            </div>
        );
    }
}


