"use client"
import { Header, Hero, MostPopular, NewsLetter , Testimonial} from "@/components";
import SimpleBar from "simplebar-react";

//* Scrollbar library to simplify the scroll bar design
import 'simplebar-react/dist/simplebar.min.css';

//* Carousel library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <Header />
        <Hero />
        <MostPopular />
        <NewsLetter />
        <Testimonial />
      </SimpleBar>
    </>
  );
}
