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
          className="text-3xl md:text-5xl lg:text-6xl mb-16 tracking-[0.3em] text-white/90 uppercase animate-fade-in"
          style={{ 
            fontFamily: "'Cinzel', serif",
            fontWeight: 400,
            textShadow: '2px 2px 20px rgba(0, 0, 0, 0.9)',
            letterSpacing: '0.4em'
          }}
        >
          Жду нашей встречи
        </h1>

        <div className="relative mb-16">
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
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
                <div className="relative bg-transparent border border-white/20 p-6 md:p-8 lg:p-10">
                  <div 
                    className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-3 relative tabular-nums"
                    style={{ 
                      fontFamily: "'Cinzel', serif",
                      fontWeight: 300,
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </div>
                  
                  <div 
                    className="text-xs md:text-sm text-white/60 tracking-[0.4em] uppercase"
                    style={{ 
                      fontFamily: "'Cinzel', serif",
                      fontWeight: 300,
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
          className="text-xl md:text-2xl lg:text-3xl tracking-[0.3em] text-white/70 uppercase animate-fade-in"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            textShadow: '2px 2px 15px rgba(0, 0, 0, 0.8)',
            animationDelay: '0.6s',
            animationFillMode: 'backwards',
            letterSpacing: '0.5em'
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
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Index;
