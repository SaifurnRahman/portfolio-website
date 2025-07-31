import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactSection = () => (
  <section className="w-full bg-black py-12 px-4">
    {/* Section Title */}
    <div className="text-center mb-10">
      <div className="inline-block px-4 py-1 border-2 border-violet-500 rounded-md text-white text-sm mb-3">
        Contact Me
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-1">
        Let’s Talk for <span className="text-violet-500">Your Next Projects</span>
      </h2>
    </div>
    {/* Main Grid */}
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-1">Your Name *</label>
            <input type="text" placeholder="Ex. John Doe" className="w-full bg-[#18181b] border border-violet-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-white mb-1">Email *</label>
            <input type="email" placeholder="example@gmail.com" className="w-full bg-[#18181b] border border-violet-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-1">Phone *</label>
            <input type="text" placeholder="Enter Phone Number" className="w-full bg-[#18181b] border border-violet-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500" />
          </div>
          <div>
            <label className="block text-white mb-1">I'm Interested in *</label>
            <select className="w-full bg-[#18181b] border border-violet-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
              <option>Select</option>
              <option>Web Design</option>
              <option>Graphic Design</option>
              <option>Web Devolopment</option>
              <option>Logo Design</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-1">Budget Range (USD) *</label>
            <select className="w-full bg-[#18181b] border border-violet-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
              <option>Select Range</option>
              <option>$100- $200</option>
              <option>$200 - $500</option>
              <option>$500+</option>
            </select>
          </div>
          <div>
            <label className="block text-white mb-1">Country *</label>
            <select className="w-full bg-[#18181b] border border-violet-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500">
              <option>Select Country</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Bangladesh</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-white mb-1">Your Message *</label>
          <textarea rows={4} placeholder="Enter here..." className="w-full bg-[#18181b] border border-violet-500 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"></textarea>
        </div>
        <button type="submit" className="mt-2 bg-violet-500 hover:bg-violet-600 text-black font-semibold px-8 py-2 rounded-full transition">
          Send Message
        </button>
      </form>
      {/* Contact Info */}
      <div className="bg-[#18181b] rounded-2xl p-6 flex flex-col justify-between shadow-lg border border-violet-500">
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Address</h3>
          <p className="text-gray-300 mb-4">Banasree, Rampura<br />Dhaka</p>
          <h3 className="text-violet-500 text-lg font-bold mb-2">Contact</h3>
          <p className="text-gray-300 mb-1">Phone : 01822690061</p>
          <p className="text-gray-300 mb-4">Email : saifurrahman24to7@gmail.com</p>
          <h3 className="text-white text-lg font-bold mb-2">Time</h3>
          <p className="text-gray-300 mb-1">Monday - Friday : 10:00 - 20:00</p>
          <p className="text-gray-300 mb-4">Saturday - Sunday : 11:00 - 18:00</p>
        </div>
        <div className="mt-6">
          <div className="bg-violet-500 rounded-xl p-4 flex flex-col items-center">
            <span className="text-black font-semibold mb-2">Stay Connected</span>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-white text-2xl"><FaFacebookF /></a>
              <a href="#" className="text-black hover:text-white text-2xl"><FaTwitter /></a>
              <a href="#" className="text-black hover:text-white text-2xl"><FaPinterestP /></a>
              <a href="#" className="text-black hover:text-white text-2xl"><FaInstagram /></a>
              <a href="3" className="text-black hover:text-white text-2xl"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;