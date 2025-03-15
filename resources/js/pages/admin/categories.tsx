import AppLayout from '@/layouts/dashboard-layout';
import { CategoryPaginated, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categorias" />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nome</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.data.map((category) => (
                        <TableRow key={category.id}>
                            <TableCell>{category.id}</TableCell>
                            <TableCell>{category.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </AppLayout>
    );
}
