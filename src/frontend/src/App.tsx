import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slide1Title } from '@/components/slides/Slide1Title';
import { Slide2Problem } from '@/components/slides/Slide2Problem';
import { Slide3Solution } from '@/components/slides/Slide3Solution';
import { Slide4AI } from '@/components/slides/Slide4AI';
import { Slide5Features } from '@/components/slides/Slide5Features';
import { Slide6Architecture } from '@/components/slides/Slide6Architecture';
import { Slide7Impact } from '@/components/slides/Slide7Impact';
import { Slide8Future } from '@/components/slides/Slide8Future';
import { Slide9Blank } from '@/components/slides/Slide9Blank';

const TOTAL_SLIDES = 9;

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    if (currentSlide < TOTAL_SLIDES) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide1Title />;
      case 2:
        return <Slide2Problem />;
      case 3:
        return <Slide3Solution />;
      case 4:
        return <Slide4AI />;
      case 5:
        return <Slide5Features />;
      case 6:
        return <Slide6Architecture />;
      case 7:
        return <Slide7Impact />;
      case 8:
        return <Slide8Future />;
      case 9:
        return <Slide9Blank />;
      default:
        return <Slide1Title />;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Main Slide Area */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl">
          <div className="bg-gradient-to-br from-black via-slate-950 to-black rounded-lg shadow-2xl shadow-gold/20 overflow-hidden min-h-[600px] flex flex-col border border-silver/20">
            {renderSlide()}
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <footer className="py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            variant="outline"
            size="lg"
            className="bg-black/50 border-silver/30 text-silver hover:bg-silver/10 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="mr-2 h-5 w-5" />
            Previous
          </Button>

          <div className="flex items-center gap-4">
            <span className="text-silver font-medium text-lg tracking-wide">
              {currentSlide} / {TOTAL_SLIDES}
            </span>
            <div className="flex gap-2">
              {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i + 1)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === i + 1
                      ? 'w-8 bg-gold'
                      : 'w-2 bg-silver/30 hover:bg-silver/50'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === TOTAL_SLIDES}
            variant="outline"
            size="lg"
            className="bg-black/50 border-silver/30 text-silver hover:bg-silver/10 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </footer>
    </div>
  );
}

export default App;
