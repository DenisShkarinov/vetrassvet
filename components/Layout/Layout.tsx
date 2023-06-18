import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Props} from "@/utils/utils";

export default function Layout ({ children }: Props) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}