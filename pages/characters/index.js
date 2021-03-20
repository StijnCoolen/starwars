import Layout from "../../components/layout";

export async function getStaticProps() {
    return {
        props: {
            characters: []
        }
    }
}

export default function CharactersPage() {
    return (
        <Layout/>
    )
}
