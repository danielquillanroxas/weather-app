"use client"
import React, { useState } from 'react';
import 'primereact/resources/themes/lara-light-teal/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Input from './component/input';

const Home = () => {
    const [data, setData] = useState<any>({});
    const [location, setLocation] = useState("");
    const [displayedCity, setDisplayedCity] = useState("");
    const [error, setError] = useState("");

    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();

            const url = `http://api.weatherapi.com/v1/forecast.json?key=7bd76926b1124dbeace135141231708&q=${location}&days=7&aqi=yes&alerts=yes`;

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('');
                }
                const data = await response.json();
                setData(data);
                setLocation("");
                setDisplayedCity(data.location.name);
                setError("");
            } catch (error) {
                setError("City not found");
                setData({});
                setLocation("")
            }
        }
    };

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="bg-teal-50 min-h-screen">
            <div className='bg-white-alpha-80 min-w-full p-grid'>
                <div className='p-col justify-content-between'>
                    <Input handleSearch={handleSearch} setLocation={setLocation} location={location} />
                </div>
                {data.current && <div>Temperature in {data.location.name}, {data.location.country}: {data.current.temp_c}°C</div>}
                {error && <div>{error}</div>}
            </div>
        </div>
    );
}

export default Home;