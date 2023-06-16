import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
export default function Layout ({ children }) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}