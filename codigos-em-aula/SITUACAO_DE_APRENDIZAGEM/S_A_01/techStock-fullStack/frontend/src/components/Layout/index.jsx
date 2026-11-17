
import { Outlet } from "react-router-dom";

import {Header} from "../Header/index.jsx";
import {Footer} from "../Footer/index.jsx";


export function Layout() {

  return (
    <>

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

    </>
  );
}