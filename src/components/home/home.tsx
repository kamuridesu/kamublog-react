import { GoDot, GoDotFill } from "react-icons/go";
import { PaginationContainer, PostColumn, HomeContainer, DescriptionContainer, ContentArea, PostTitle, PostBody } from "./style";

interface PostProps {
  title: string;
  desc: string;
}

interface HomePageProps {
  description: string;
  posts: PostProps[];
}

export function HomePage(props: HomePageProps) {
  console.log(props)
  return (
    <HomeContainer>
      <DescriptionContainer>{props.description}</DescriptionContainer>
      <ContentArea>
          {
            props.posts.map((post, index) => {
              return (
                <PostColumn key={index}>
                  <PostTitle>{post.title}</PostTitle>
                  <PostBody>{post.desc}</PostBody>
                </PostColumn>
              )
            })
          }
        <PaginationContainer>
          <GoDot />
          <GoDotFill />
        </PaginationContainer>
      </ContentArea>
    </HomeContainer>
  );
}