import React from 'react';
import FadeIn from './FadeIn';

const Contact = () => {
    return (
        <section id="contact" className="container">
            <FadeIn>
                <div style={{ background: 'linear-gradient(135deg, #161b22 0%, #0d1117 100%)', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '4rem', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>함께 연구하기</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                        공간, 기술, 인간에 대한 근본적인 질문에 관심 있으신가요?<br />
                        협력 연구, 강연, 컨설팅에 관해 언제든지 연락주세요.
                    </p>
                    <a href="mailto:mahau.master@gmail.com" style={{ display: 'inline-block', padding: '1rem 2rem', background: 'var(--text-primary)', color: 'var(--bg-color)', borderRadius: '8px', fontWeight: 700 }}>
                        mahau.master@gmail.com
                    </a>
                </div>
            </FadeIn>
        </section>
    );
};
export default Contact;
