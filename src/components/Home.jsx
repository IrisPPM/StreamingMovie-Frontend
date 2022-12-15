import React, { useEffect } from "react";
import { GET_MOVIES } from "../graphql/Queries";
import { useLazyQuery, useMutation } from "@apollo/client";
import { REMOVE_MOVIE } from "../graphql/Mutation"
import {Link} from "react-router-dom" 



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
        <div>
            {data &&
                data.getMovies.map(({ _id, title, description, image, date }) => (

                    <div className="grid gap-4 grid-cols-3 grid-rows-3">

                        <div>
                            <h3>Created at:<span>{date}</span></h3>
                        </div>

                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {title}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            {description}
                        </p>
                        <div data-id={_id}>
                            <Link to="/"
                                state={{ _id: _id, title: title, content: content, author: author, date: date }}
                                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Update
                            </Link>
                            <button
                                onClick={async (e) => {
                                    //getting the document id
                                    let getDocumentId = e.target.parentElement.getAttribute("data-id");

                                    //Calling the remove mutation and refetching the note list
                                    return await removeMovie({ variables: { id: getDocumentId } })
                                }}
                                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >

                                Delete
                            </button>
                        </div>
                    </div>
                ))

            }





        </div>

    );
};

export default Home;

