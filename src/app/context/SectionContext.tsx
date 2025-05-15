'use client';

import { createContext, useContext, useState } from 'react';

export const SectionContext = createContext<{
    currentSection: string;
    setCurrentSection: (section: string) => void;
}>({
    currentSection: 'hero',
    setCurrentSection: () => { },
});

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentSection, setCurrentSection] = useState('hero');

    return (
        <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
            <>
                {children}
                <div style={{
                    position: 'fixed',
                    top: 12,
                    right: 16,
                    zIndex: 9999,
                    background: 'rgba(0,0,0,0.7)',
                    color: 'lime',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    pointerEvents: 'none',
                }}>
                    Sección: {currentSection}
                </div>
            </>
        </SectionContext.Provider>
    );
};

export const useSection = () => useContext(SectionContext);
