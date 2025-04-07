import { Fragment } from "react";
import { ITemplateProps } from "./interface";
import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";

export const Template = ({ children, title, description }: ITemplateProps) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  </Fragment>
);
