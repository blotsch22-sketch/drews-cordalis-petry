import { BIO } from "../data/content";

function MemberPlaceholder({ name }: { name: string }) {
  return (
    <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#F6E7D8] to-[#FFF8F1] rounded-xl flex items-center justify-center">
      <span className="text-5xl font-extrabold text-[#E97A6A]/20 font-['Montserrat']">
        {name.charAt(0)}
      </span>
    </div>
  );
}

export default function BioSection() {
  return (
    <section id="ueber-uns" className="py-24 md:py-32 bg-[#FFF8F1]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="section-label">{BIO.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            {BIO.headline}
          </h2>
          <p className="text-[#2F2A26]/70 text-base md:text-lg leading-relaxed">
            {BIO.intro}
          </p>
        </div>

        {/* Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {BIO.members.map((member, i) => (
            <div key={i} className="card group">
              {/* Image */}
              <div className="relative overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} – ${member.role}`}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <MemberPlaceholder name={member.name} />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-[#2F2A26] mb-0.5">{member.name}</h3>
                  <p className="text-[#E97A6A] text-sm font-medium font-['Montserrat'] tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
              {/* Description */}
              <div className="p-5 pt-3">
                <p className="text-[#2F2A26]/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Bio */}
        {BIO.extendedBio && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-px bg-[#E97A6A]/30 mx-auto mb-8" />
            <p className="text-[#2F2A26]/65 text-base md:text-lg leading-relaxed italic">
              {BIO.extendedBio}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
