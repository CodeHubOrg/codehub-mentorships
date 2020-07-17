export interface NavItem {
    active: boolean;
    attributes: { icon?: string };
    children: NavItem[];
    title: string;
    url: string;
}
