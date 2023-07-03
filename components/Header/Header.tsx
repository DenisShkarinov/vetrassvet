'use client'
import Navigation from "@/components/Header/Navigation";
import './header.scss'
import Logo from "@/components/Logo";
import Phones from "@/components/phones";
import MakeAnAppointment from "@/components/Form/Popup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faVk, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Header () {

    return (
        <header>
            <div className="main-header">
                <div className="contact-to-clinic">
                    <div className="location">
                        <p>г. Жуковский</p>
                        <p>ул. Гудкова, 17А</p>
                    </div>
                    <div className="social-links">
                        <Link href="https://www.facebook.com/vet.rass.vet/"><FontAwesomeIcon icon={faFacebook}/></Link>
                        <Link href="https://vk.com/vet_rass_vet"><FontAwesomeIcon icon={faVk}></FontAwesomeIcon></Link>
                        <Link href="https://www.instagram.com/vet.rass.vet/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Link>
                    </div>
                </div>
                <Logo></Logo>
                <div className="contact">
                    <div className="phones">
                        <Phones phoneNumber="+7 (991) 300-50-17"></Phones>
                        <Phones phoneNumber="+7 (495) 198-02-32"></Phones>
                    </div>

                    <button className=''>Записаться на приём</button>
                </div>
            </div>

            <Navigation></Navigation>
            <MakeAnAppointment></MakeAnAppointment>
        </header>
    )
}