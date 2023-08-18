"use client"
import { MegaMenu } from 'primereact/megamenu';
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import cloudImage from '../images/cloud.jpg';

interface InputProps {
    handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    location: string;
}

const Input: React.FC<InputProps> = ({ handleSearch, setLocation, location }: InputProps) => {

    const items = [
        {
            label: 'Regions',
            icon: 'pi pi-map-marker',
        },
        {
            label: 'Weather News',
            icon: 'pi pi-envelope'
        },
        {
            template: () => {
                return (
                    <form className='flex' onSubmit={(e) => e.preventDefault()}>
                        <AutoComplete
                            value={location}
                            field="title"
                            placeholder="Search City"
                            minLength={1}
                            onKeyDown={handleSearch}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <Button type="submit" icon='pi pi-search'></Button>
                    </form>
                );
            }
        }
    ];

    const start = <a className="mr-2 text-blue-900 font-italic" href='/' style={{ fontSize: '2em', fontWeight: 'bold', textDecoration: 'none' }}>Weather App.</a>;

    return (
        <div>
            <div style={{ backgroundImage: `url(${cloudImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <MegaMenu model={items} orientation="horizontal" start={start} className='bg-teal-100 min-h-full' breakpoint="960px"></MegaMenu>
            </div>
        </div>
    );
}

export default Input;