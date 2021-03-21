import { useState } from 'react'
import Layout from '../../components/layout'
import SectionHeader from '../../components/section-header'
import StarshipCard from '../../components/starship-card'
import { getAllStarShips, searchStarShips } from '../api/data'
import GridContainer from '../../components/grid-container'

export async function getStaticProps () {
  return {
    props: {
      starships: await getAllStarShips()
    }
  }
}

export default function StarshipsPage ({ starships }) {
  const [data, setData] = useState(starships)

  const onSearch = async (query) => {
    const results = await searchStarShips(query)
    setData(results)
  }

  return (
        <Layout onSearch={onSearch}>
            <section className="section">
                <SectionHeader text="All Starships"/>
                {data &&
                <GridContainer columns={3}>
                    {data.map((starship) => (
                        <StarshipCard starship={starship} key={starship.name}/>
                    ))}
                </GridContainer>
                }
            </section>
        </Layout>
  )
}
