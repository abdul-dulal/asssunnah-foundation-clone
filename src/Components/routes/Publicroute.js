import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Donation from "../../pages/donation/Donation";
import Donationdetails from "../../pages/donation/Donationdetails";
import Gallery from "../../pages/gallery/Gallery";
import Home from "../../pages/home/Home";
import Member from "../../pages/member/Member";
import News from "../../pages/news/News";
import NewsDetails from "../../pages/news/NewsDetails";
import Project from "../../pages/project/Project";
import Success from "../../pages/Success";
import Video from "../../pages/Video";
import Volunteer from "../../pages/volunteer/Volunteer";

export const PublicRoute = [
  { path: "/", name: "home", Component: Home },
  { path: "/home", name: "home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/project", name: "About", Component: Project },
  { path: "/gallery", name: "About", Component: Gallery },
  { path: "/member", name: "About", Component: Member },
  { path: "/video", name: "About", Component: Video },
  { path: "/volunteer", name: "About", Component: Volunteer },
  { path: "/news", name: "About", Component: News },
  { path: "/news-details/:id", name: "About", Component: NewsDetails },
  { path: "/success", name: "About", Component: Success },
  { path: "/contact", name: "About", Component: Contact },
  { path: "/donate", name: "About", Component: Donation },
  { path: "/donate/:category", name: "About", Component: Donationdetails },
];
