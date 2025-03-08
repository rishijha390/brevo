import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EnterpriseFeatures from "./components/EnterpriseFeatures";
import CustomerExperience from "./components/CustomerExperience";
import EasySolution from "./components/EasySolution";
import CustomerView from "./components/CustomerView";
import ExploreProducts from "./components/ExploreProducts";
import ProductCards from "./components/ProductCards";
import AwardsAndReviews from "./components/AwardsAndReviews";
import CustomerQuote from "./components/CustomerQuote";
import IntegrationTools from "./components/IntegrationTools";
import VirtualTour from "./components/VirtualTour";
import Footer from "./components/Footer";
export function App() {
  return <div className="w-full min-h-screen bg-[#e6ffcc]">
      <Header />
      <Hero />
      <EnterpriseFeatures />
      <ProductCards />
      <CustomerExperience />
      <EasySolution />
      <CustomerView />
      <ExploreProducts />
      <AwardsAndReviews />
      <CustomerQuote />
      <IntegrationTools />
      <VirtualTour />
      <Footer />
    </div>;
}