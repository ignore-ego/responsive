import ProductTile from '@/components/Catalog/ProductTile';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HomeCatalogPreview from '@/components/home/HomeCatalogPreview';
import HomeNewsletter from '@/components/home/HomeNewsletter';
import Payment from '@/components/home/payment';

export default function Home() {
  return (
    <div className="home">
      <header className="header container mt-lg-4">
        <Header></Header>
      </header>

      <main className="content">
        <div className="layout-css">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>
        <div className="layout-flex">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>
        <div className="layout-grid">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        {/* layout bootstrap style */}
        <div className="container">
          <ul className="row justify-content-between">
            <li className="col-12 col-lg-3 mb-5">
              <ProductTile></ProductTile>
            </li>
            <li className="col-12 col-lg-3 offset-lg-1 mb-5">
              <ProductTile></ProductTile>
            </li>
            <li className="col-12 col-lg-3 offset-lg-1">
              <ProductTile></ProductTile>
            </li>
          </ul>
        </div>

        <HomeNewsletter></HomeNewsletter>

        <Payment></Payment>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
