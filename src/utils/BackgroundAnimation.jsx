import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const symbols = ['{ }', '</>', '01', 'const', '=>', '[]', ';', 'fn', 'import'];
    const particleCount = 40;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: symbols[Math.floor(Math.random() * symbols.length)],
        speed: 0.3 + Math.random() * 0.7,
        size: 16 + Math.random() * 6,
        opacity: 0.35 + Math.random() * 0.4, // High visibility
        drift: (Math.random() - 0.5) * 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.font = `bold ${p.size}px monospace`;
        ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);

        p.y -= p.speed;
        p.x += p.drift;

        if (p.y < -30) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default BackgroundAnimation;