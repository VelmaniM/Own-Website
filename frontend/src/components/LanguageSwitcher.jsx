import React, { useState, useEffect, useRef } from 'react';
import { Globe, Search } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'hi', name: 'हिंदी (Hindi)' },
  { code: 'ml', name: 'മലയാളം (Malayalam)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
  { code: 'ur', name: 'اردو (Urdu)' },
  { code: 'ar', name: 'العربية (Arabic)' },
  { code: 'fr', name: 'Français (French)' },
  { code: 'es', name: 'Español (Spanish)' },
  { code: 'de', name: 'Deutsch (German)' },
  { code: 'it', name: 'Italiano (Italian)' },
  { code: 'ja', name: '日本語 (Japanese)' },
  { code: 'ko', name: '한국어 (Korean)' },
  { code: 'zh-CN', name: '中文 (Chinese)' },
  { code: 'ru', name: 'Русский (Russian)' },
  { code: 'pt', name: 'Português (Portuguese)' },
];

function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    // Read the googtrans cookie to find current language
    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
    if (match) {
      const parts = decodeURIComponent(match[1]).split('/');
      if (parts.length > 2) {
        setCurrentLang(parts[2]);
      }
    }
    
    // Close dropdown on outside click
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lang.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const changeLanguage = (langCode) => {
    // Set the google translate cookie
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    if (window.location.hostname !== 'localhost') {
      document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/;`;
    }
    window.location.reload();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1.5 border border-transparent hover:border-slate-200 dark:hover:border-zinc-700"
        aria-label="Change Language"
      >
        <Globe size={18} className="text-main-text opacity-70" />
        <span className="text-xs font-semibold text-main-text uppercase opacity-80">{currentLang}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-card-background border border-border-subtle rounded-xl shadow-2xl z-[100] animate-in fade-in slide-in-from-top-2 overflow-hidden flex flex-col">
          <div className="p-2 border-b border-border-subtle bg-slate-50 dark:bg-zinc-900/50 flex items-center gap-2">
            <Search size={16} className="text-muted-text ml-2 flex-shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search language..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none focus:outline-none text-sm text-main-text placeholder-muted-text py-1.5"
            />
          </div>
          <div className="max-h-60 overflow-y-auto hide-scrollbar py-1">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${currentLang === lang.code ? 'text-brand-blue font-semibold bg-brand-blue/5' : 'text-main-text hover:bg-slate-50 dark:hover:bg-zinc-800/50'}`}
                >
                  {lang.name}
                </button>
              ))
            ) : (
              <div className="px-4 py-4 text-sm text-muted-text text-center">No languages found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
