import { defineStore } from 'pinia';

export const useStateStore = defineStore(
    'state',
    () => {
        const State = reactive({
            area: 'bns',
        });

        return {
            State,
        };
    },
    {
        persist: true,
    }
);
