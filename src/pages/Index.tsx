"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, Phone, Mail, ChefHat, Utensils, Wine } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const menuItems = [
    {
      category: "Appetizers",
      items: [
        { name: "Truffle Arancini", description: "Crispy risotto balls with black truffle", price: "$18" },
        { name: "Seared Scallops", description: "With cauliflower purée and caviar", price: "$24" },
        { name: "Beef Carpaccio", description: "Thinly sliced with arugula and parmesan", price: "$21" }
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Wagyu Ribeye", description: "8oz prime cut with roasted vegetables", price: "$65" },
        { name: "Lobster Thermidor", description: "Classic preparation with cognac cream sauce", price: "$48" },
        { name: "Duck Confit", description: "Slow-cooked leg with cherry gastrique", price: "$39" }
      ]
    },
    {
      category: "Desserts",
      items: [
        { name: "Chocolate Soufflé", description: "With vanilla bean ice cream", price: "$16" },
        { name: "Crème Brûlée", description: "Classic vanilla with berry compote", price: "$14" },
        { name: "Tiramisu", description: "House-made with espresso and mascarpone", price: "$15" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Michael Roberts",
      text: "Exquisite dining experience with impeccable service. The wagyu was perfectly cooked.",
      rating: 5
    },
    {
      name: "Sophia Williams",
      text: "The ambiance is sophisticated and the food is absolutely divine. A true culinary masterpiece.",
      rating: 5
    },
    {
      name: "James Thompson",
      text: "Best fine dining experience in the city. The attention to detail is remarkable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-amber-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-amber-50">
            Divine <span className="text-amber-500">Delicacies</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Experience culinary excellence in an atmosphere of refined elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-black text-lg py-6 px-8 font-semibold">
              Reserve a Table
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black text-lg py-6 px-8 font-semibold">
              View Our Menu
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-amber-500">Our Story</h2>
              <p className="text-amber-50 mb-6 text-lg">
                Founded in 2010, Divine Delicacies has been a beacon of culinary excellence in the heart of the city. 
                Our journey began with a passion for creating extraordinary dining experiences that celebrate the art of fine cuisine.
              </p>
              <p className="text-amber-50 mb-6 text-lg">
                Under the guidance of our award-winning chef, we blend traditional techniques with innovative approaches 
                to create dishes that are both visually stunning and palate-pleasing.
              </p>
              <div className="flex items-center mt-8">
                <ChefHat className="h-12 w-12 text-amber-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-amber-50">Chef Executive</h3>
                  <p className="text-amber-200">Michelin-starred culinary expert</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 border-2 border-amber-500 rounded-lg w-full h-96 flex items-center justify-center">
                <span className="text-amber-500">Chef at Work</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 p-6 rounded-lg">
                <div className="flex items-center">
                  <Utensils className="h-8 w-8 text-black mr-2" />
                  <span className="text-black text-xl font-bold">13+ Years</span>
                </div>
                <p className="text-black mt-1">Culinary Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-amber-50">Our Menu</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-amber-200 max-w-2xl mx-auto text-lg">
              Carefully curated dishes made with the finest ingredients sourced locally and internationally
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-amber-900">
                <div className="bg-amber-600 py-4">
                  <h3 className="text-2xl font-serif font-bold text-center text-black">{category.category}</h3>
                </div>
                <div className="p-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-semibold text-amber-50">{item.name}</h4>
                          <p className="text-amber-200 mt-1">{item.description}</p>
                        </div>
                        <span className="text-amber-500 font-bold text-lg whitespace-nowrap ml-4">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black py-3 px-8 text-lg">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-amber-50">Guest Experiences</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-amber-200 max-w-2xl mx-auto text-lg">
              Hear what our valued guests have to say about their dining experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black border border-amber-900">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-amber-50 italic mb-6 text-center">"{testimonial.text}"</p>
                  <p className="font-semibold text-amber-500 text-center">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4 text-amber-50">Visit Us</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-amber-200 max-w-2xl mx-auto text-lg">
                Experience Divine Delicacies at our elegant establishment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 text-amber-500">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-amber-500 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-50">Address</h4>
                      <p className="text-amber-200">123 Gourmet Avenue, Culinary District, CD 54321</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-amber-500 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-50">Phone</h4>
                      <p className="text-amber-200">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-amber-500 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-50">Email</h4>
                      <p className="text-amber-200">reservations@divinedelicacies.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-amber-500 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-50">Hours</h4>
                      <p className="text-amber-200">
                        Tuesday - Saturday: 5:00 PM - 11:00 PM<br />
                        Sunday: 5:00 PM - 10:00 PM<br />
                        Monday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-xl font-serif font-bold mb-4 text-amber-50">Private Events</h4>
                  <p className="text-amber-200 mb-4">
                    Host your special occasion in our exclusive private dining room for up to 30 guests.
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-black">
                    Inquire About Events
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-900 rounded-lg p-8 border border-amber-900 h-full">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-amber-500">Make a Reservation</h3>
                  <form className="space-y-6">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 bg-gray-800 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-50"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full px-4 py-3 bg-gray-800 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input 
                          type="date" 
                          className="w-full px-4 py-3 bg-gray-800 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-50"
                        />
                      </div>
                      <div>
                        <input 
                          type="time" 
                          className="w-full px-4 py-3 bg-gray-800 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-50"
                        />
                      </div>
                    </div>
                    <div>
                      <select className="w-full px-4 py-3 bg-gray-800 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-50">
                        <option>Party Size</option>
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5+ People</option>
                      </select>
                    </div>
                    <div>
                      <textarea 
                        placeholder="Special Requests" 
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-800 border border-amber-900 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-50"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-black py-3 text-lg">
                      Reserve Table
                    </Button>
                  </form>
                </div>
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