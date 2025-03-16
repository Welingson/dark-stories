import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {PaginationLinks} from '@/types';

interface PaginationProps {
  links: PaginationLinks[];
  className?: string;
}

const CustomPagination: React.FC<PaginationProps> = ({ 
  links, 
  className = '',
}) => {
  // Don't render pagination if there are no links or only one page
  if (!links || links.length <= 3) {
    return null;
  }

  // Remove the "Next" and "Previous" links for handling separately
  const pageLinks = links.filter(link => 
    !['&laquo; Previous', 'Next &raquo;'].includes(link.label)
  );
  
  const previousLink = links.find(link => link.label === '&laquo; Previous');
  const nextLink = links.find(link => link.label === 'Next &raquo;');

  // Function to sanitize label from Laravel's HTML entities
  const sanitizeLabel = (label: string): string => {
    return label
      .replace('&laquo;', '')
      .replace('&raquo;', '')
      .replace('Previous', '')
      .replace('Next', '')
      .trim();
  };

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      <div className="flex items-center space-x-2">
        {/* Previous Page Button */}
        <Link
          href={previousLink?.url || '#'}
          className={`flex items-center justify-center w-10 h-10 rounded-md border dark:border-gray-700 ${
            previousLink?.url 
              ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none ' 
              : 'text-gray-400 dark:text-gray-600 cursor-not-allowed pointer-events-none'
          }`}
          preserveState
          preserveScroll
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
        
        {/* Page Numbers */}
        {pageLinks.map((link, index) => {
          const isEllipsis = link.label.includes('...');
          
          if (isEllipsis) {
            return (
              <span 
                key={`ellipsis-${index}`} 
                className="flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400"
              >
                ...
              </span>
            );
          }
          
          return (
            <Link
              key={`page-${index}`}
              href={link.url || '#'}
              className={`flex items-center justify-center w-10 h-10 rounded-md focus:outline-none ${
                link.active
                  ? 'bg-black text-white font-medium '
                  : 'text-gray-700 dark:text-gray-200 border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 '
              }`}
              preserveState
              preserveScroll
            >
              {sanitizeLabel(link.label)}
            </Link>
          );
        })}
        
        {/* Next Page Button */}
        <Link
          href={nextLink?.url || '#'}
          className={`flex items-center justify-center w-10 h-10 rounded-md border dark:border-gray-700 ${
            nextLink?.url 
              ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none ' 
              : 'text-gray-400 dark:text-gray-600 cursor-not-allowed pointer-events-none'
          }`}
          preserveState
          preserveScroll
        >
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default CustomPagination;