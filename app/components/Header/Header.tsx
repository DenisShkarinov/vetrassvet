import Link from "next/link";
export default function Header () {
    return (
        <header>

            <div className="navbar">
                <ul><Link href="/">home</Link></ul>
                <ul><Link href="/specialists">Специалисты</Link></ul>
                <ul><Link href="/services">Услуги</Link></ul>
            </div>
        </header>
    )
}