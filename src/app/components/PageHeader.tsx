import { motion, useScroll, useTransform } from "motion/react";
import bgImage from "../../assets/bcda3e7ee9b7460982bbbba171be99fd4ddc4203.png";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle = "Click on any card to explore details" }: PageHeaderProps) {
  // Parallax effect setup - using window scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  return (
    <div 
      className="relative w-full rounded-2xl overflow-hidden min-h-[160px]"
      style={{ position: 'relative' }}
    >
      {/* Parallax Background Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform'
        }}
      />
      
      {/* Overlay for text readability - Very subtle */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-blue-600/10 to-pink-600/10"></div>
      
      {/* Content - Constrained Width */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 text-center">
        <h2 className="text-4xl md:text-5xl mb-2 font-bold drop-shadow-lg bg-gradient-to-br from-violet-500 to-blue-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="w-20 h-1 bg-white/80 mx-auto rounded-full mb-3" />
        <p className="text-sm text-white/90 font-medium">{subtitle}</p>
      </div>
    </div>
  );
}