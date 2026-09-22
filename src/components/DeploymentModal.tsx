import React, { useState } from 'react';
import { X, Globe, Server, CheckCircle, Copy, ArrowRight, ShieldCheck, Terminal, ExternalLink } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [activeHost, setActiveHost] = useState<'github' | 'netlify'>('github');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-stone-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>Domain & Hosting Blueprint</span>
          </div>
          <h3 className="text-2xl font-bold text-stone-900">
            Landing LocalRise at <span className="text-amber-700 font-mono">localrise.co.in</span>
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">
            Step-by-step instructions to deploy your static site and point your custom domain DNS in 15 minutes.
          </p>
        </div>

        {/* Host Selector */}
        <div className="flex gap-2 p-1.5 bg-stone-100 rounded-2xl mb-6">
          <button
            type="button"
            onClick={() => setActiveHost('github')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeHost === 'github'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Option 1: GitHub Pages (Recommended / 100% Free)
          </button>
          <button
            type="button"
            onClick={() => setActiveHost('netlify')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeHost === 'netlify'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Option 2: Netlify / Cloudflare (Drag & Drop)
          </button>
        </div>

        {/* Content based on Host */}
        {activeHost === 'github' ? (
          <div className="space-y-6 text-xs sm:text-sm text-stone-700">
            
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px]">1</span>
                <span>Push code or export dist folder to GitHub</span>
              </div>
              <p className="text-stone-600 text-xs">
                Create a public or private GitHub repository (e.g. <code className="bg-white px-1 py-0.5 rounded border border-stone-200">localrise-web</code>) and enable GitHub Pages under <strong>Settings → Pages</strong>.
              </p>
            </div>

            {/* Step 2: DNS Settings */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px]">2</span>
                <span>Configure DNS Records at your Domain Registrar (GoDaddy, Namecheap, Hostinger)</span>
              </div>
              <p className="text-stone-600 text-xs mb-3">
                Log into wherever you registered <code className="font-mono text-amber-800">localrise.co.in</code> and add these 4 <strong>A Records</strong>:
              </p>

              <div className="space-y-1.5 font-mono text-xs">
                {['185.199.108.153', '185.199.109.153', '185.199.110.153', '185.199.111.153'].map((ip) => (
                  <div key={ip} className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-stone-200">
                    <span>A @ {ip}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(ip, ip)}
                      className="text-stone-500 hover:text-stone-900 text-[11px] font-sans flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedKey === ip ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-stone-200/80">
                <p className="text-stone-600 text-xs mb-2">
                  And add 1 <strong>CNAME Record</strong> for the www subdomain:
                </p>
                <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-stone-200 font-mono text-xs">
                  <span>CNAME www &rarr; yourusername.github.io</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('yourusername.github.io', 'cname')}
                    className="text-stone-500 hover:text-stone-900 text-[11px] font-sans flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedKey === 'cname' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
              <div className="font-bold flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Automatic Free SSL (HTTPS)</span>
              </div>
              <p>
                Once DNS propagates (usually 10 to 30 mins), check the box for <strong>"Enforce HTTPS"</strong> in your GitHub Pages settings. Your site will immediately show the secure padlock at <code className="font-mono">https://localrise.co.in</code>!
              </p>
            </div>

          </div>
        ) : (
          <div className="space-y-6 text-xs sm:text-sm text-stone-700">
            
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px]">1</span>
                <span>Run `npm run build` to get the `dist` folder</span>
              </div>
              <p className="text-stone-600 text-xs">
                Export the static folder or drag the <code className="bg-white px-1 py-0.5 rounded border border-stone-200">dist</code> folder directly into app.netlify.com/drop. No command line required!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px]">2</span>
                <span>Add Custom Domain `localrise.co.in`</span>
              </div>
              <p className="text-stone-600 text-xs">
                In Netlify Domain Settings, type <code className="font-mono text-amber-800">localrise.co.in</code>. Netlify gives you an A record (75.2.60.5) or Netlify DNS nameservers for one-click setup.
              </p>
            </div>

          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-stone-800"
          >
            Got It, Close
          </button>
        </div>

      </div>
    </div>
  );
};
