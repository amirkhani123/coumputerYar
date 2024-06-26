import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      author {
        avatar {
          url
        }
        name
      }
      cover {
        url
      }
      id
      title
      slug
    }
  }
`;
const GET_AUTHORS = gql`
  query {
    authors {
      avatar {
        url
      }
      id
      name
      slug
    }
  }
`;
const GET_AUTHOR = gql`
  query MyQuery($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      field
      description {
        html
      }
      authorss {
        ... on Post {
          id
          slug
          cover {
            url
          }
          title
        }
      }
    }
  }
`;
const GET_POST = gql`
  query MyQuery($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        field
        name
      }
      title
      contant {
        html
      }
      cover {
        url
      }
    }
  }
`;
const SEND_COMMENT = gql`
  mutation MyMutationO(
    $name: String!
    $gmail: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        gmail: $gmail
        text: $text
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;
const GET_COMMENTS = gql`
  query MyQuery($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      text
      id
    }
  }
`;
export {
  GET_POSTS,
  GET_AUTHORS,
  GET_AUTHOR,
  GET_POST,
  SEND_COMMENT,
  GET_COMMENTS,
};
