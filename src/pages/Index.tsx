import { useEffect, useState } from 'react';

const Index = () => {
  const targetDate = new Date('2025-11-28T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://cdn.poehali.dev/files/bf1cc925-072d-42aa-abc1-4a344ee6f415.jpg"
          alt="background"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4) contrast(1.2)' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl w-full">
        <h1 
          className="text-3xl md:text-5xl lg:text-7xl mb-16 tracking-[0.2em] text-white uppercase animate-fade-in"
          style={{ 
            fontFamily: "'Metal Mania', cursive",
            fontWeight: 400,
            textShadow: '0 0 20px rgba(220, 20, 60, 0.9), 0 0 40px rgba(220, 20, 60, 0.7), 0 0 60px rgba(139, 0, 0, 0.5), 4px 4px 15px rgba(0, 0, 0, 1)',
            letterSpacing: '0.3em',
            transform: 'skewY(-2deg)'
          }}
        >
          Жду нашей встречи
        </h1>

        <div className="relative mb-16">
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {[
              { value: timeLeft.days, label: 'ДНЕЙ' },
              { value: timeLeft.hours, label: 'ЧАСОВ' },
              { value: timeLeft.minutes, label: 'МИНУТ' },
              { value: timeLeft.seconds, label: 'СЕКУНД' }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative"
                style={{
                  animation: 'scale-in 0.6s ease-out',
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <div className="relative">
                  <div 
                    className="text-6xl md:text-7xl lg:text-9xl font-light text-white mb-3 relative tabular-nums neon-glow"
                    style={{ 
                      fontFamily: "'Creepster', cursive",
                      fontWeight: 400,
                      letterSpacing: '0.1em'
                    }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </div>
                  
                  <div 
                    className="text-xs md:text-sm text-white/70 tracking-[0.4em] uppercase neon-glow-subtle"
                    style={{ 
                      fontFamily: "'Metal Mania', cursive",
                      fontWeight: 400,
                      letterSpacing: '0.5em'
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p 
          className="text-xl md:text-2xl lg:text-4xl tracking-[0.2em] text-white/80 uppercase animate-fade-in neon-glow-subtle"
          style={{ 
            fontFamily: "'Metal Mania', cursive",
            fontWeight: 400,
            animationDelay: '0.6s',
            animationFillMode: 'backwards',
            letterSpacing: '0.4em',
            transform: 'skewY(-1deg)'
          }}
        >
          Каждая свеча погаснет...
        </p>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes neon-pulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(220, 20, 60, 0.8),
              0 0 20px rgba(220, 20, 60, 0.6),
              0 0 30px rgba(220, 20, 60, 0.4),
              0 0 40px rgba(220, 20, 60, 0.3),
              0 0 70px rgba(220, 20, 60, 0.2),
              2px 2px 10px rgba(0, 0, 0, 0.9);
          }
          50% {
            text-shadow: 
              0 0 15px rgba(220, 20, 60, 1),
              0 0 30px rgba(220, 20, 60, 0.8),
              0 0 45px rgba(220, 20, 60, 0.6),
              0 0 60px rgba(220, 20, 60, 0.4),
              0 0 90px rgba(220, 20, 60, 0.3),
              2px 2px 10px rgba(0, 0, 0, 0.9);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        
        .neon-glow {
          animation: neon-pulse 3s ease-in-out infinite;
        }
        
        .neon-glow-subtle {
          text-shadow: 
            0 0 10px rgba(220, 20, 60, 0.6),
            0 0 20px rgba(220, 20, 60, 0.4),
            0 0 30px rgba(220, 20, 60, 0.2),
            2px 2px 10px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Index;