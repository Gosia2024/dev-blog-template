import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function PortfolioPage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
   
    
      <main>
        <section id="hero-element" className="margin-vert--lg">
          <div className="container">
            <p>MY HERO comes here</p>
          </div>
        </section>

        <section className="margin-vert--lg">
          <div className="container">
            <h2>Hallo</h2>

            <div className="row">
              <div className="col col--4">
                <h3>Column 1</h3>
                <p>Lorem Ipsum text</p>
              </div>
              <div className="col col--4">
                <h3>Column 2</h3>
                <p>Lorem Ipsum text</p>
              </div>
              <div className="col col--4">
                <h3>Column 3</h3>
                <p>Lorem Ipsum text</p>
              </div>
            </div>

            <div className="row">
              <div className="col col--4">
                <h3>Column 1</h3>
                <p>Lorem Ipsum text</p>
              </div>
              <div className="col col--4">
                <h3>Column 2</h3>
                <p>Lorem Ipsum text</p>
              </div>
              <div className="col col--4">
                <h3>Column 3</h3>
                <p>Lorem Ipsum text</p>
              </div>
            </div>
          </div>
        </section>
      </main>
   
  );
}
