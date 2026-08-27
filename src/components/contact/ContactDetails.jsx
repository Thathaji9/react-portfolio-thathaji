import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { site } from '../../data/site';

const contacts = [
  { id: 1, name: site.location, href: null, icon: <FiMapPin /> },
  { id: 2, name: site.email, href: `mailto:${site.email}`, icon: <FiMail /> },
  { id: 3, name: site.phone, href: site.phoneHref, icon: <FiPhone /> },
];

const ContactDetails = () => {
  return (
    <div>
      <p className="eyebrow">Direct</p>
      <h2 className="display mt-3 text-3xl text-ink">Other ways to reach me</h2>
      <ul className="mt-8 space-y-4">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <div className="card-surface flex items-center gap-4 px-5 py-4">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-paper text-lg text-accent">
                {contact.icon}
              </span>
              {contact.href ? (
                <a href={contact.href} className="text-ink hover:text-accent">
                  {contact.name}
                </a>
              ) : (
                <span>{contact.name}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactDetails;
