"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, Heart, Star, Users, Utensils } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="fluid"
      cardStyle="gradient-radial"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Kadhambam"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reservations", id: "reservations" },
            { name: "Contact", id: "contact" },
            { name: "Reviews", id: "reviews" }
          ]}
          button={{ text: "Call Now", href: "tel:+919843341001" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Experience Authentic Multi-Cuisine Dining in Coimbatore"
          description="Delicious biryanis, sizzling starters, and premium desserts served fresh every day. Join thousands of satisfied customers at Kadhambam Multi-Cuisine Restaurant."
          tag="Premium Dining"
          tagIcon={Utensils}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-fried-minced-with-pan-foil-stove_176474-3090.jpg",              imageAlt: "Kongu Chicken Biryani"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/serving-tables-wedding-old-restaurant_8353-9579.jpg",              imageAlt: "Restaurant Interior"
            }
          ]}
          mediaAnimation="slide-up"
          rating={4}
          ratingText="Rated 4.3⭐ by 1900+ Happy Customers"
          buttons={[
            { text: "Reserve Table", href: "#reservations" },
            { text: "Call Now", href: "tel:+919843341001" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Popular Dishes"
          description="Handpicked favorites loved by our customers. Each dish is crafted with premium ingredients and authentic recipes."
          tag="Menu Highlights"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",              name: "Kongu Chicken Biryani",              price: "₹280",              imageSrc: "http://img.b2bpic.net/free-photo/chicken-with-rice-cooked-indian-style_23-2148294964.jpg",              imageAlt: "Kongu Chicken Biryani"
            },
            {
              id: "2",              name: "Butter Naan",              price: "₹60",              imageSrc: "http://img.b2bpic.net/free-photo/pakistani-food-wooden-board-view_23-2148825096.jpg",              imageAlt: "Butter Naan"
            },
            {
              id: "3",              name: "Paneer Tikka",              price: "₹220",              imageSrc: "http://img.b2bpic.net/free-photo/chicken-lula-with-onion-sauce_140725-1732.jpg",              imageAlt: "Paneer Tikka"
            },
            {
              id: "4",              name: "Honeydew Chicken Manchurian",              price: "₹240",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-avocado-salad-with-meat-sesame_141793-2669.jpg",              imageAlt: "Honeydew Chicken Manchurian"
            },
            {
              id: "5",              name: "Vanjaram Fish Fry",              price: "₹320",              imageSrc: "http://img.b2bpic.net/free-photo/grilled-fish-wooden-board-onion-lettuce-tomato-lemon_141793-17504.jpg",              imageAlt: "Vanjaram Fish Fry"
            },
            {
              id: "6",              name: "Sizzling Hazelnut Brownie",              price: "₹150",              imageSrc: "http://img.b2bpic.net/free-photo/sweet-cup-tasty-chocolate-mousse-with-strawberry-syrup-inside_114579-1834.jpg",              imageAlt: "Sizzling Hazelnut Brownie with Ice Cream"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Kadhambam"
          description="Kadhambam Multi-Cuisine Restaurant is your destination for authentic, premium dining in Coimbatore. With over a decade of excellence, we blend traditional recipes with modern presentation to create unforgettable culinary experiences."
          tag="Our Story"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "Authentic Recipes",              description: "Traditional multi-cuisine dishes prepared with premium ingredients and family-tested recipes.",              icon: Heart
            },
            {
              title: "Premium Quality",              description: "Only the finest ingredients sourced locally to ensure freshness and quality in every dish.",              icon: Award
            },
            {
              title: "Warm Hospitality",              description: "Our dedicated team ensures every guest receives exceptional service in a welcoming atmosphere.",              icon: Users
            },
            {
              title: "Multiple Services",              description: "Enjoy dine-in, takeaway, delivery, and online ordering options for your convenience."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081865.jpg"
          imageAlt="Kadhambam Restaurant Interior"
          imagePosition="right"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen
          title="Why Choose Kadhambam"
          description="Experience dining that combines taste, quality, and hospitality in perfect harmony."
          tag="Our Advantages"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Location",              title: "Prime Location",              subtitle: "Easy access in Tatabad",              description: "Conveniently located on Dr Alagappa Chettiar Rd in Hudco Colony, making it easily accessible for family dining and celebrations.",              imageSrc: "http://img.b2bpic.net/free-photo/distance-marker-gps-global-positioning-system_53876-124742.jpg"
            },
            {
              id: 2,
              tag: "Quality",              title: "Premium Ingredients",              subtitle: "Fresh daily",              description: "We source the finest ingredients daily to ensure every dish meets our high standards of taste and quality.",              imageSrc: "http://img.b2bpic.net/free-photo/chef-preparing-salad_23-2148145617.jpg"
            },
            {
              id: 3,
              tag: "Service",              title: "Exceptional Service",              subtitle: "Customer-first approach",              description: "Our trained staff provides attentive and courteous service, ensuring your dining experience is memorable.",              imageSrc: "http://img.b2bpic.net/free-photo/young-waiter-recommending-guests-what-order-from-menu-cafe_637285-7834.jpg"
            },
            {
              id: 4,
              tag: "Ratings",              title: "Highly Rated",              subtitle: "4.3⭐ with 1900+ reviews",              description: "Trust the opinions of thousands of satisfied customers who rate us as one of the best restaurants in Coimbatore.",              imageSrc: "http://img.b2bpic.net/free-photo/group-friends-eating-restaurant_23-2148006668.jpg"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardSix
          title="What Our Customers Say"
          description="Real experiences from real customers who love dining at Kadhambam"
          tag="Customer Reviews"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Ramesh Kumar",              handle: "Family Dining",              testimonial: "The Kongu Chicken Biryani is absolutely delicious! We've been coming here for years. The service is always excellent and the atmosphere is perfect for family gatherings.",              imageSrc: "http://img.b2bpic.net/free-photo/emotional-young-male-with-blue-shirt-standing-gate-with-slight-smile-his-face_181624-33508.jpg",              imageAlt: "Ramesh Kumar"
            },
            {
              id: "2",              name: "Priya Sharma",              handle: "Office Professional",              testimonial: "Quick service, amazing food quality, and affordable prices. The butter naan and paneer tikka are must-tries. Perfect for lunch meetings!",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-businesswoman_329181-11388.jpg",              imageAlt: "Priya Sharma"
            },
            {
              id: "3",              name: "Arun Natarajan",              handle: "Food Enthusiast",              testimonial: "The variety of cuisines they offer is impressive. Every dish tastes authentic and freshly prepared. Definitely the best multi-cuisine restaurant in Tatabad!",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-man-looking-camera_23-2148148708.jpg",              imageAlt: "Arun Natarajan"
            },
            {
              id: "4",              name: "Deepa Gupta",              handle: "Regular Customer",              testimonial: "Celebrated my birthday here and it was fantastic! The staff made everything special, and the desserts are to die for. Highly recommended for all occasions.",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-weather-makes-me-feel-alive-happy-beautiful-young-woman-looking-window_329181-11291.jpg",              imageAlt: "Deepa Gupta"
            },
            {
              id: "5",              name: "Vikram Singh",              handle: "Corporate Groups",              testimonial: "We ordered catering for our office event. The food quality, variety, and timely delivery exceeded our expectations. Will definitely order again!",              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg",              imageAlt: "Vikram Singh"
            },
            {
              id: "6",              name: "Sneha Desai",              handle: "Date Night Regular",              testimonial: "Perfect ambiance for romantic dinners. The honeydew chicken manchurian and sizzling brownie are our favorites. Every visit feels special here.",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-yellow-bandana_273609-13345.jpg",              imageAlt: "Sneha Desai"
            }
          ]}
        />
      </div>

      <div id="reservations" data-section="reservations">
        <ContactCenter
          tag="Book Your Table"
          title="Reserve Your Table Today"
          description="Join us for an unforgettable dining experience. Reserve your table now and enjoy premium multi-cuisine dining at Kadhambam."
          tagIcon={Calendar}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email for reservation details"
          buttonText="Reserve Table"
          termsText="We'll contact you shortly to confirm your reservation. Call us at 098433 41001 for immediate booking."
        />
      </div>

      <div id="contact" data-section="contact">
        <FeatureCardNineteen
          title="Visit Us Today"
          description="We're located in the heart of Tatabad, easily accessible and ready to welcome you with warm hospitality."
          tag="Location & Hours"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Address",              title: "Our Location",              subtitle: "Easy to find",              description: "Dr Alagappa Chettiar Rd, Hudco Colony, Tatabad, Coimbatore, Tamil Nadu 641012. Located in the prime dining area with ample parking.",              imageSrc: "http://img.b2bpic.net/free-vector/gradient-infographic-elements_52683-8249.jpg"
            },
            {
              id: 2,
              tag: "Phone",              title: "Contact Us",              subtitle: "Call anytime",              description: "Phone: 098433 41001. We're available for reservations, orders, and inquiries. Quick response time guaranteed!",              imageSrc: "http://img.b2bpic.net/free-photo/healthcare-physician-consulting-remote-patients-using-phone-hospital-wearing-medicine-uniform-close-up-doctor-assistant-helping-patient-with-telehealth-communication-diagnosing_482257-13714.jpg"
            },
            {
              id: 3,
              tag: "Services",              title: "How to Order",              subtitle: "Multiple options",              description: "Dine-in for premium experience, Takeaway for convenience, Delivery for comfort, and Online ordering via Swiggy and other platforms.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-holding-smartphone_23-2148896951.jpg"
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Kadhambam"
          copyrightText="© 2025 Kadhambam Multi-Cuisine Restaurant | All Rights Reserved"
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "/" },
                { label: "Menu", href: "#menu" },
                { label: "About", href: "#about" },
                { label: "Reviews", href: "#reviews" },
                { label: "Reserve Table", href: "#reservations" }
              ]
            },
            {
              title: "Services",              items: [
                { label: "Dine-In", href: "#" },
                { label: "Takeaway", href: "tel:+919843341001" },
                { label: "Delivery", href: "https://www.swiggy.com" },
                { label: "Online Ordering", href: "https://www.swiggy.com" },
                { label: "Catering", href: "tel:+919843341001" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Call: 098433 41001", href: "tel:+919843341001" },
                { label: "Location", href: "#contact" },
                { label: "Email", href: "mailto:hello@kadhambam.com" },
                { label: "Google Reviews", href: "https://www.google.com" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
