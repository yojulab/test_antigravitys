import React from 'react';
import FadeIn from './FadeIn';

const Framework = () => {
    return (
        <section id="research" className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>점-선-면-차원 프레임워크</h2>
            <div className="concepts-grid">
                <FadeIn className="concept-card">
                    <div className="concept-icon">🔴</div>
                    <h3>점 (Point)</h3>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>순간과 존재</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        일상의 작은 순간들에서 의미를 발견합니다. 현상학적 접근을 통해 공간 속 신체의 경험과 미시적 감정을 탐구합니다.
                    </p>
                </FadeIn>
                <FadeIn className="concept-card" delay={0.1}>
                    <div className="concept-icon">➖</div>
                    <h3>선 (Line)</h3>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>흐름과 관계</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        움직임 속에서 드러나는 삶의 서사를 연구합니다. 동선이 만드는 삶의 이야기와 사회적 관계의 역학을 분석합니다.
                    </p>
                </FadeIn>
                <FadeIn className="concept-card" delay={0.2}>
                    <div className="concept-icon">▭</div>
                    <h3>면 (Plane)</h3>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>장소와 공동체</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        공간이 품은 문화와 사람들이 만드는 의미를 찾습니다. 물리적 공간과 디지털 플랫폼이 어떻게 공동체를 형성하는지 연구합니다.
                    </p>
                </FadeIn>
                <FadeIn className="concept-card" delay={0.3}>
                    <div className="concept-icon">📦</div>
                    <h3>차원 (Dimension)</h3>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>시간과 의미</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        과거-현재-미래를 가로지르는 삶의 층위를 다룹니다. 기술로 최적화된 삶과 윤리적 가치 사이의 균형을 모색합니다.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
};
export default Framework;
