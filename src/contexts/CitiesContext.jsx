// /* eslint-disable react/prop-types */
// import { useState, createContext, useEffect, useContext } from "react";

// const CitiesContext = createContext();

// function CitiesProvider({ children }) {
//   const [cities, setCities] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentCity, setCurrentCity] = useState([]);
//   useEffect(function () {
//     async function fetchData() {
//       try {
//         setIsLoading(true);
//         const res = await fetch("/data/cities.json/cities");
//         const data = await res.json();
//         setCities(data);
//       } catch {
//         console.log("there was an error");
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   async function getCity(id) {
//     try {
//       setIsLoading(true);
//       const res = await fetch(`/data/cities.json/cities/${id}`);
//       const data = await res.json();
//       setCurrentCity(data);
//     } catch (error) {
//       console.log("there was an error" + error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   async function createCity(newCity) {
//     try {
//       setIsLoading(true);
//       const res = await fetch(`/data/cities.json/cities`, {
//         method: "POST",
//         body: JSON.stringify(newCity),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       setCities((cities) => [...cities, data]);
//     } catch {
//       console.log("there was an error");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   async function deleteCity(id) {
//     try {
//       setIsLoading(true);
//       await fetch(`/data/cities.json/cities/${id}`, {
//         method: "DELETE",
//       });
//       setCities((cities) => cities.filter((city) => city.id !== id));
//     } catch {
//       console.log("there was an error");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <CitiesContext.Provider
//       value={{
//         cities,
//         currentCity,
//         isLoading,
//         getCity,
//         createCity,
//         deleteCity,
//       }}
//     >
//       {children}
//     </CitiesContext.Provider>
//   );
// }

// function useCities() {
//   let context = useContext(CitiesContext);
//   if (context === undefined)
//     throw new Error("cities context was used outside provider");
//   return context;
// }

// export { CitiesProvider, useCities };
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../services/supabase"; // path to your supabase.js

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(() => {
    fetchCities();
  }, []);

  async function fetchCities() {
    setIsLoading(true);
    const { data, error } = await supabase.from("cities").select("*");
    if (!error) setCities(data);
    else console.error("Fetch error:", error.message);
    setIsLoading(false);
  }

  async function getCity(id) {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("cities")
      .select("*")
      .eq("id", id)
      .single();

    if (!error) setCurrentCity(data);
    else console.error("Get error:", error.message);
    setIsLoading(false);
  }

  async function createCity(newCity) {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("cities")
      .insert([newCity])
      .select();
    if (!error) setCities((cities) => [...cities, data[0]]);
    else console.error("Create error:", error.message);
    setIsLoading(false);
  }

  async function deleteCity(id) {
    setIsLoading(true);
    const { error } = await supabase.from("cities").delete().eq("id", id);
    if (!error) setCities((cities) => cities.filter((city) => city.id !== id));
    else console.error("Delete error:", error.message);
    setIsLoading(false);
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        currentCity,
        isLoading,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("CitiesContext was used outside the provider");
  }
  return context;
}

export { CitiesProvider, useCities };
