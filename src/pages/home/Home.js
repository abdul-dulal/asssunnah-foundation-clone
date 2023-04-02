import Funadation from "./Ass_sunnah_funadation";
import Change from "./Change";
import Donate from "./Donate";
import Gallery from "./Gallery";
import Projects from "./Projects";
import Updatenews from "./Updatenews";
import Video from "./Video";
import Volunteer from "./Volunteer";
import MessengerCustomerChat from "react-messenger-customer-chat";

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
        <Volunteer />
        <MessengerCustomerChat
          pageId="489402087935358"
          appId="1582497382202328"
        />
        ,
      </div>
    </div>
  );
};

export default Home;
