import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";

const FAQ = () => {
  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
  <div className="max-w-screen-xl mx-auto px-5 bg-n-8 min-h-screen">
      <div className="flex flex-col items-center">
      <Heading tag="FAQ" title="Frequently Asked Questions" />
       
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-code cursor-pointer list-none text-sm">
              <span>What is Crescent Apex?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-sm font-code">
              Crescent Apex is a leading tech company specializing in innovative software solutions. We provide cutting-edge technology services to businesses worldwide.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-code cursor-pointer list-none text-sm">
              <span>What services do you offer?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-sm font-code">
              We offer a wide range of services, including software development, cloud solutions, cybersecurity, and IT consulting. Our goal is to help businesses leverage technology to achieve their objectives.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-code cursor-pointer list-none text-sm">
              <span>How can Crescent Apex help my business?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-sm font-code">
              We tailor our solutions to meet your specific business needs, whether you need a custom software application, enhanced cybersecurity measures, or expert IT advice. Our team is dedicated to driving your business success through technology.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-code cursor-pointer list-none text-sm">
              <span>What industries do you serve?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate- text-sm font-code">
              We serve a diverse range of industries, including finance, healthcare, retail, manufacturing, and more. Our solutions are designed to address the unique challenges and opportunities within each sector.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-code cursor-pointer list-none text-sm">
              <span>How do I get started with Crescent Apex?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-sm font-code">
              Getting started is easy. Simply contact us through our website, and one of our representatives will get in touch to discuss your needs and how we can assist you.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-code cursor-pointer list-none text-sm">
              <span>What support options are available?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-sm font-code">
              We offer comprehensive support options, including 24/7 technical support, dedicated account managers, and a knowledge base with extensive documentation and tutorials.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-code cursor-pointer list-none text-sm">
              <span>Can I request a custom solution?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-sm font-code">
              Absolutely. We specialize in developing custom solutions tailored to your unique business requirements. Contact us to discuss your project and how we can help bring it to life.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-code cursor-pointer list-none text-sm">
              <span>What is your pricing structure?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-sm font-code">
              Our pricing structure varies depending on the services and solutions required. We offer competitive rates and flexible pricing models to suit different budgets and project scopes.
            </p>
          </details>
        </div>
      </div>
    </div>
    </Section>
  
  );
};

export default FAQ;
