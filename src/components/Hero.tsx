import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-main">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Discover Your Path Through the Power of Numbers
            </h1>
            <p className="text-xl text-gray-600">
              Unlock the secrets of your life's journey with our advanced numerology analysis. Get personalized insights that guide your path to self-discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="secondary" 
                className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6"
                onClick={() => navigate('/chat')}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/placeholder.svg" 
              alt="Numerology Illustration" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;