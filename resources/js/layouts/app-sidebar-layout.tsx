import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { SharedData, type BreadcrumbItem } from '@/types';
import { useEffect, type PropsWithChildren } from 'react';
import { Toaster, toast } from 'sonner'
import { usePage } from '@inertiajs/react';


export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const { props } = usePage<SharedData>();
    
    useEffect(() => {
        if (props.flash.error) {
            toast.error(props.flash.error);
        }
        if (props.flash.success) {
            toast.success(props.flash.success);
        }
    }, [props.flash]);
    
    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                <Toaster richColors/>
                <main className='p-3 '>
                    {children}
                </main>
            </AppContent>
        </AppShell>
    );
}
