import Header from './header';

export default function Layout ({ children, onSearch, hideSearch, searchPlaceholder }) {
  return (
        <div>
            <Header onSearch={onSearch} hideSearch={hideSearch} searchPlaceholder={searchPlaceholder}/>
            <main className="container">{children}</main>
            <footer/>
        </div>
  );
}
