import Layout from "@/components/Layout/Layout";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Акции',
    description: 'Временные акции, скидки на услуги вет-клиники'
}
export default function Page () {
    return (
        <Layout>
            <h1>Акции</h1>
        </Layout>
    )
}