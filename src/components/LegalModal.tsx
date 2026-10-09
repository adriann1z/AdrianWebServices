import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'cookies' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-[#111318] border border-white/20 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#191C22]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#A3FFCB]" />
            ) : (
              <FileText className="w-5 h-5 text-[#A3FFCB]" />
            )}
            <h3 className="font-display font-bold text-white text-lg">
              {type === 'privacy' ? 'Privacy Policy (Draft)' : 'Cookie Policy (Draft)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9DA3AF] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-[#9DA3AF] leading-relaxed">
          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono mb-4">
            [PLACEHOLDER NOTICE: This is an editable draft document provided for review prior to formal business publication.]
          </div>

          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Data Controller:</strong> Adrian Web Services, operated by Adrian Wrezel, based in Lincoln, Lincolnshire, United Kingdom. Contact: adrixnwrx@gmail.com / 07828 767631.
              </p>
              <p>
                <strong>2. Information We Collect:</strong> When you submit a project inquiry or request a website mockup, we collect your name, business name, email address, phone number, and project details solely for the purpose of communicating with you regarding your inquiry.
              </p>
              <p>
                <strong>3. How Your Information Is Used:</strong> Information is used exclusively to respond to your inquiries, deliver quotations, and provide agreed web design and hosting services. We never sell or share your data with third-party advertisers.
              </p>
              <p>
                <strong>4. Data Retention:</strong> Inquiry data is stored securely and retained only for as long as necessary to fulfill client communications and statutory UK accounting records.
              </p>
              <p>
                <strong>5. Your Rights:</strong> Under the UK GDPR, you have the right to request access to, correction of, or erasure of your personal data at any time by contacting us directly.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. What Are Cookies:</strong> Cookies are small text files placed on your device to ensure website functionality and improve your browsing experience.
              </p>
              <p>
                <strong>2. Cookies We Use:</strong> This website utilizes strictly necessary session preferences (such as remembering that you have seen the loading intro or your preferred demonstration view). We do not run invasive cross-site advertising trackers.
              </p>
              <p>
                <strong>3. Managing Preferences:</strong> You can configure your browser to block or alert you about cookies; however, some interactive features of the site may function with reduced performance.
              </p>
            </>
          )}

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold"
            >
              Close Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
