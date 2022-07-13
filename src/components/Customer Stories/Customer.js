import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import "./customer.css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y ]);

const data = [
  {
    id:1,
    name:"Gavin Tye",
    imgsrc:"./Images/adam.png",
    logo:"./Images/red-eye.png",
    testomonial : "Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%",
    desi :"Sales director,Red eye"
  },
  {
    id:2,
    name:"Sam W",
    imgsrc:"./Images/gavin.png",
    logo:"./Images/jump-logo.png",
    testomonial : "From someone who is relatively new to sales and lead generating, Klenty was a highly effective and simple-to-use tool that allowed me to quickly generate leads in a genuine and customisable manner",
    desi :"Head of Demand Generation,Jump"
  }
]


const Customer = () => {


 

  return (

    <div className='row carouselcss' > 
       
      <div className="col-md-8 text-center mt-3" >
    <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
         
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            data.map((user=>(
              <SwiperSlide key={user.id}>
              <img className='double' src="./Images/Vector.png"/>
              <div className='testomonial'>{user.testomonial}</div>
              <div className="col-md-4 text-left mt-3" >

              <img className='slideimg' src={user.imgsrc} />
              <img className='slideimglogo'src={user.logo}/><span>|</span>
               <div> <span>{user.name}</span><br/>

                <span>{user.desi}</span>
                </div>
              </div>
              </SwiperSlide>
            )))
          }
        </Swiper>



    </div>
    </div>













    // <div className='row carouselcss' > 
       
    //   <div className="col-md-8 text-left mt-3" >
    //      <img src='./Images/Vector.png'/>
    //      <p className='custosays'>Klenty has helped us engage a far greater<br/> number of leads per week, resulting in an<br/>  outbound revenue jump of 93%</p>
    //   </div>
    //   <div className="col-md-4 text-left mt-3" >
    //      <img src='./Images/adam.png'/>
    //   </div>
      
     




    // </div>
    
    
  )
}

export default Customer