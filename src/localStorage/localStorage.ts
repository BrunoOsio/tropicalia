import { storage } from "../GlobalStyles/globalValues";
import { SaveLocalStorage } from "./SaveLocalStorage";

export const saveLocalStorage = (localStorageDto: SaveLocalStorage) => {
    const { candidate1Name, candidate1Party, candidate2Name, candidate2Party, candidate3Name, candidate3Party, candidate4Name, candidate4Party, candidate5Name, candidate5Party } = localStorageDto;

    clearLocalStorage();

    localStorage.setItem(storage.candidate1Name, candidate1Name);
    localStorage.setItem(storage.candidate1Party, candidate1Party);
    localStorage.setItem(storage.candidate2Name, candidate2Name);
    localStorage.setItem(storage.candidate2Party, candidate2Party);
    localStorage.setItem(storage.candidate3Name, candidate3Name);
    localStorage.setItem(storage.candidate3Party, candidate3Party);
    localStorage.setItem(storage.candidate4Name, candidate4Name);
    localStorage.setItem(storage.candidate4Party, candidate4Party);
    localStorage.setItem(storage.candidate5Name, candidate5Name);
    localStorage.setItem(storage.candidate5Party, candidate5Party);
}

export const clearLocalStorage = () => {
    localStorage.clear();
}

export const getCandidate1Name = (): string => {
    return String(localStorage.getItem(storage.candidate1Name))
}


export const getCandidate1Party = (): string => {
    return String(localStorage.getItem(storage.candidate1Party))
}


export const getCandidate2Name = (): string => {
    return String(localStorage.getItem(storage.candidate2Name))
}


export const getCandidate2Party = (): string => {
    return String(localStorage.getItem(storage.candidate2Party))
}


export const getCandidate3Name = (): string => {
    return String(localStorage.getItem(storage.candidate3Name))
}


export const getCandidate3Party = (): string => {
    return String(localStorage.getItem(storage.candidate3Party))
}


export const getCandidate4Name = (): string => {
    return String(localStorage.getItem(storage.candidate4Name))
}


export const getCandidate4Party = (): string => {
    return String(localStorage.getItem(storage.candidate4Party))
}


export const getCandidate5Name = (): string => {
    return String(localStorage.getItem(storage.candidate5Name))
}


export const getCandidate5Party = (): string => {
    return String(localStorage.getItem(storage.candidate5Party))
}

