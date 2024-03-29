import React  from 'react'
import { SmallNavbar } from '../../components/small_navbar/SmallNavbar';

const Gallery  = ({title, subTitle}) => {
    return <div>
                <SmallNavbar title = {title} subTitle={subTitle}/>
            </div>
}

export default Gallery;