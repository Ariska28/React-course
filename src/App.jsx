import React, { useState } from "react";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { Layout } from "./components/Layout/Layout";
import { ThemeContext } from "./contexts/ThemeContext";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CartPage } from "./pages/CartPage/CartPage";
import { Restaurant } from "./components/Restaurant/Restaurant";
import { Menu } from "./components/Menu/Menu";
import { Reviews } from "./components/Reviews/Reviews";
import {ReviewFormPage} from "./pages/ReviewFormPage/ReviewFormPage"

export const App = () => {
  const [theme] = useState("light"); // 'light' | 'dark'

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Layout>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/restaurants" element={<RestaurantsPage />}>
                <Route path=":restaurantId" element={<Restaurant />}>
                  <Route index element={<Navigate to="menu" replace />} />
                  <Route path="menu" element={<Menu/>}/>
                  <Route path="review" element={<Reviews/>}/>
                </Route>
              </Route>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/reviewForm" element={<ReviewFormPage/>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  );
};
