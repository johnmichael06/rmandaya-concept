import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-onyx text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        
        <div className="md:col-span-1">
          <h4 className="font-playfair text-2xl mb-6">The Royal Mandaya</h4>
          <p className="text-gray-400 text-sm leading-loose font-montserrat">
            Experience the warmth of true Filipino hospitality in a setting of refined elegance.
          </p>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-royal-gold">Contact</h5>
          <ul className="text-sm text-gray-400 space-y-4 font-montserrat">
            <li>J. Palma Gil St, Davao City</li>
            <li>Philippines, 8000</li>
            <li>+63 82 225 8888</li>
            <li>info@royalmandaya.com</li>
          </ul>
        </div>

        <div>
           <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-royal-gold">Explore</h5>
           <ul className="text-sm text-gray-400 space-y-4 font-montserrat">
             <li><a href="#" className="hover:text-royal-gold">Accommodations</a></li>
             <li><a href="#" className="hover:text-royal-gold">Dining</a></li>
             <li><a href="#" className="hover:text-royal-gold">Meetings & Events</a></li>
             <li><a href="#" className="hover:text-royal-gold">Offers</a></li>
           </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-royal-gold">Newsletter</h5>
          <p className="text-xs text-gray-400 mb-4">Subscribe for exclusive offers.</p>
          <div className="flex border-b border-gray-600 pb-2">
            <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full text-sm text-white placeholder-gray-600" />
            <button className="text-royal-gold uppercase text-xs font-bold">Join</button>
          </div>
        </div>

      </div>
      <div className="text-center mt-10 text-gray-500 text-xs uppercase tracking-wider">
        &copy; {new Date().getFullYear()} The Royal Mandaya Hotel. All Rights Reserved.
      </div>
    </footer>
  );
};