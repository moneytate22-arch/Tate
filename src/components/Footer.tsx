"use client";

import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-amber-50 border-t border-amber-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Divine <span className="text-amber-500">Delicacies</span>
            </h3>
            <p className="text-amber-200 mb-6">
              Experience culinary excellence in an atmosphere of refined elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-amber-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-amber-200 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-500 transition-colors">Menu</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-500 transition-colors">Reservations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Opening Hours</h4>
            <ul className="space-y-2 text-amber-200">
              <li className="flex justify-between">
                <span>Tuesday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Monday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                <span className="text-amber-200">123 Gourmet Avenue, Culinary District, CD 54321</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3" />
                <span className="text-amber-200">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3" />
                <span className="text-amber-200">reservations@divinedelicacies.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-900 mt-12 pt-8 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Divine Delicacies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;