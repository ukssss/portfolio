import { atom } from 'recoil';

export const sideCarState = atom<boolean>({
    key: 'sideCarState',
    default: false,
});
