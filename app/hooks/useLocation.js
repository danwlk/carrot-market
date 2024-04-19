import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
    const [location, setLocation] = useState(null);

    const getLocation = async () => {
        try {
            const { granted } =
                await Location.requestForegroundPermissionsAsync();
            if (granted) {
                const {
                    coords: { latitude, longitude },
                } = await Location.getCurrentPositionAsync();
                setLocation({ latitude, longitude });
            }
        } catch (error) {
            alert('An error has occured while getting your location', error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return location;
};

export default useLocation;
