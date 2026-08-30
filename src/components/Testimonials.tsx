import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 lg:py-32 relative bg-background text-text">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs tracking-[0.5em] uppercase text-accent font-bold mb-6 block">
            Guest Experiences
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-text mb-8 tracking-tighter">
            Voices of <span className="italic font-light text-accent">Warmth</span>
          </h2>
          <p className="text-muted text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Rated 4.9 ★ by thousands of happy visitors who cherish our cozy craft, artisan Maggi &amp; toast, and soothing cat sanctuary.
          </p>
        </div>

        {/* Rating Overview Badge Banner */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-[2rem] glass border-white/5 bg-[#11140e]/60 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-display font-medium text-accent">4.9</div>
            <div>
              <div className="flex text-accent gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs text-muted font-light mt-1 block">Based on 500+ Google Reviews</span>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2 text-xs text-text font-light">
            <CheckCircle2 size={18} className="text-accent" />
            <span>100% Verified Guest Feedback</span>
          </div>

          <a
            href="https://www.google.com/maps/search/Meows+K-afe+Sikar+Rajasthan"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-text text-xs uppercase tracking-wider font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            Review Us on Google
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="glass glass-hover p-8 rounded-[2rem] border-white/5 bg-[#11140e]/40 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-accent/20 border border-accent/30 text-accent font-display font-bold text-base flex items-center justify-center shadow-md">
                      {review.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-text text-base">{review.author}</h4>
                      <span className="text-[10px] uppercase tracking-wider text-muted font-light">
                        {review.date} • {review.source}
                      </span>
                    </div>
                  </div>
                  <Quote size={22} className="text-accent/30 group-hover:text-accent transition-colors" />
                </div>

                {/* Stars */}
                <div className="flex text-accent gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-text/90 leading-relaxed font-light">
                  "{review.comment}"
                </p>
              </div>

              {/* Tag */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-semibold text-accent uppercase tracking-wider">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

