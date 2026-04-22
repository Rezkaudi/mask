"use client";

import Script from "next/script";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    initKantoMap?: () => void;
    gm_authFailure?: () => void;
  }
}

const PREFECTURES = [
  {
    name: "東京都",
    nameEn: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
    color: "#e74c3c",
  },
  {
    name: "神奈川県",
    nameEn: "Kanagawa",
    lat: 35.4478,
    lng: 139.6425,
    color: "#3498db",
  },
  {
    name: "埼玉県",
    nameEn: "Saitama",
    lat: 35.8569,
    lng: 139.6489,
    color: "#2ecc71",
  },
  {
    name: "千葉県",
    nameEn: "Chiba",
    lat: 35.6074,
    lng: 140.1065,
    color: "#f39c12",
  },
  {
    name: "茨城県",
    nameEn: "Ibaraki",
    lat: 36.3414,
    lng: 140.4467,
    color: "#9b59b6",
  },
  {
    name: "栃木県",
    nameEn: "Tochigi",
    lat: 36.5658,
    lng: 139.8836,
    color: "#e67e22",
  },
  {
    name: "群馬県",
    nameEn: "Gunma",
    lat: 36.3914,
    lng: 139.0606,
    color: "#1abc9c",
  },
];

const KANTO_POLY = [
  { lat: 37.0, lng: 138.5 },
  { lat: 37.2, lng: 140.0 },
  { lat: 37.0, lng: 141.0 },
  { lat: 36.0, lng: 141.2 },
  { lat: 35.0, lng: 140.8 },
  { lat: 34.8, lng: 139.0 },
  { lat: 35.2, lng: 138.5 },
  { lat: 36.0, lng: 138.3 },
];

type MapKantoProps = {
  className?: string;
};

const MapKanto: React.FC<MapKantoProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Provide a friendly error if API key is invalid/missing
    window.gm_authFailure = function () {
      if (mapRef.current) {
        mapRef.current.innerHTML =
          '<div class="flex items-center justify-center h-full text-red-600">Google Maps APIキーが必要です。環境変数 NEXT_PUBLIC_GOOGLE_MAPS_API_KEY を設定してください。</div>';
      }
    };

    // Expose init callback to Google Maps script
    window.initKantoMap = function () {
      if (!mapRef.current || !window.google) return;

      const center = { lat: 36.2048, lng: 139.6917 };

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 8,
        center,
        mapTypeId: "roadmap",
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#a2daf2" }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [{ color: "#f7f1df" }],
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{ color: "#d0e3b4" }],
          },
        ],
      });

      const infoWindow = new window.google.maps.InfoWindow();

      // Markers
      PREFECTURES.forEach((p) => {
        const marker = new window.google.maps.Marker({
          position: { lat: p.lat, lng: p.lng },
          map,
          title: `${p.name} (${p.nameEn})`,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: p.color,
            fillOpacity: 0.8,
            strokeColor: "#ffffff",
            strokeWeight: 3,
          },
        });

        marker.addListener("click", () => {
          infoWindow.setContent(`
            <div style="padding: 10px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
              <h3 style="margin:0 0 5px; color:${p.color}">${p.name}</h3>
              <p style="margin:0; color:#666">${p.nameEn}</p>
              <p style="margin:5px 0 0; font-size:0.9em;">✅ サービス対応エリア</p>
            </div>
          `);
          infoWindow.open(map, marker);
        });
      });

      // Kanto polygon
      const poly = new window.google.maps.Polygon({
        paths: KANTO_POLY,
        strokeColor: "#2c3e50",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#3498db",
        fillOpacity: 0.1,
      });
      poly.setMap(map);

      // Custom control
      const controlButton = document.createElement("button");
      controlButton.className =
        "bg-white border border-white rounded shadow px-3 h-10 my-2 text-gray-800 text-sm";
      controlButton.textContent = "関東全域を表示";
      controlButton.title = "Click to recenter the map on Kanto region";
      controlButton.type = "button";
      controlButton.addEventListener("click", () => {
        map.setCenter(center);
        map.setZoom(8);
      });

      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
        controlButton
      );
    };
  }, []);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className={className}>
      {/* Map surface */}
      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
        <div ref={mapRef} className="w-full h-full">
          <div className="flex items-center justify-center h-full text-gray-500">
            地図を読み込み中...
          </div>
        </div>
      </div>

      {/* Load Google Maps JS once after hydration */}
      <Script
        id="google-maps"
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey ?? ""
          }&callback=initKantoMap&language=ja`}
        strategy="afterInteractive"
      />
    </div>
  );
};

export default MapKanto;
