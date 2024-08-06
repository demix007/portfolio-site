import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';
import ABDUL from '../../assets/abdul.jpeg';
import KEENAN from '../../assets/keenan.jpeg';
import PAUL from '../../assets/paul.jpeg';
import KASHIF from '../../assets/kashif.jpeg';
import ALEX from '../../assets/alex.jpeg';
import ADESANYA from '../../assets/adesanya.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      avatar: ABDUL,
      id: 1,
      name: 'Abdul Saboor Sohaib',
      review:
        'Ayodeji Abidemi is exactly the sort of software developer any company would love. I met them while struggling with a challenging data structures problem, and within a few minutes, they managed to explain a concept I had been working with for days. They have a great way of simplifying complex problems into bite-sized pieces, and as a junior developer, that was really valuable for me. They are also just a fun person to chat with! If you need to get a job done and efficiently, Ayodeji Abidemi definitely the person for you.',
    },
    {
      avatar: KEENAN,
      id: 2,
      name: 'Keenan Botes',
      review:
        'Ayodeji has been a good friend and has proved to be a talented software developer in Javascript and React. His portfolio showcases numerous quality projects that have been built with other coding partners. I highly recommend Ayodeji as he has the professional skills proven to deliver quality work.',
    },
    {
      avatar: KASHIF,
      id: 2,
      name: 'Kasheef Saleem',
      review:
        'I had the privilege of collaborating with Ayodeji, and I wholeheartedly recommend him for his position. Ayodeji consistently exhibits an exceptional work ethic and delivers outstanding results. His ability to grasp new concepts swiftly and his commitment to surpassing expectations are truly remarkable. Ayodeji technical proficiency is complemented by his excellent communication skills, making him an invaluable asset to any team. ',
    },
    {
      avatar: ALEX,
      id: 2,
      name: 'Alex Ogoto',
      review:
        'I am writing to wholeheartedly recommend Ayodeji Abidemi has exceptional software development abilities, both in backend and front-end development. Throughout the time I have known him, his technical expertise and commitment to producing high-quality code have consistently impressed me.',
    },
    {
      avatar: PAUL,
      id: 3,
      name: 'Chukwuma Mosanya',
      review:
        'Ayodeji is a very hard-working person who can tackle any software development problem with ease. We have worked together on several projects, and I found him highly skilled and dedicated professional. He uses software development skills, attention to detail, and critical thinking to tackle and solve technical problems. He has proven his skillset and coding ability as a web developer by building multiple peer programming projects in React, JavaScript and Bootstrap. I am glad to have worked with him and have no hesitation in recommending him to potential employers',
    },
    {
      avatar: ADESANYA,
      id: 4,
      name: 'Adejuwon Adesanya',
      review:
        'I recommend Ayodeji Abidemi to anyone looking for a software developer with skills in HTML, CSS, JavaScript, React/Redux, Ruby, Ruby on Rails. while, also being an astute problem solver',
    },
  ];

  return (
    <section id="testimonials">
      <h5>Testimonials from my peers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container container__testimonials"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ id, avatar, name, review }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="peer__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="peer__name">{name}</h5>
            <small className="peer__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
