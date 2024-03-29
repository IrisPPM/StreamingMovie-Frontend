import React, { useEffect } from "react";
//import { GET_MOVIES } from "../graphql/Queries";
//import { useLazyQuery, useMutation } from "@apollo/client";
//import { REMOVE_MOVIE } from "../graphql/Mutation"
//import { Link } from "react-router-dom"
import Slider from "./Slider";
import ReleseSection from "./Relese";
import NewsSection from "./News";
import PopularSection from "./Popular";




const Home = () => {

/*     //We need to use useEffect in order to prevetn multi-render issues
    useEffect(() => {
        getMovies()
    }, [])


    const [getMovies, { data, error }] = useLazyQuery(GET_MOVIES);

    const [removeMovie] = useMutation(REMOVE_MOVIE, {
        //refetch the query movies
        refetchQueries: [{ query: GET_MOVIES }]
    })

    if (error) return <h1>Error {error} </h1>
    if (data) {
        console.log(data)
    } */

    return (
        <>
            <Slider/>
            <ReleseSection/>
            <NewsSection/>
            <PopularSection/>
           {/*  <div className=" container bg-black bg-auto grid grid-cols-6 gap-6">
                {data &&
                    data.getMovies.map(({ _id, title, description, image, date }) => (
                        <div className="p-1">
                            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer hover:grayscale-0">
                                <img className="h-50" src={image} alt="" />
                            </figure>
                            <a href="#">
                                <h3 className="text-xl text-white p-4">{title}</h3>
                            </a>

                        </div>
                    ))

                }
            </div> */}
        </>

    );
};

export default Home;



