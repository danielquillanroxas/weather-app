"use client";
import React, { useState, useEffect, useRef } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Input from './component/input';
import WeekForecast from './component/WeekForecast';
import Current from './component/Current';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';
import PrimeReact from 'primereact/api';


const Home = () => {
    const [checked, setChecked] = useState(true);
    const [theme, setTheme] = useState("dark");

    const changeTheme = (e) => {
      setChecked(e.value);
      const newTheme = theme === "dark" ? "light" : "dark";
      PrimeReact.changeTheme(
        `lara-${theme}-blue`,
        `lara-${newTheme}-blue`,
        "theme-link",
        () => setTheme(newTheme)
      );
    };

    const [data, setData] = useState<any>({});
    const [location, setLocation] = useState("");
    const [displayedCity, setDisplayedCity] = useState("");
    const [error, setError] = useState("");
    const msgs = useRef(null);

    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const url = `http://api.weatherapi.com/v1/forecast.json?key=7bd76926b1124dbeace135141231708&q=${location}&days=7&aqi=yes&alerts=yes`;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("");
          }
          const data = await response.json();
          setData(data);
          setLocation("");
          setDisplayedCity(data.location.name);
          setError("");
        } catch (error) {
          setError("City not found");
          setData({});
          setLocation("");
        }
      }
    };

    const header = (
      <img
        alt="Card"
        src="https://cdn.pixabay.com/photo/2017/05/20/20/22/clouds-2329680_1280.jpg"
        style={{ height: "80vh" }}
      />
    );

    let content;
    if (Object.keys(data).length === 0 && error === "") {
      content = (
        <div>
          <Card
            title="The most reliable weather forecast source"
            header={header}
            className="md:w-50rem"
          >
            <p className="m-0">
              Welcome to Weather App! Dive into accurate and real-time weather
              insights tailored for your location.
            </p>
          </Card>
        </div>
      );
    } else if (error !== "") {
      content = (
        <div className="card">
          <Message text="Invalid Input, enter a city name" severity="error" />
        </div>
      );
    } else {
      content = (
        <>
          <div className="bg-primary-reverse">
            <Current data={data} />
            <WeekForecast data={data} />
          </div>
          <div>
            {/* <WeatherDetails data={data} /> */}
          </div>
        </>
      );
    }

    return (
      <div
        className={`bg-teal-50 min-h-screen ${theme === "dark" ? "dark-theme" : "light-theme"}`}
      >
        <div className="bg-white-alpha-80 min-w-full p-grid">
          <div className="p-col justify-content-between">
            <Input handleSearch={handleSearch} setLocation={setLocation} location={location} changeTheme={changeTheme} theme={theme} />
          </div>
        </div>
        {content}
      </div>
    );
  };

export default Home;
