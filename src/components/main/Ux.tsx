'use client';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Image from 'next/image';
import { UxAnimation } from './UxAnimation';

export const Ux: React.FC = () => {
  return (
    <section
      data-testid="ux"
      className="text-center flex flex-col justify-center max-w-screen-lg mx-auto mt-24 md:mt-48 w-full"
    >
      <p
        className="text-4xl font-bold md:mb-10 text-white text-start md:text-6xl"
        id="ux"
      >
        <span className="text-[#5BC0EB]">3. </span>
        UX/UI and CRO
      </p>
      <p className="text-3xl md:text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        CRO
      </p>
      <p className="text-justify leading-8 mb-4">
        Conversion Rate Optimization (CRO) is the process of enhancing a website to increase the percentage of visitors who complete a desired action. These actions can include making a purchase, adding items to a cart, signing up for a service, filling out a form, or clicking a link.
      </p>
      <p className="text-justify leading-8 mb-4">
        By analyzing user behavior, testing different design and content variations, and optimizing the user journey, CRO helps improve engagement and maximize conversions, leading to better user experience and higher business revenue.
      </p>

      <p className="text-3xl md:text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        What are AB tests?
      </p>
      <p className="text-justify leading-8 mb-10">
        A/B testing is a powerful method for improving conversion rates by comparing two versions of a webpage to see which performs better.
      </p>
      <p className="text-justify leading-8 mb-10">
        For example, if you are unsure which headline will generate more sales, you can run an A/B test where: <br />
        • 50% of visitors see Headline A <br />
        • 50% of visitors see Headline B<br /><br />
        The system tracks user interactions and determines which version drives more conversions (e.g., more purchases, sign-ups, or clicks).
      </p>
      <p className="text-justify leading-8 mb-10">
        A/B testing software automates this process by splitting traffic between different versions of a webpage and analyzing performance data. This data-driven approach helps businesses make informed decisions and optimize their websites for maximum effectiveness.
      </p>
      <UxAnimation />
      <p className="text-3xl md:text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        KPIs
      </p>
      <p className="text-justify leading-8 mb-4">
      To create a successful A/B test, follow these steps:
      </p>
      <p className="text-justify leading-8 mb-4">
        Provide the URLs of the original and test versions of the page, as well as the success page (e.g., a checkout or confirmation page).
      </p>
      <p className="text-justify leading-8 mb-4">
        Example: <br></br>
        https://example.com/water (Original) <br></br>
        https://example.com/water-version2 (Test Version) <br></br>
        https://example.com/water-card (Success Page)
        </p>
        <p className="text-justify leading-8 mb-4">
          Generate the A/B test script, which should be placed in the  head  section of each page.
        </p>
        <p className="text-justify leading-8 mb-4">       
          The script will evenly distribute traffic between the original and test versions and track user journeys.
        </p>
        <p className="text-justify leading-8 mb-4">  
          Monitor results:<br></br>

          If 1,000 users visit each version and: <br></br>
          200 users convert on the original page → 20% conversion rate <br></br>
          300 users convert on the test page → 30% conversion rate <br></br>
          The test version outperforms the original, meaning the changes positively impact conversions.
        </p>
        <p className="text-justify leading-8 mb-4">  
          By analyzing KPIs such as bounce rates, click-through rates, and conversion rates, A/B testing helps businesses make data-driven improvements to their websites, ensuring better performance and user engagement.
        </p>
        
      <Gallery>
        <Item
          original="conversion.png"
          thumbnail="conversion.png"
          width="1000"
          height="600"
        >
          {({ ref, open }) => (
            <Image
              ref={ref}
              onClick={open}
              src="conversion.png"
              alt="Conversion"
              width={0}
              height={0}
              sizes="100vw"
              className="cursor-pointer w-full h-fit"
            ></Image>
          )}
        </Item>
      </Gallery>
    </section>
  );
};
