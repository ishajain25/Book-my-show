import axios from "axios";
import React, {useState, useEffect} from "react";

//Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from "../config/TempPosters.config";

const HomePage =() => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    //popular movies
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        }
        
        requestPopularMovies();
    } , []);

    //top rated movies
    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        }
        
        requestTopRatedMovies();
    } , []);

    //upcoming movies
    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        }
        
        requestUpcomingMovies();
    } , []);

    return (
        <>
            <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4 ">
                <h1 className="text-2xl font-bold text-gray-800 my-3 lg:px-16 md:px-10">
                    The Best of Entertainment
                </h1>
                <div className="lg:px-16 md:px-10">
                    <EntertainmentCardSlider />
                </div>

            </div>

            <div className="bg-bms-800 py-12 ">
                <div className="container mx-auto px-4 flex flex-col gap-3">
                <div className="lg:px-16 md:px-10">
                <div className=" hidden md:flex">
                    <img
                        src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                        alt="Premier"
                        className="w-full h-full"
                    />
                </div>
                </div>
                <div className="lg:px-16 md:px-10">
                <PosterSlider 
                    images={popularMovies} 
                    title="Premieres" 
                    subtitle="Brand New Releases Every Friday." 
                    isDark={true}
                />
                </div>
                </div> 
            </div>
            </div>

            <div className="container mx-auto px-4 my-8">
                <div className="lg:px-16 md:px-10">
                <PosterSlider 
                    images={topRatedMovies} 
                    title="Online Streaming events" 
                    isDark={false}
                />
                </div>
            </div>

            <div className="container mx-auto px-4 my-8">
               <div className="lg:px-16 md:px-10">
               <PosterSlider 
                    images={upcomingMovies} 
                    title="Outdoor Events" 
                    isDark={false}
                />
               </div>
            </div>
        </>
    )
}

export default HomePage;