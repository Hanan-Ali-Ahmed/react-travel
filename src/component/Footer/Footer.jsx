import React  , {useEffect} from "react";
import './footer.css'
import video1 from "../../component/videos/video1.mp4"
import video4 from "../../component/videos/video4.mp4"

import { FiSend } from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {AiOutlineRight} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    // //////create a react hook to add a scroll animation.......
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])


    return (


        <section className="footer">
            <div className="videoDiv">
                <video src={video4} muted autoPlay loop type="video4/mp4" ></video>
            </div>


            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH </small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input  data-aos="fade-up" type="email" placeholder="Enter Email Address" />
                        <button data-aos="fade-up"  className="btn flex" type="submit">SEND<FiSend className="icon" /></button>
                    </div>
                </div>


                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a data-aos="fade-up"  href="#" className='logo flex'>
                                <MdOutlineTravelExplore className='icon'/>Travel.</a>
                        </div>
                        <div data-aos="fade-up"   className="footerParagraph">
                        The epitome of romance, Bora Bora is one of the best travel destinatios in the world.This place is known for its luxurious stays and adventurous activities
                        </div>
                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className='icon'/>
                            <AiFillYoutube className='icon'/>
                            <AiFillInstagram className='icon'/>
                            <FaTripadvisor className='icon'/>

                        </div>
                    </div>

                  <div className="footerLinks grid">
                    {/* ///////////Group one */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Payment
                            </li>
                        </div>
                        {/* //////////////group   two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                               PARTNERS
                            </span>
                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                HosteWorld
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                              Trivago
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                TripAdvistor
                            </li>
                        </div>
                        {/* ///////////////group three */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                            LAST MINUTE

                            </span>
                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                              London
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                California
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Europe
                            </li>

                            <li className="footerList flex">
                                <AiOutlineRight className='icon'/>
                                Oceania
                            </li>
                        </div>
                  </div>


                   <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>
                                
                   </div>


                </div>
            </div>
        </section>







    )
}
export default Footer;