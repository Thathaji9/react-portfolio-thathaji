import { Link } from 'react-router-dom';
import { site } from '../../data/site';

const ContactCTA = () => (
  <section className="pb-8">
    <div className="card-surface relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16">
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
      <p className="eyebrow">Next</p>
      <h2 className="display mt-3 max-w-xl text-3xl text-ink sm:text-5xl">
        If your product needs a frontend who thinks in systems, say hello.
      </h2>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/contact" className="btn-primary">
          Contact
        </Link>
        <a href={`mailto:${site.email}`} className="btn-ghost">
          Email directly
        </a>
      </div>
    </div>
  </section>
);

export default ContactCTA;
