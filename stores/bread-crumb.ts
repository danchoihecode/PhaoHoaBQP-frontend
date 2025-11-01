import { defineStore } from 'pinia';

interface BreadCrumb {
    label: string;
    path: string;
}
export const useBreadCrumbStore = defineStore('breadCrumb', {
    state: () => ({
        breadCrumbs: [] as BreadCrumb[]
    }),
    actions: {
        setBreadCrumbs(newCrumbs: BreadCrumb[]) {
            this.breadCrumbs = newCrumbs;
        }
    },
    getters: {
        getBreadCrumbs: (state) => state.breadCrumbs
    }
});
