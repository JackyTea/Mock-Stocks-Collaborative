import React from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Markets from "./components/Markets/Markets";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import StockDetails from "./components/StockDetails/StockDetails";
import NotFound from "./components/NotFound/NotFound";
import Auth from "./components/Auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PurchasedStocks from "./components/PurchasedStocks/PurchasedStocks";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import PurchasedStockDetails from "./components/PurchasedStockDetails/PurchasedStockDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Guide from "./components/Guide/Guide";
import Careers from "./components/Careers/Careers";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="font-inter">
      <ScrollToTop>
        <Navigation />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/guide" element={<Guide />} />
          <Route exact="true" path="/careers" element={<Careers />} />
          <Route exact="true" path="/markets" element={<Markets />} />
          <Route exact="true" path="/auth" element={<Auth />} />
          <Route exact="true" path="/stock/:id" element={<StockDetails />} />
          <Route exact="true" path="/dashboard" element={<ProtectedRoute />}>
            <Route exact="true" path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route exact="true" path="/purchased" element={<ProtectedRoute />}>
            <Route
              exact="true"
              path="/purchased"
              element={<PurchasedStocks />}
            />
          </Route>
          <Route
            exact="true"
            path="/purchased/:id"
            element={<ProtectedRoute />}
          >
            <Route
              exact="true"
              path="/purchased/:id"
              element={<PurchasedStockDetails />}
            />
          </Route>
          <Route
            exact="true"
            path="/transaction/:id"
            element={<ProtectedRoute />}
          >
            <Route
              exact="true"
              path="/transaction/:id"
              element={<TransactionForm />}
            />
          </Route>
          <Route render={() => <NotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </div>
  );
};

export default App;
