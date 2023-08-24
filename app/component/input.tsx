"use client"
import React, { useState } from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import cloudImage from '../images/cloud.jpg';
import { InputSwitch } from 'primereact/inputswitch';

interface InputProps {
    handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    location: string;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    changeTheme: (e: any) => void;
}

const Input: React.FC<InputProps> = ({ handleSearch, setLocation, location, theme, toggleTheme, changeTheme }) => {
    const [checked, setChecked] = useState(false);
    const themeButton = (
        <InputSwitch
    onChange={(e) => {
        setChecked(e.value);
        changeTheme(e);
    }}
    checked={checked}
/>
    );

    const items = [
        {
            template: () => (
                <form className='flex' onSubmit={(e) => e.preventDefault()}>
                    <AutoComplete
                        value={location}
                        field="title"
                        placeholder="Search City"
                        minLength={1}
                        onKeyDown={handleSearch}
                        onChange={(e) => setLocation((e.target as HTMLInputElement).value)}
                    />
                    <Button type="submit" icon='pi pi-search'></Button>
                </form>
            )
        }
    ];

    return (
        <div style={{ backgroundImage: `url(${cloudImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <MegaMenu
                model={items}
                orientation="horizontal"
                start={<a className="mr-2 primary font-italic" href='/' style={{ fontSize: '2em', fontWeight: 'bold', textDecoration: 'none' }}>Weather App.</a>}
                end={themeButton}
                className='bg-primary-reverse min-h-full'
                breakpoint="960px"
            />
        </div>
    );
}

export default Input;
