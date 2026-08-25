import { Linkedin, GraduationCap, FileText, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Publications", href: "#publications" },
  { label: "Patents", href: "#patents" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold text-gold mb-2">
              Dr. Latika Jindal
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Associate Professor, Department of Computer Science & Engineering
              <br />
              MediCaps University, Indore
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50 mb-4">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50 mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://in.linkedin.com/in/dr-latika-jindal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-gold hover:text-navy transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://scholar.google.com/citations?user=4rJX49MAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-gold hover:text-navy transition-colors"
              >
                <GraduationCap size={18} />
              </a>
              <a
                href="https://orcid.org/0000-0003-1773-2171"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-gold hover:text-navy transition-colors"
              >
                <FileText size={18} />
              </a>
              <a
                href="/Dr_Latika_Jindal_CV.docx"
                download
                aria-label="Download CV"
                className="inline-flex items-center gap-2 px-4 h-10 rounded-lg bg-white/10 hover:bg-gold hover:text-navy transition-colors text-sm font-medium"
              >
                CV
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Latika Jindal — Designed for Academic Excellence.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-gold hover:text-gold transition-colors"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
