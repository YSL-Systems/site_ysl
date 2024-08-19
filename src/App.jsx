import { Nav } from './components';
import { About, Contacts, FAQ, Footer, Hero, OurServices, WhyChoose } from './sections';

const App = () => (
  <main className="font-montserrat">
    <Nav />
    <section>
      <Hero />
    </section>
    <section>
      <OurServices />
    </section>
    <section>
      <About />
    </section>
    <section>
      <WhyChoose />
    </section>
    <section>
      <FAQ />
    </section>
    <section>
      <Contacts />
    </section>
    <section>
      <Footer />
    </section>
  </main>
);

export default App;
