import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Portfolio(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
   
    
      <main>
        <section id="hero-element" className="margin-vert--lg">
          <div className="container">
            <p>MY HERO comes here</p>
           
          </div>
          
      <Link href='/docs/projects/overview'>
        My Projects
      </Link>
        </section>

   
      </main>
   
  );
}
