import Layout from "@/components/Layout/Layout"
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Специалисты',
    description: 'Сотрудники клиники Vetrassvet'
}
export default function Page () {
    return (
        <Layout>
            <h1>Specialist</h1>
        </Layout>
    )
}