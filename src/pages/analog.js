import React from 'react'
import Link from 'gatsby-link'
import LazyLoad from 'react-lazyload'

import m1 from './photo/analog/1.jpg'
import m2 from './photo/analog/2.jpg'
import m3 from './photo/analog/3.jpg'
import m4 from './photo/analog/4.jpg'
import m5 from './photo/analog/5.jpg'
import m6 from './photo/analog/6.jpg'
import m7 from './photo/analog/7.jpg'
import m8 from './photo/analog/8.jpg'
import m9 from './photo/analog/9.jpg'
import m10 from './photo/analog/10.jpg'
import m11 from './photo/analog/11.jpg'

export default class People extends React.Component {
    render() {
        return (
            <div className="wrapper">
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
            </div>
        );
    }
}


