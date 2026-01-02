import React from 'react';
import FadeIn from './FadeIn';

const Services = () => {
    return (
        <section id="services" style={{ background: 'var(--card-bg)' }}>
            <div className="container">
                <h2 style={{ marginBottom: '4rem' }}>인문학 기반 기술 서비스</h2>

                <div className="services-grid">
                    <FadeIn className="service-card">
                        <h3 className="service-title">CodeInDocker</h3>
                        <p className="service-desc">
                            개발 구성원 간 보다 쉽고 정확하게 소스를 공유하게 돕는 플랫폼.<br />
                            협업의 의미를 기술로 구현하여, 팀의 상호작용과 지식 공유를 원활하게 합니다.
                        </p>
                        <a href="/services/codeindocker.html" className="btn-arrow">
                            자세히 보기 <span>→</span>
                        </a>
                    </FadeIn>

                    <FadeIn className="service-card" delay={0.2}>
                        <h3 className="service-title">LecturePlans</h3>
                        <p className="service-desc">
                            AI와 협업을 통해 신속하고 풍부한 강의 자료를 준비하게 돕는 플랫폼.<br />
                            교육의 본질인 '의미 있는 소통'을 기술로 강화합니다.
                        </p>
                        <a href="/services/lectureplans.html" className="btn-arrow">
                            자세히 보기 <span>→</span>
                        </a>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
export default Services;
