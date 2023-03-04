import React, { useEffect } from "react";
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiClipboardCheck } from 'react-icons/hi'
import img4 from "../../component/images/pic4.jpeg"
import img1 from "../../component/images/pic1.webp"
import img13 from "../../component/images/pic13.jpeg"
import img11 from "../../component/images/pic11.jpeg"
import img12 from "../../component/images/pic12.jpeg"
import img3 from "../../component/images/pic3.jpeg"
import img6 from "../../component/images/pic6.jpeg"
import img8 from "../../component/images/pic8.jpeg"
import img14 from "../../component/images/pic14.jpeg"
import img15 from "../../component/images/pic15.jpeg"

import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
    {
        id: 1,
        imgSrc: img11,
        desTitle: "Bora Bora",
        location: "new zealand",
        grade: "cultural relax",
        fees: '$7000',
        description: "The epitome of romance, Bora Bora is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities."
    },
    {
        id: 2,
        imgSrc: img1,
         desTitle: "Australia",
        location: "Canberra",
        grade: "cultural relax",
        fees: '$6000',
        description: "The epitome of romance, Australia is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities."
    },
    {
        id: 3,
        imgSrc: img13,
        desTitle: "Spain",
        desTitle: "Bora Bora",
        location: "new zealand",
        grade: "cultural relax",
        fees: '$7000',
        description: "The epitome of romance, Bora Bora is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities."
    },
    {
        id: 4,
        imgSrc: img3,
        desTitle: "Bora Bora",
        location: "new zealand",
        grade: "cultural relax",
        fees: '$7000',
        description: "The epitome of romance, Bora Bora is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities."
    },
        {
        id: 5,
        imgSrc: img12,
        desTitle: "Australia",
        location: "Canberra",
        grade: "cultural relax",
        fees: '$7000',
        description: "The epitome of romance, Australia is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities."
    },
    
    {
        id: 6,
        imgSrc: img4,
        desTitle: "Bora Bora",
        location: "new zealand",
        grade: "cultural relax",
        fees: '$7000',
        description: "The epitome of romance, Bora Bora is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities."
    },
    {
        id: 7,
        imgSrc: img14,
        desTitle: "Bora Bora",
        location: "new zealand",
        grade: "cultural relax",
        fees: '$7000',
        description: "The epitome of romance, Bora Bora is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities."
    },
        {
        id: 8,
        imgSrc: img8,
        desTitle: "Australia",
        location: "Canberra",
        grade: "cultural relax",
        fees: '$7000',
        description: "The epitome of romance, Australia is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities."
    },
    {
        id: 9,
        imgSrc: img15,
        desTitle: "Bora Bora",
        location: "new zealand",
        grade: "cultural relax",
        fees: '$7000',
        description: "The epitome of romance, Bora Bora is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities."
    },
]
const Main = () => {
    // //////create a react hook to add a scroll animation.......
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className="main container section main-section">



            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="sectContent grid">
                {
                    Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/* here it will return single id from the map array */}
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle} />
                                </div>


                                <div className="cardInfo">
                                    <h4 className="desTitle"> {desTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS<HiClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Main;