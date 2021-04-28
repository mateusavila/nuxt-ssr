import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Autoplay, Navigation, directive } from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Autoplay, Navigation])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
import 'swiper/css/swiper.css'