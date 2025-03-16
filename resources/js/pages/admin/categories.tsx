import AppLayout from '@/layouts/dashboard-layout';
import { CategoryPaginated, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import CustomPagination from '@/components/custom-pagination';
import { Pencil } from 'lucide-react';
import Heading from '@/components/heading';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Categorias',
    href: '/categorias',
  },
];

interface CategoriesProps {
  categories: CategoryPaginated;
}

export default function Categories({ categories }: CategoriesProps) {
  console.log(categories);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Categorias" />
      <Heading title="Categorias" description="Categorias dos relatos" />
      <div className='border rounded'>
        <Table className=''>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.data.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>
                  <div className='flex justify-end'>
                    <Link href={`/admin/categorias/${category.id}`}><Pencil/></Link>
                    <button className='btn btn-sm btn-danger'>Excluir</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                Total {categories.total} registros
              </TableCell>
              <TableCell className='text-right'>
                <CustomPagination
                  links={categories.links}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </AppLayout>
  );
}
