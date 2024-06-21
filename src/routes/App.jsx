import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";


function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus) // Initializing useSelector to subscribe/get value

  return (
    <>
      <Header />
      <FetchItems/>
      {
      fetchStatus.currentlyFetching  ? <Loader/>: <Outlet/>}
      <Footer></Footer>
    </>
  );
}

export default App;
