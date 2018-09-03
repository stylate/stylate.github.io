import React from 'react'
import Link from 'gatsby-link'
import LazyLoad from 'react-lazyload'

import m1 from '../content/photo/green/1.jpg'
import m2 from '../content/photo/green/2.jpg'
import m3 from '../content/photo/green/3.jpg'
import m4 from '../content/photo/green/4.jpg'
import m5 from '../content/photo/green/5.jpg'
import m6 from '../content/photo/green/6.jpg'
import m7 from '../content/photo/green/7.jpg'
import m8 from '../content/photo/green/8.jpg'
import m9 from '../content/photo/green/9.jpg'
import m10 from '../content/photo/green/10.jpg'
import m11 from '../content/photo/green/11.jpg'
import m12 from '../content/photo/green/12.jpg'
import m13 from '../content/photo/green/13.jpg'



export default class Green extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="wrapper-img">
                <LazyLoad height={200}><img src={m1} alt={"m1"}/></LazyLoad>
                <LazyLoad height={200}><img src={m2} alt={"m2"}/></LazyLoad>
                <LazyLoad height={200}><img src={m3} alt={"m3"}/></LazyLoad>
                <LazyLoad height={200}><img src={m4} alt={"m4"}/></LazyLoad>
                <LazyLoad height={200}><img src={m5} alt={"m5"}/></LazyLoad>
                <LazyLoad height={200}><img src={m6} alt={"m6"}/></LazyLoad>
                <LazyLoad height={200}><img src={m7} alt={"m7"}/></LazyLoad>
                <LazyLoad height={200}><img src={m8} alt={"m8"}/></LazyLoad>
                <LazyLoad height={200}><img src={m9} alt={"m9"}/></LazyLoad>
                <LazyLoad height={200}><img src={m10} alt={"m10"}/></LazyLoad>
                <LazyLoad height={200}><img src={m11} alt={"m11"}/></LazyLoad>
                <LazyLoad height={200}><img src={m12} alt={"m12"}/></LazyLoad>
                <LazyLoad height={200}><img src={m13} alt={"m13"}/></LazyLoad>
                </div>
            </div>
        );
    }
}


