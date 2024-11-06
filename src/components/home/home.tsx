import styled from "styled-components";


export const HomePageContainer = styled.div`
  padding: 2rem;
`;


interface HomePageProps {
  description: string;
  posts: { title: string; desc: string }[];
}

export function HomePage(props: HomePageProps) {
  return (
    <div>
      <h1>Home</h1>
      <p>{props.description}</p>
      <ul>
        {props.posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}