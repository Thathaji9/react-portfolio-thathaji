import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="site-wrap grid gap-10 py-12 lg:grid-cols-2 lg:py-16"
    >
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">Let’s make the interface inevitable.</h1>
        <p className="mt-5 max-w-md text-muted">
          Product teams, hiring managers, collaborators — if the work involves React, messy data, or a UI that has to scale, I want to hear about it.
        </p>
        <div className="mt-10">
          <ContactDetails />
        </div>
      </div>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
