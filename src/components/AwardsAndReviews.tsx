import React from "react";
import { Star } from "lucide-react";
const AwardBadge = ({
  title,
  category,
  color
}) => {
  return <div className="relative w-32 mx-auto">
      <div className={`border-4 border-white bg-white rounded-lg shadow-lg`}>
        <div className="p-4 text-center">
          <div className="text-[#f04e40]">
            <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto mb-2">
              <path fill="currentColor" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <h4 className="text-sm font-bold leading-tight">{title}</h4>
          <div className={`mt-2 text-xs py-1 px-2 rounded-full ${category === "Enterprise" ? "bg-[#ff6b6b] text-white" : category === "Mid-Market" ? "bg-[#ffd43b] text-black" : ""}`}>
            {category}
          </div>
          <div className="mt-1 text-xs">FALL</div>
          <div className="text-xs font-semibold">2024</div>
        </div>
      </div>
    </div>;
};
const ReviewScore = ({
  logo,
  reviews,
  count
}) => {
  return <div className="flex items-center justify-between mb-6">
      <img src={logo} alt="Review platform" className="h-7" />
      <div className="flex items-center gap-3">
        <div className="flex">
          {[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current text-[#0a6e4d]" />)}
          <Star className="w-5 h-5 fill-current text-[#0a6e4d] opacity-50" />
        </div>
        <span className="text-[#0a6e4d] font-medium">{count} reviews</span>
      </div>
    </div>;
};
const AwardsAndReviews = () => {
  return <section className="w-full px-4 py-16 bg-white md:px-16 lg:px-24">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-12">
            Awarded for excellence
          </h3>
          <div className="grid grid-cols-3 gap-8">
            <AwardBadge title="Leader" category="Enterprise" color="bg-[#ff6b6b]" />
            <AwardBadge title="Best Est. ROI" category="Enterprise" color="bg-[#845ef7]" />
            <AwardBadge title="Easiest To Use" category="Mid-Market" color="bg-[#ffd43b]" />
            <AwardBadge title="Best Support" category="Enterprise" color="bg-[#20c997]" />
            <AwardBadge title="Best Results" category="Enterprise" color="bg-[#845ef7]" />
            <AwardBadge title="Momentum Leader" category="Enterprise" color="bg-[#ff6b6b]" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-12">
            Loved by users everywhere
          </h3>
          <ReviewScore logo="https://cdn.worldvectorlogo.com/logos/g2-1.svg" count="2000+" />
          <ReviewScore logo="https://cdn.worldvectorlogo.com/logos/capterra-1.svg" count="2300+" />
          <ReviewScore logo="https://cdn.worldvectorlogo.com/logos/gartner-1.svg" count="80+" />
        </div>
      </div>
      <div className="mt-24 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Solutions for every industry
          </h2>
        </div>
        <div>
          <blockquote className="text-lg">
            "Brevo gives us the functionality and flexibility we need to manage
            our marketing engagement as well as our sales pipeline while saving
            us $30,000 annually compared to HubSpot."
          </blockquote>
        </div>
      </div>
    </section>;
};
export default AwardsAndReviews;
