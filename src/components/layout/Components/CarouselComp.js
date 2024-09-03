import React from 'react'
import { Carousel } from '@mantine/carousel';
import EditProfile from '../../../pages/AtheProfileNavigations/EditProfile';

const CarouselComp = () => {
    
  return (
    <Carousel withIndicators height={200}>
      <Carousel.Slide>
        <div id="slide1" style={{background:"white",width:"100%"}}>
wdwd
        </div>
      </Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  )
}

export default CarouselComp
