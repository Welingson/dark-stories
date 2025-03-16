import AppLayout from '@/layouts/dashboard-layout';
import { ReportPaginated, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Eye, Pencil } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Relatos',
    href: '/relatos',
  },
];

interface ReportsProps {
  reports: ReportPaginated;
}

export default function Categories({ reports }: ReportsProps) {
  
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Relatos" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reports.data.map((report) => (
          <article key={report.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={`https://picsum.photos/id/${Math.floor(Math.random() * 950)}/1000/1000`}
                alt={report.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                {report.title}
              </h2>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {report.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600"
                  >
                    {category.name}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                  <Eye size={16} />
                  View
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100 transition-colors">
                  <Pencil size={16} />
                  Edit
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

    </AppLayout>
  );
}
