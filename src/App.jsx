import { Content } from "./components/Content";
import { Dashboard } from "./components/Dashboard";
import { DocumentModels } from "./sections/home sections/DocumentModels";
import { Hero } from "./sections/home sections/Hero";
import { HowItWorks } from "./sections/home sections/HowItWorks";
import { WhyUse } from "./sections/home sections/WhyUse";

export default function App() {
  return (
    <>
      <Dashboard>
        <Content>
          <Hero />
          <DocumentModels />
          <HowItWorks />
          <WhyUse />
        </Content>
      </Dashboard>
    </>
  )
}