
import Navbar from "../components/navbar";

import Link from "next/link";

const Homepage = () => {

  return (
    <div className="flex ">
      <Navbar />
      <Link href='/dashboard' >dashboard</Link>
    </div>
  );
};

export default Homepage;
