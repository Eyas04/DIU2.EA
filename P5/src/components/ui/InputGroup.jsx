import React from 'react';

export const InputGroup = ({ label, placeholder, ...props }) => {
  return (
    <div className="w-full flex flex-col gap-1.5 text-left font-sans">
      <label className="text-sm font-bold text-brand-neutral-9">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2.5 bg-brand-neutral-1 rounded-xl border border-brand-neutral-3 text-sm text-brand-neutral-10 outline-none focus:border-brand-neutral-6 transition-colors"
        {...props}
      />
    </div>
  );
};