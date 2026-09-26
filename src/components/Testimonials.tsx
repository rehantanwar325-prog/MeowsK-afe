import React from 'react';
import { Star, ShieldCheck, Quote, ThumbsUp, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { HOTEL_INFO } from '../data/hotelInfo';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
          <Star size={13} className="fill-amber-400 text-amber-400" />
          <span>Justdial 5.0 ★ Perfect Rating</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-medium text-text">
          Stories from Our Cherished Guests
        </h2>
        <p className="text-base sm:text-lg text-text/75 font-light leading-relaxed">
          100% verified guest ratings on Justdial praise Hotel Shivansh for its tidy welcoming lobby, spacious air-conditioned rooms, delicious food, and warm multi-language hospitality.
        </p>

        {/* Rating Breakdown Pill */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs">
          <div className="glass px-4 py-2 rounded-full border border-accent/30 flex items-center gap-2">
            <span className="text-amber-400 font-bold text-sm">5.0 / 5.0</span>
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400" />
              ))}
            </div>
            <span className="text-muted">| 11 Justdial Reviews</span>
          </div>

          <div className="glass px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
            <ShieldCheck size={14} />
            <span>100% Verified Customer Feedback</span>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS_DATA.map((rev) => (
          <div
            key={rev.id}
            className="glass !rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 bg-[#11140e]/90"
          >
            <div className="space-y-4">
              {/* Header with Avatar & Source */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${rev.accentColor} text-white font-bold flex items-center justify-center text-sm shadow-md`}
                  >
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-base text-text">
                      {rev.author}
                    </h3>
                    <p className="text-[11px] text-muted">{rev.date}</p>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-wider font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                  {rev.source}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-xs sm:text-sm text-text/80 leading-relaxed font-light italic">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            {/* Tag Badge */}
            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-accent/90 font-medium text-[11px] truncate">
                {rev.tag}
              </span>
              <ThumbsUp size={12} className="text-muted group-hover:text-accent transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Justdial Official Profile CTA */}
      <div className="mt-14 text-center">
        <a
          href={HOTEL_INFO.justdialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 glass !rounded-full text-xs font-bold uppercase tracking-wider text-text hover:text-accent border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all shadow-xl"
        >
          <span>Read all Reviews &amp; Check Ratings on Justdial</span>
          <ExternalLink size={14} className="text-accent" />
        </a>
      </div>
    </section>
  );
};
