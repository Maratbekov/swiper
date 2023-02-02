import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

import './App.css'


import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'

import sword from './img/sword.png'
import people from './img/people.png'
import round from './img/round.png'

function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='m-r'>
        <div className='container'>
        <div className='cart'>
                <p className='classes.title'>Dota 2</p>
                <div className='classes.box'>
                    <img className='classes.sword' src={sword} alt="sword" />
                    <span>145</span>
                    <img className='classes.people' src={people}  alt="people" />
                    <span>2789</span>
                    <img className='classes.round' src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <button>Стратегия</button>
                </div>
            </div>
        </div>
        </SwiperSlide>



        <SwiperSlide>
        <div className='container'>
        <div className='cart'>
                <p className='classes.title'>Dota 2</p>
                <div className='classes.box'>
                    <img className='classes.sword' src={sword} alt="sword" />
                    <span>145</span>
                    <img className='classes.people' src={people}  alt="people" />
                    <span>2789</span>
                    <img className='classes.round' src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <button>Стратегия</button>
                </div>
            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='container'>
        <div className='cart'>
                <p className='classes.title'>Dota 2</p>
                <div className='classes.box'>
                    <img className='classes.sword' src={sword} alt="sword" />
                    <span>145</span>
                    <img className='classes.people' src={people}  alt="people" />
                    <span>2789</span>
                    <img className='classes.round' src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <button>Стратегия</button>
                </div>
            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='container'>
        <div className='cart'>
                <p className='classes.title'>Dota 2</p>
                <div className='classes.box'>
                    <img className='classes.sword' src={sword} alt="sword" />
                    <span>145</span>
                    <img className='classes.people' src={people}  alt="people" />
                    <span>2789</span>
                    <img className='classes.round' src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <button>Стратегия</button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='container'>
        <div className='cart'>
                <p className='classes.title'>Dota 2</p>
                <div className='classes.box'>
                    <img className='classes.sword' src={sword} alt="sword" />
                    <span>145</span>
                    <img className='classes.people' src={people}  alt="people" />
                    <span>2789</span>
                    <img className='classes.round' src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <button>Стратегия</button>
                </div>
            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='container'>
        <div className='cart'>
                <p className='classes.title'>Dota 2</p>
                <div className='classes.box'>
                    <img className='classes.sword' src={sword} alt="sword" />
                    <span>145</span>
                    <img className='classes.people' src={people}  alt="people" />
                    <span>2789</span>
                    <img className='classes.round' src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <button>Стратегия</button>
                </div>
            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='container'>
        <div className='cart'>
                <p className='classes.title'>Dota 2</p>
                <div className='classes.box'>
                    <img className='classes.sword' src={sword} alt="sword" />
                    <span>145</span>
                    <img className='classes.people' src={people}  alt="people" />
                    <span>2789</span>
                    <img className='classes.round' src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <button>Стратегия</button>
                </div>
            </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='container'>
        <div className='cart'>
                <p className='classes.title'>Dota 2</p>
                <div className='classes.box'>
                    <img className='classes.sword' src={sword} alt="sword" />
                    <span>145</span>
                    <img className='classes.people' src={people}  alt="people" />
                    <span>2789</span>
                    <img className='classes.round' src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <button>Стратегия</button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='container'>
        <div className='cart'>
                <p className='classes.title'>Dota 2</p>
                <div className='classes.box'>
                    <img className='classes.sword' src={sword} alt="sword" />
                    <span>145</span>
                    <img className='classes.people' src={people}  alt="people" />
                    <span>2789</span>
                    <img className='classes.round' src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <button>Стратегия</button>
                </div>
            </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default App
