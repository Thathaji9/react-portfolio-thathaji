import { useContext } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import profileImage from '../../images/profile.jpeg';
import AboutMeContext from '../../context/AboutMeContext';
import { skillGroups } from '../../data/skills';
import { values } from '../../data/experience';
import { site } from '../../data/site';
import Experience from '../home/Experience';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="pb-16 pt-10">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="card-surface relative overflow-hidden">
            <img src={profileImage} className="w-full object-cover" alt={site.name} />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white backdrop-blur">
              <p className="font-display text-lg">{site.name}</p>
              <p className="text-xs text-white/70">{site.role}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="eyebrow">About</p>
          <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">
            Frontend with a systems brain.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {aboutMe.map((bio) => (
              <p key={bio.id}>{bio.bio}</p>
            ))}
          </div>
          <a
            href={site.resume}
            download="Thathaji_Rallapalli.pdf"
            className="btn-primary mt-8"
          >
            Download resume
            <FiArrowUpRight />
          </a>
        </div>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {values.map((item) => (
          <article key={item.id} className="card-surface p-6">
            <h3 className="display text-xl text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>

      <Experience />

      <section className="pt-4">
        <p className="eyebrow">05 / Stack</p>
        <h2 className="display mt-3 text-3xl text-ink sm:text-4xl">Tools I reach for</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.id} className="card-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMeBio;
