
import Navbar from "../components/navbar";

import Link from "next/link";

const Homepage = () => {

  return (
    <div className="flex relative">
      <Navbar />
      <Link href={'/dashboard'} >dashboard</Link>
    </div>
  );
};

export default Homepage;
