export interface GeoResponse {
    name: string;
    lat: number;
    lon: number;
    country: string;
    state?: string;
}

export interface WeatherResponse {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    name: string;
    cod: number;
}

export interface WeatherState {
    cityWeather: WeatherResponse | null;
}

export interface WeatherCardProps {
    cityWeather: {
        weather: {
            icon: string;
            main: string;
        }[];
        name: string;
        main: {
            temp: number;
        };
    };
}
