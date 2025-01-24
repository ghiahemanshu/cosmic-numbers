import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gradient-main z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/lovable-uploads/123da26c-19a6-43db-9ada-ecbc63170eb7.png" alt="Soul Digits Logo" className="h-16" />
            <span className="text-4xl font-bold text-primary">Soul Digits</span>
            <span className="text-4xl font-bold text-pink-600">Soul Digits</span>
            <span className="text-4xl font-bold text-red-600">Soul Digits</span>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary">About</a>
            <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-gray-700 hover:text-primary">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary">About</a>
              <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
              <Button className="bg-primary hover:bg-primary/90 w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;