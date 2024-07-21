import React from "react";
import { HomeTopBanner } from "../components/homeTopBanner";
import { HomeMissionStatement } from "../components/homeMissionStatement"
import {Header} from "../components/Header";

export const HomePage = () => {
    return (
    <>
        <Header/>
        <HomeTopBanner/>
        <HomeMissionStatement/>
    </>
    );
};