import React from "react";
import { LandingPageLayout } from "../shared/layout";

export function LandingPageScreen() {
  return (
    <LandingPageLayout>
      <section className="my-10 body-font">
        <div className=" lg:pl-24  flex flex-col ">
          <h1 className="title-font  text-3xl mb-4 font-medium ">
            Hello World
          </h1>
          <p className="mb-8 leading-relaxed">
            This is app starter for start new project
          </p>
        </div>
      </section>
    </LandingPageLayout>
  );
}
