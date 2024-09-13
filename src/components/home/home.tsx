import { AnnouncementsColumn, PaginationContainer, PostColumn, HomeContainer, PostsContainer } from "./style";

export function HomePage() {
  return (
    <HomeContainer>
      {/* Posts */}
      <PostsContainer>
        <PostColumn>How to setup Kubernetes on OCI</PostColumn>
        <PostColumn>An essay on open-source</PostColumn>
        <PostColumn>Technologies of yersterday today</PostColumn>
        <PostColumn>End of privacy frontends</PostColumn>
      </PostsContainer>
      {/* Announcements */}
      <AnnouncementsColumn>Announcements</AnnouncementsColumn>

      {/* Pagination */}
      <PaginationContainer>Pagination</PaginationContainer>
    </HomeContainer>
  );
  }