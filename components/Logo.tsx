import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="logo">
            <Link href='/'>
                <Image src='/vetrassvet.png'
                       alt='Vetrassvet'
                       width={250}
                       height={80}></Image>
            </Link>
        </div>
    )
}