"use client"

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSearchParams } from 'next/navigation';
import { schools } from '@/lib/constants';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yaXNkZWxvcm1lIiwiYSI6ImNsbXU3MzEwZjBicHgycW1xNG1hN29ldXIifQ.ommqbzSD7Ey152shCR1ZIQ'

export const MapComponent = ({ selectedSchool, setSelectedSchool }: { selectedSchool: ISchool | undefined, setSelectedSchool: (school: ISchool) => void }) => {

    const searchParams = useSearchParams()
    const mapContainer = useRef<HTMLDivElement>(null)
    let map: mapboxgl.Map

    useEffect(() => {
        map = new mapboxgl.Map({
            container: mapContainer.current as HTMLDivElement,
            center: [selectedSchool?.long || 2.213749 , selectedSchool?.lat || 46.227638],
            zoom: Number(searchParams.get("lon")) ? 16 : 6,
        })

        map.on('style.load', () => {
            //@ts-ignore
            map.setConfigProperty('basemap', 'lightPreset', 'sunset')
            addMarkers()
        })

        return () => { map.remove() }
    }, [])

    const addMarkers = () => {
        schools.forEach(school => {
            const el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundColor = 'red'; // Set the marker color to red
            el.style.borderRadius = '50%';    // Make the marker circular
            el.style.width = '20px';          // Set the width of the marker
            el.style.height = '20px';         // Set the height of the marker
            el.textContent = school.name.slice(0, 15); // Slice the name to 15 characters
    
            new mapboxgl.Marker(el)
                .setLngLat([school.long, school.lat])
                .addTo(map);

            // Add click event to the marker
            el.addEventListener('click', () => {
                setSelectedSchool(school);

                map.flyTo({
                    center: [school.long, school.lat],
                    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
                    zoom: 16
                });
            });
        });
    };

    return (
        <div ref={mapContainer} className="cursor-pointer fixed top-0 left-0 h-screen select-none w-full" />
    )
}