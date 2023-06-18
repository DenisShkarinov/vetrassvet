import Layout from "@/components/Layout/Layout";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Статьи',
    description: 'Различные статьи просветительского характера'
}
export default function Page () {
    return (
        <Layout>
            <h1>Статьи</h1>
        </Layout>
    )
}