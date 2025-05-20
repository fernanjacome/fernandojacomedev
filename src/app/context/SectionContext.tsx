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

            </>
        </SectionContext.Provider>
    );
};

export const useSection = () => useContext(SectionContext);
