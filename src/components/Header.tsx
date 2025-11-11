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
    <header className="bg-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-amber-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold">
              Divine <span className="text-amber-500">Delicacies</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-amber-50 hover:text-amber-500 font-medium transition-colors">Home</a>
            <a href="#" className="text-amber-50 hover:text-amber-500 font-medium transition-colors">Menu</a>
            <a href="#" className="text-amber-50 hover:text-amber-500 font-medium transition-colors">About</a>
            <a href="#" className="text-amber-50 hover:text-amber-500 font-medium transition-colors">Gallery</a>
            <a href="#" className="text-amber-50 hover:text-amber-500 font-medium transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-amber-500">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">(555) 123-4567</span>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-black">
              Reserve Table
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-amber-500">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-900">
            <nav className="flex flex-col space-y-4 mb-6">
              <a href="#" className="text-amber-50 hover:text-amber-500 font-medium py-2">Home</a>
              <a href="#" className="text-amber-50 hover:text-amber-500 font-medium py-2">Menu</a>
              <a href="#" className="text-amber-50 hover:text-amber-500 font-medium py-2">About</a>
              <a href="#" className="text-amber-50 hover:text-amber-500 font-medium py-2">Gallery</a>
              <a href="#" className="text-amber-50 hover:text-amber-500 font-medium py-2">Contact</a>
            </nav>
            <div className="pt-4 border-t border-amber-900">
              <div className="flex items-center text-amber-500 mb-4">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-black">
                Reserve Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;