import Incidents from '@src/pages/Incidents';
import CustomerOverview from '@src/pages/Customers';
import Orders from '@src/pages/Orders';
import Order from '@src/pages/Order';
import { Routes, Route } from 'react-router-dom';
import CustomerLayout from '@src/components/layout/CustomerLayout';
import App from '@src/components/layout/App';
import IncidentsHeatmap from '@src/pages/IncidentsHeatmap';
import Login from '@src/pages/Login';
import Carriers from '@src/pages/Carriers';
import Sensor from '@src/pages/Sensor';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App />}>
        <Route index element={<CustomerOverview />} />
        <Route path="customers/:customer" element={<CustomerLayout />}>
          <Route path="incidents">
            <Route index element={<Incidents />} />
            <Route path="heatmap" element={<IncidentsHeatmap />} />
          </Route>
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path=":order" element={<Order />} />
          </Route>
          <Route path="carriers">
            <Route index element={<Carriers />} />
          </Route>
        </Route>
      </Route>
      <Route path="/sensor" element={<Sensor />} />
    </Routes>
  );
}

export default Router;
