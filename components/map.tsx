"use client"

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yaXNkZWxvcm1lIiwiYSI6ImNsbXU3MzEwZjBicHgycW1xNG1hN29ldXIifQ.ommqbzSD7Ey152shCR1ZIQ'

export const MapComponent = ({ lat, lon }: { lat: number, lon: number }) => {
    const mapContainer = useRef<HTMLDivElement>(null)
    let map: mapboxgl.Map

    useEffect(() => {
        map = new mapboxgl.Map({
            container: mapContainer.current as HTMLDivElement,
            center: [lon, lat],
            zoom: 6,
        })
        //map.scrollZoom.disable()
        //map.boxZoom.disable()

        map.on('style.load', () => {
            //@ts-ignore
            map.setConfigProperty('basemap', 'lightPreset', 'sunset')
        })

        return () => { map.remove() }
    }, [lat, lon])

    return (
        <div ref={mapContainer} className="cursor-pointer fixed top-0 left-0 h-screen select-none w-full" />
    )
}