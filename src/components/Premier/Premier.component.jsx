import React from 'react'
import Slider from 'react-slick';

import Poster from '../Poster/poster.component';

const Premier = () => {

    const settings = {
        Infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide:0,
        responsive: [{
            breakpoints: 1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:2,
                Infinite: true,
            }
        },
        {
            breakpoints: 600,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                InitialSlide: 1,
            }
        },
        {breakpoints: 480,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
            }}
        ],
    };

    const PremierImages = [
        {
          src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
          alt: "zack",
          title: "Zacl",
          subtitle: "english",
        },
        {
          src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
          alt: "zack",
          title: "Zacl",
          subtitle: "english",
        },
        {
          src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
          alt: "zack",
          title: "Zacl",
          subtitle: "english",
        },
        {
          src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
          alt: "zack",
          title: "Zacl",
          subtitle: "english",
        },
        {
          src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
          alt: "zack",
          title: "Zacl",
          subtitle: "english",
        },
        {
          src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
          alt: "zack",
          title: "Zacl",
          subtitle: "english",
        },
        {
          src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
          alt: "zack",
          title: "Zacl",
          subtitle: "english",
        },
        {
          src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
          alt: "zack",
          title: "Zacl",
          subtitle: "english",
        },
      ];

    return (
        <>
            <div className="flex flex-col items-start">
                <h3 className="text-white text-xl font-bold">
                    Premieres
                </h3>
                <p className="text-white text-sm"> 
                    Brand New Release Every Friday.
                </p>
            </div>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} isDark/> 
                ))}
            </Slider>
        </>
    )
}

export default Premier;
