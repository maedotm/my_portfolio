import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-1 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-2">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
