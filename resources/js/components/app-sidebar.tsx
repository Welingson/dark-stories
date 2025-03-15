import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SharedData, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, Users2, FileText, ListFilter } from 'lucide-react';
import AppLogo from './app-logo';

const appNavItems: NavItem[] = [
    {
        title: 'Painel',
        href: '/app',
        icon: LayoutGrid,
    },
    {
        title: 'Relatos',
        href: '/app/relatos',
        icon: FileText,
    }
]

const adminNavItems: NavItem[] = [
    {
        title: 'Painel',
        href: '/admin',
        icon: LayoutGrid,
    },
    {
        title: 'Usuários',
        href: '/admin/usuarios',
        icon: Users2,
    },
    {
        title: 'Relatos',
        href: '/admin/relatos',
        icon: FileText,
    },
    {
        title: 'Categorias',
        href: '/admin/categorias',
        icon: ListFilter,
    }
];


export function AppSidebar() {

    const { props } = usePage<SharedData>();



    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/admin" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={props.auth.user.role === 'admin' ? adminNavItems : appNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
