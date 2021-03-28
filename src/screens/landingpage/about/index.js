import React from "react";

import { LandingPageLayout } from "../shared/layout";

export function AboutPageScreen() {
  return (
    <LandingPageLayout>
      <section className="my-10 body-font">
        <div className=" lg:pl-24  flex flex-col ">
          <h1 className="title-font  text-3xl mb-4 font-medium ">About</h1>
          <p className="mb-8 leading-relaxed">
            Hi, I'm Eyüp. I want to develop this project for easy start to side
            projects.
          </p>
        </div>
      </section>
    </LandingPageLayout>
  );
}
