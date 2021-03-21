import Header from './header'

export default function Layout ({ children, onSearch }) {
  return (
        <div>
            <Header onSearch={onSearch}/>
            <main className="container">{children}</main>
            <footer/>
        </div>
  )
}
