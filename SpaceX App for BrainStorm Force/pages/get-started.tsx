import React from 'react';
import { NextPage } from 'next';

const GetStarted: NextPage = () => {
  return (
    <main className="flex justify-center py-8 min-h-[88vh]">
      <div className="lg:w-[1024px] border border-1 rounded-lg p-10">
        <h1 className="text-4xl font-bold leading-loose text-center">
          What is this SpaceX project?
        </h1>
        <p>
          This SpaceX app help you learn about SpaceX. And this app maked for BrainStormForce. This project maked by Hudulov Hamzat
        </p>
        <h2 className="text-3xl font-bold leading-loose">Features</h2>
        <p>
          <ul className="list-disc pl-6">
            <li>Search engine for all the physical components</li>
            <li>Information about the physical components</li>
            <li>Installable on mobile devices</li>
            <li>Fully responsive</li>
            <li>Reduces network requests by storing the data in the state</li>
            <li>Usage without sign up</li>
            <li>Created by Hudulov Hamzat for BrainStorm Force</li>
          </ul>
        </p>
      </div>
    </main>
  );
};

export default GetStarted;
