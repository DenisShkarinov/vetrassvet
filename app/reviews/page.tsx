import Layout from "@/components/Layout/Layout";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Отзывы',
    description: 'Отзывы о вет-клинике'
}
export default function Page () {
    return (
        <Layout>
            <h1>Отзывы</h1>
        </Layout>
    )
}