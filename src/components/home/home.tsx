import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface HomePageProps {
  description: string;
  posts: { title: string; desc: string }[];
}

export function HomePage(props: HomePageProps) {
  return (
    <div className={cn("p-", "flex", "flex-col", "items-center")}>
      <h2 >{props.description}</h2>
      <Carousel>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselContent>
          {props.posts.map((post, index) => (
            <CarouselItem className={cn("basis-1/2")} key={index}>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext>Next</CarouselNext>
      </Carousel>
    </div>
  );
}
