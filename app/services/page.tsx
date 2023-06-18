import Layout from "@/components/Layout/Layout";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Услуги',
    description: 'Услуги, предлставляемые ветклиникой Vetrassvet'
}
export default function Page () {
    return (
        <Layout>
            <h1>Services</h1>
        </Layout>
    )
}