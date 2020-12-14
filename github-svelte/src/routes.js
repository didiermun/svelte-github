import NewAdmin from "./NewAdmin.svelte";
import Admin from "./Admin.svelte";
import Navbar from "./Navbar.svelte";
import Sidenav from "./Sidenav.svelte";

const routes = [
  {
    name: "/",
    component: Sidenav,
  },
  {
    name: "/login",
    component: NewAdmin,
  },
  {
    name: "/employees",
    component: Admin,
  },
  {
    name: "/sidenav",
    component: Navbar,
  },
];

export { routes };
