export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="w-11/12 m-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Website Name and About */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">SportsNest</h1>
          <p className="mt-4 text-sm">
            Your one-stop shop for all sports equipment and accessories.
            Discover quality gear for every sports enthusiast.
          </p>
        </div>
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <ul>
            <li className="text-sm">📧 Email: support@sportsgearhub.com</li>
            <li className="text-sm">📞 Phone: +1 (555) 123-4567</li>
            <li className="text-sm">
              📍 Address: 123 Sports Lane, Fitness City
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://facebook.com"
              className="text-gray-300 hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-300 hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-300 hover:text-pink-500 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-300 hover:text-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} SportsNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
