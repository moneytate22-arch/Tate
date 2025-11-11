"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, Star } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const services = [
    {
      title: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and tartar buildup."
    },
    {
      title: "Dental Implants",
      description: "Replace missing teeth with natural-looking implants."
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments for a brighter smile."
    },
    {
      title: "Orthodontics",
      description: "Braces and clear aligners for straighter teeth."
    },
    {
      title: "Root Canals",
      description: "Gentle root canal therapy to save your natural teeth."
    },
    {
      title: "Dental Crowns",
      description: "Restore damaged teeth with custom crowns."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Dr. Dev transformed my smile! The staff is incredibly friendly and professional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Painless procedures and state-of-the-art equipment. Highly recommend!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      text: "Best dental experience I've ever had. Clean, modern facility with caring staff.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">Dev's Dental Smile</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted local dental clinic providing exceptional care for beautiful, healthy smiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="mr-2 h-4 w-4" /> View Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Practice</h2>
              <p className="text-gray-600 mb-4">
                At Dev's Dental Smile, we're committed to providing exceptional dental care in a comfortable, 
                welcoming environment. Our experienced team uses the latest technology to ensure the best 
                possible outcomes for your oral health.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in preventive care and patient education to help you maintain a healthy smile 
                for life. Our personalized approach means we tailor treatments to your unique needs and goals.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <MapPin className="mr-2 h-5 w-5" />
                <span>123 Smile Avenue, Dental City, DC 12345</span>
              </div>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Clinic Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Dental Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care for patients of all ages using the latest techniques and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-600">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Patient Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our patients have to say about their experience at Dev's Dental Smile.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                Ready to schedule your appointment? Get in touch with our friendly team today.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Clinic Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">123 Smile Avenue, Dental City, DC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium">Hours</h4>
                      <p className="text-gray-600">
                        Mon-Thu: 8:00 AM - 6:00 PM<br />
                        Fri: 8:00 AM - 4:00 PM<br />
                        Sat: 9:00 AM - 2:00 PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Request Appointment</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;