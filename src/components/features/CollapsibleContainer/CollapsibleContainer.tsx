import './_CollapsibleContainer.css'
import React, { useState, ReactNode, useEffect, useRef } from 'react';

interface CollapsibleContainerProps {
    children: ReactNode;
    initialCollapsed?: boolean;
}

export default function CollapsibleContainer({ children, initialCollapsed = false }: CollapsibleContainerProps): JSX.Element {

    const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsCollapsed(true);
            } else (
                setIsCollapsed(false)
            )
        };

        window.addEventListener('resize', handleResize)

        if (window.innerWidth <= 768) {
            setIsCollapsed(true);
        } else (
            setIsCollapsed(false)
        )

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxWidth = isCollapsed ? '0px' : `${contentRef.current.scrollWidth}px`;
        }
    }, [isCollapsed]);

    return (
        <div className="collapsible-wrapper">
            <div className={`toggle-button ${isCollapsed ? 'collapsed' : 'expanded'}`} onClick={toggleCollapse}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
            <div className={`collapsible-container position-relative h-100 content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                {children}
            </div>
        </div>
    );
}