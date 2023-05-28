import Slide from "../components/slide"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {AutoPlay, Autoplay} from 'swiper'
import 'swiper/css'

export default function Banner() {

  SwiperCore.use([Autoplay])

  return (
    <>
      <Swiper
        slidesPerView={1}
        loop = {true}
        autoplay={
          {delay: 2000}
        }
      >
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
      </Swiper>
    </>
  )
}