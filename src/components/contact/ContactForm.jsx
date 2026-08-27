import { useState } from 'react';
import { site } from '../../data/site';

const initial = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in every field.');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio note from ${form.name}`,
        }),
      });

      if (!response.ok) throw new Error('Network error');
      setStatus('sent');
      setForm(initial);
    } catch (_err) {
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
        `Portfolio note from ${form.name}`
      )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
      window.location.href = mailto;
      setStatus('sent');
    }
  };

  return (
    <form onSubmit={onSubmit} className="card-surface p-6 sm:p-8">
      <p className="eyebrow">Write</p>
      <h2 className="display mt-3 text-3xl text-ink">Tell me about the problem</h2>
      <div className="mt-8 space-y-5">
        <label className="block text-sm text-muted">
          Name
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="mt-2 w-full rounded-2xl border-line/10 bg-paper text-ink focus:border-accent focus:ring-accent"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm text-muted">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className="mt-2 w-full rounded-2xl border-line/10 bg-paper text-ink focus:border-accent focus:ring-accent"
            autoComplete="email"
          />
        </label>
        <label className="block text-sm text-muted">
          Message
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={onChange}
            className="mt-2 w-full rounded-2xl border-line/10 bg-paper text-ink focus:border-accent focus:ring-accent"
          />
        </label>
      </div>
      {error && <p className="mt-4 text-sm text-ember">{error}</p>}
      {status === 'sent' && (
        <p className="mt-4 text-sm text-accent">Thanks — I’ll get back to you shortly.</p>
      )}
      <button type="submit" className="btn-primary mt-6" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};

export default ContactForm;
