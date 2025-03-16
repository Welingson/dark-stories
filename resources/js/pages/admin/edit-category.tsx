import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/dashboard-layout';
import { type BreadcrumbItem, Category } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categorias',
        href: '/admin/categorias',
    },
    {
        title: 'Editar',
        href: '/admin/categorias/1',
    }
];

interface CategoryProps {
    category: Category;
}

interface CategoryForm {
    name: string;
    description: string;
}

export default function EditCategory({ category }: CategoryProps) {
    console.log(category.description);
    
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<CategoryForm>>({
        name: category.name,
        description: category.description,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('admin.categories.update', {
            id: category.id
        }), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={category.name} />
            <Heading title="Editar uma categoria" description="Editar categoria" />

            <form onSubmit={submit} className="space-y-6">
                <div className="grid gap-1">
                    <Label htmlFor="name">Nome</Label>

                    <Input
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoComplete="name"
                        placeholder="Nome da categoria"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="name">Descrição</Label>
                    
                    <Textarea
                        id="description"
                        className="mt-1 block w-full"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        required
                        autoComplete="description"
                        placeholder="Descrição da categoria"
                        rows={5}
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Salvar</Button>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-neutral-600">Salvo</p>
                    </Transition>
                </div>
            </form>

        </AppLayout>
    );
}
