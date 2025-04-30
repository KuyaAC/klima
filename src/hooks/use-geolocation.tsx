import type { Coordinates } from "@/api/types";
import { useState } from "react";

interface useGeolocationState{
    coordinates: Coordinates | null;
    error: string | null;
    isLoading: boolean;
}

export function useGeolocation(){
    const [locationData, setLocationData] = useState<GeolocationState>({
        coordinates: null,
        error: null,
        isLoading: true,

    });
}