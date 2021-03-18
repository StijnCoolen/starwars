export default function Layout({children}) {
    return (
        <div>
            <header>
                <div>
                    <div>
                        <h1>Star Wars Directory</h1>
                    </div>
                    <p>Find your favorite Characters, Films, Species, Starships and Planets</p>
                    <form>
                        <input type="text" name="search" placeholder="Enter a search term"/>
                    </form>
                </div>
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    )
}