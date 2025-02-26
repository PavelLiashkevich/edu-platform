import React from 'react';

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h2>Курсы</h2>
            <div>{children}</div>
        </div>
    );
}