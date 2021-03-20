import Header from "./header";

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <main className="container">{children}</main>
            <footer/>
        </div>
    )
}
