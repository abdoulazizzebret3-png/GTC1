'use client';

import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-3 group" passHref>
      <div className="relative">
        <div className="w-14 h-14 relative transition-transform duration-500 group-hover:scale-105 overflow-hidden rounded-2xl">
          <img
            src="/icons/gtc-logo.svg"
            alt="Logo Intégrale Formation"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-col">
          <h1 className="text-xl font-black text-[#1D3557] dark:text-white tracking-tighter leading-none">
            INTÉGRALE
          </h1>
          <div className="flex items-center gap-1">
            <div className="h-[2px] w-2 bg-[#D4AF37]"></div>
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em]">Formation</span>
            <div className="h-[2px] w-2 bg-[#D4AF37]"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
