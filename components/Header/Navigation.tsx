import Link from "next/link";
export default function Navigation ()  {
    return (
        <nav>
            <ul>
                <li><Link href="/services">Услуги</Link></li>
                <li><Link href="/prices">Цены</Link></li>
                <li><Link href="/promotions">Акции</Link></li>
                <li><Link href="/specialists">специалисты</Link></li>
                <li><Link href="/reviews">Отзывы</Link></li>
                <li><Link href="/articles">Статьи</Link></li>
                <li><Link href="/contacts">Контакты</Link></li>
            </ul>
        </nav>
    )
}