import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea
              className="w-full border border-gray-300 p-2"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
