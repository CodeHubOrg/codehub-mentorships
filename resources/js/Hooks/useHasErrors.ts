import { PageProps } from '@inertiajs/inertia';

export const useHasErrors = (page: PageProps) => {
    return !!Object.keys(page['errors']).length;
};
