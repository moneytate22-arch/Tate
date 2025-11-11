"use client";

import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              Dev's Dental <span className="text-gray-800">Smile</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Testimonials</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-blue-600">
              <Phone className="h-4 w-4 mr-1" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Book Appointment
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
            </nav>
            <div className="mt-6 pt-4 border-t">
              <div className="flex items-center text-blue-600 mb-4">
                <Phone className="h-4 w-4 mr-1" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;