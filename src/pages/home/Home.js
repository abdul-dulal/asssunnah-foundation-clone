import Funadation from "./Ass_sunnah_funadation";
import Change from "./Change";
import Donate from "./Donate";
import Gallery from "./Gallery";
import Projects from "./Projects";
import Updatenews from "./Updatenews";
import Video from "./Video";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <Donate />

        <Funadation />
        <Change />
        <Updatenews />
        <Projects />
        <Video />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
