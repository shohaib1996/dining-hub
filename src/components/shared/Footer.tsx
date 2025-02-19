import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Navbar() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 md:gap-16 lg:gap-56">
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            Dinning Hub
            <MountainIcon className="ml-2" />
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            Discover delicious recipes and cooking tips for every occasion.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="text-gray-400 hover:text-white">
                Recipes
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">123 Street, City, Country</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">+123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">contact@dinninghub.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 pt-4">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>

        {/* Copyright & Policies */}
        <div className="text-gray-500 text-sm mt-4 md:mt-0 flex justify-between w-full space-x-6">
          <div className="flex-1 text-center">
            &copy; {new Date().getFullYear()} Dinning Hub. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex space-x-6 ml-auto">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface MountainIconProps extends React.SVGProps<SVGSVGElement> {}

function MountainIcon(props: MountainIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
