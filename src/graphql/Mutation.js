import { gql } from "@apollo/client";

export const CREATE_MOVIE = gql`
mutation createMovie($title: String!, $description: String!, $image: String!, $date: String!){
    createMovie(input: {title: $title, description: $description, image: $image, date: $date }){
        _id
        title
        description
        image
        date
        typeMovie
    }
  
}
`
export const REMOVE_MOVIE = gql`
mutation removeMovie($id: ID!){
    removeMovie(id: $id){
        _id
        title
        description
        image
        date
    }
}
`
export const UPDATE_MOVIE = gql`
mutation updateMovie($title: String!, $description: String!, $image: String!, $date: String!, $_id: ID){
    updateMovie(input: {title: $title, description: $description, image: $image, date: $date } ,  _id : $_id) {
        _id
        title
        description
        image
        date
        typeMovie
    }
}
`

