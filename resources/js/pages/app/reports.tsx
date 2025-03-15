import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/dashboard-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Relatos',
        href: '/relatos',
    },
];

export default function Reports() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Relatos" />
            <h1>Lista seus relatos</h1>
        </AppLayout>
    );
}
