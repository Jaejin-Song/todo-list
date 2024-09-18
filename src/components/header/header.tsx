import "./header.scss";

export function Header() {
  return (
    <header>
      <nav className="header__nav">
        <div className="header__links">
          <div>Todo List</div>
        </div>
        <div className="header__buttons">
          <button>login</button>
        </div>
      </nav>
    </header>
  );
}
