import { Dumbbell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <Dumbbell className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold">FitGym Management</span>
          </div>
          <p className="text-gray-400 text-center">
            © 2024 FitGym Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;