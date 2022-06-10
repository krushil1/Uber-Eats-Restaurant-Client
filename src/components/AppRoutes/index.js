import DetailedOrder from "../../Modules/DetailedOrder";
import Orders from "../../Modules/Orders";
import RestaurantMenu from "../../Modules/RestaurantMenu";
import CreateMenuItem from "../../Modules/CreateMenuItem";
import OrderHistory from "../../Modules/OrderHistory";
import Settings from '../../Modules/Settings';
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
      <Route path="menu" element={<RestaurantMenu />} />
      <Route path="menu/create" element={<CreateMenuItem />} />
      <Route path="order-history" element={<OrderHistory />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
