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
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-radial from-[#4a0000]/20 via-transparent to-transparent" />
      
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#8B0000] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl mb-12 tracking-widest text-[#b8860b] uppercase animate-fade-in"
          style={{ 
            fontFamily: "'Cinzel', serif",
            fontWeight: 600,
            textShadow: '0 0 30px rgba(139, 0, 0, 0.8), 0 0 60px rgba(139, 0, 0, 0.4)',
            letterSpacing: '0.15em'
          }}
        >
          Жду нашей встречи
        </h1>

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/20 to-transparent blur-3xl" />
          
          <div className="relative grid grid-cols-4 gap-3 md:gap-6 lg:gap-8">
            {[
              { value: timeLeft.days, label: 'ДНЕЙ' },
              { value: timeLeft.hours, label: 'ЧАСОВ' },
              { value: timeLeft.minutes, label: 'МИНУТ' },
              { value: timeLeft.seconds, label: 'СЕКУНД' }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group"
                style={{
                  animation: 'scale-in 0.5s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <div className="absolute inset-0 bg-[#8B0000]/10 blur-xl group-hover:bg-[#8B0000]/20 transition-all duration-500" />
                
                <div className="relative bg-black/60 border-2 border-[#8B0000]/40 backdrop-blur-sm p-4 md:p-6 lg:p-8 transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/5 to-transparent" />
                  
                  <div 
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-[#ff4444] mb-2 relative"
                    style={{ 
                      fontFamily: "'Cinzel', serif",
                      textShadow: '0 0 20px rgba(255, 68, 68, 0.8), 0 0 40px rgba(139, 0, 0, 0.6), 2px 2px 0px rgba(0,0,0,0.8)',
                      letterSpacing: '-0.05em'
                    }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </div>
                  
                  <div 
                    className="text-xs md:text-sm lg:text-base text-[#b8860b] tracking-[0.3em] uppercase"
                    style={{ 
                      fontFamily: "'Cinzel', serif",
                      fontWeight: 400,
                      textShadow: '0 0 10px rgba(139, 0, 0, 0.5)'
                    }}
                  >
                    {item.label}
                  </div>
                  
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p 
          className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] text-[#8B0000] uppercase animate-fade-in"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            textShadow: '0 0 20px rgba(139, 0, 0, 0.6)',
            animationDelay: '0.5s',
            animationFillMode: 'backwards',
            letterSpacing: '0.25em'
          }}
        >
          Каждая свеча погаснет...
        </p>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Index;
