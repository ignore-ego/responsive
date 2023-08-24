export default function Header() {
  return (
    <>
      <section className="header-secondary">
        <div className="header-contact d-none d-lg-block">
          <ul>
            <li>
              <a href="tel:+1-877-666-1840">
                <i className="fa-solid fa-phone" title="Call us"></i>
                Toll Free 1-877-666-1840
              </a>
            </li>

            <li>
              <a href="mailto:" title="Email us">
                office@threadaffairs.com
              </a>
            </li>
          </ul>
        </div>

        <div className="header-search d-block d-lg-none">
          <ul>
            <li>
              <button type="button" title="Menu">
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>

            <li>
              <button type="button" title="Search">
                <i className="fa-solid fa-search"></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="header-controls">
          <ul className="d-flex gap-4 flex-lg-row-reverse">
            <li>
              <button type="button" title="Cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </li>

            <li>
              <button type="button" title="Account">
                <i className="fa-solid fa-user"></i>
              </button>
            </li>
          </ul>
        </div>

        <a className="header-logo" href="/" title="Thread Affair">
          <picture>
            <img src="/images/logo.jpg" alt="Thread affair-logo"></img>
          </picture>
        </a>
      </section>
      <section className="header-primary d-none d-lg-block">
        <nav className="nav-primary">
          <ul>
            <li>
              <a href="" title="Home">
                Home
              </a>
            </li>

            <li>
              <a href="" title="Costume">
                Costume
              </a>
            </li>

            <li>
              <a href="" title="Camasi">
                Camasi
              </a>
            </li>

            <li>
              <a href="" title="Accesorii">
                Accesorii
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-secondary">
          <ul>
            <li>
              <a href="" title="Glamour suits">
                Glamour suits
              </a>
            </li>

            <li>
              <a href="" title="Wedding suits">
                Wedding suits
              </a>
            </li>

            <li>
              <a href="" title="Office suits">
                Office suits
              </a>
            </li>
            <li>
              <a href="" title="Customize suits">
                Customize suits
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
