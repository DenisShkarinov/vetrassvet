import Layout from "@/components/Layout/Layout";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Цены',
    description: 'Стоимость услуг, предоставляемых вет-клиникой'
}
export default function Page () {
    return (
        <Layout>
            <h1>Цены</h1>
        </Layout>
    )
}