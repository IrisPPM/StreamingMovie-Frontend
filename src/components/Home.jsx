import React, { useEffect } from "react";
import { GET_MOVIES } from "../graphql/Queries";
import { useLazyQuery, useMutation } from "@apollo/client";
import { REMOVE_MOVIE } from "../graphql/Mutation"
import { Link } from "react-router-dom"



const Home = () => {

    //We need to use useEffect in order to prevetn multi-render issues
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
    }

    return (
        <div className=" container bg-black bg-auto grid grid-cols-4 gap-4">
            {data &&
                data.getMovies.map(({ _id, title, description, image, date }) => (                             
                            <div className="p-5">
                            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer hover:grayscale-0">
                                <img className="rounded-lg h-80" src={image} alt="" />
                            </figure>
                                <a href="#">
                                    <h3 className="text-xl text-white p-4">{title}</h3>
                                </a>
                                <p className="font-normal text-gray-700 dark:text-gray-400"> {description} </p>

                                {/* <div data-id={_id}>
                                    <Link to="/"
                                        state={{ _id: _id, title: title, description: description, image: image, date: date }}
                                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                        
                                    </Link>
                                </div> */}
                            </div>
                        
                        

                    
                ))

            }
        </div>

    );
};

export default Home;



