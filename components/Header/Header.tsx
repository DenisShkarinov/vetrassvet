import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Header/Navigation";
export default function Header () {
    return (
        <header>
            <div className="main-header">
                <div className="contact-to-clinic">

                </div>
                <div className="logo">
                    <Link href='/'>
                        <Image src='/vetrassvet.png'
                               alt='Vetrassvet'
                               width={250}
                               height={80}></Image>
                    </Link>
                </div>


            </div>
            <Navigation></Navigation>
        </header>
    )
}