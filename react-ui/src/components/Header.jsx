import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <a href="#" className="logo">
                        <span style={{ color: 'var(--accent-color)' }}>▪</span> 점·선·면 연구소
                    </a>
                    <div className="nav-links">
                        <a href="#about">연구소 소개</a>
                        <a href="#research">핵심 가치</a>
                        <a href="#services">서비스</a>
                        <a href="#contact">문의</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
