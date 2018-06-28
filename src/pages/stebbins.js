import React from 'react'
import Link from 'gatsby-link'
import LazyLoad from 'react-lazyload'

import s1 from './photo/stebbins/1.jpg'
import s2 from './photo/stebbins/2.jpg'
import s3 from './photo/stebbins/3.jpg'
import s4 from './photo/stebbins/4.jpg'
import s5 from './photo/stebbins/5.jpg'
import s6 from './photo/stebbins/6.jpg'
import s7 from './photo/stebbins/7.jpg'
import s8 from './photo/stebbins/8.jpg'

export default class Stebbins extends React.Component {
    render() {
        return (
            <div className="wrapper-img">
                <LazyLoad height={200}><img src={s1} alt={"s1"}/></LazyLoad>
                <LazyLoad height={200}><img src={s2} alt={"s2"}/></LazyLoad>
                <LazyLoad height={200}><img src={s3} alt={"s3"}/></LazyLoad>
                <LazyLoad height={200}><img src={s4} alt={"s4"}/></LazyLoad>
                <LazyLoad height={200}><img src={s5} alt={"s5"}/></LazyLoad>
                <LazyLoad height={200}><img src={s6} alt={"s6"}/></LazyLoad>
                <LazyLoad height={200}><img src={s7} alt={"s7"}/></LazyLoad>
                <LazyLoad height={200}><img src={s8} alt={"s8"}/></LazyLoad>
            </div>
        );
    }
}
