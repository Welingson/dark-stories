import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    flash: {
        success: string | null;
        error: string | null;
    }
    [key: string]: unknown;
}

export interface User {
    id: number;
    uuid: string;
    name: string;
    email: string;
    role: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Report{
    id: number;
    uuid: string;
    title: string;
    slug: string;
    content: string;
    user_id: number;
    is_published: boolean;
    view_count: number;
    created_at: string;
    updated_at: string;
    categories: Category[];
    [key: string]: unknown;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    uuid: string;
    description: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface PaginationLinks {
    active: boolean;
    label: string;
    url: string;
}

export interface Pagination {
    links: PaginationLinks[];
    current_page: number;
    first_page_url: string;
    last_page_url: string;
    from: number;
    to: number;
    path: string;
    per_page: number;
    prev_page_url: string;
    next_page_url: string;
    last_page: number;
    total: number;
}

export interface CategoryPaginated extends Pagination {
    data: Category[];
}

export interface ReportPaginated extends Pagination {
    data: Report[];
}

export interface UserPaginated extends Pagination {
    data: User[];
}
