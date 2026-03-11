import { Linkedin, Mail, Github, Twitter, Dribbble } from "lucide-react";
import logo from "../../assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Main footer content */}
        <div className="rounded-3xl bg-gradient-to-br from-violet-50/50 to-blue-50/50 dark:from-violet-950/30 dark:to-blue-950/30 border border-violet-100 dark:border-violet-900 p-8 relative overflow-hidden">
          {/* Background Name Watermark */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none -mb-5">
            <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-violet-200/20 dark:text-violet-400/10 select-none text-center leading-none whitespace-nowrap">
              Irfan
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            {/* Left: Logo and role */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
              <p className="text-sm text-muted-foreground">UI UX Designer</p>
            </div>

            {/* Right: Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Designing meaningful, scalable experiences for the future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}