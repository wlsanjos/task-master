import Navbar from "../_components/Navbar";
import { validateUserSession } from "../_lib/auth/validateUserSession";

const Home = async () => {
  await validateUserSession();

  return (
    <>
      <Navbar />
      <h1>Dashboard</h1>
    </>
  );
};

export default Home;
