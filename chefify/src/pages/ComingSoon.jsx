import React from 'react';
import { ChefHat } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
      <ChefHat size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Coming Soon</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
        We are working hard to bring this page to life. Stay tuned for exciting new features and content!
      </p>
    </div>
  );
};

export default ComingSoon;
