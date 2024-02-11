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
        Conversion rate optimization (CRO) is the practice of increasing the
        percentage of users who perform a desired action on a website. Desired
        actions can include purchasing a product, clicking &apos;Add to
        cart&apos;, signing up for a service, filling out a form, or clicking on
        a link.
      </p>
      <img src="google-ux.png" alt="Google C" />

      <p className="text-3xl md:text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        What are AB tests?
      </p>
      <p className="text-justify leading-8 mb-10">
        A/B testing is an effective way to increase your conversion rate.
        Conversion rate is the percentage of visitors who proceed to a specific
        goal on a page.
        <br />
        <br />
        If you had two possible headlines on your website but couldn&apos;t
        decide which one to use, you could run an A/B test where:
        <br />
        • half of visitors will see heading A, and <br />
        • the other half will see heading B.
        <br />
        <br />
        You can then count the orders for each headline and determine which
        headline brought you more value. A/B testing software makes it easier to
        conduct such tests. Each of your visitors will see a different version
        of the page - version A or version B, and then the software will
        determine which version performed best.
      </p>

      <UxAnimation />

      <p className="text-3xl md:text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        KPIs
      </p>
      <p className="text-justify leading-8 mb-4">
        To create a new AB test, enter links to the two versions of the page and
        to the success page, e.g.:
        <br />
        https://example.com/water
        <br />
        https://example.com/water-version2
        <br />
        https://example.com/water-card
        <br />
        The software will generate Javascript code that should be pasted just
        after the head tag in the index.html file on both versions of the page
        and on the success page and re-upload these files to the server.
        <br />
        <br />
        When users visit https://example.com/water, the script will divide the
        traffic equally between the original page and the test version and will
        track the user&apos;s further path. Thanks to cookies, the script will
        know how many people went to the result subpage, which will give us
        information about the number of bounces, conversions and effectiveness
        of a given version of the website.
        <br />
        <br />
        If 1,000 people visit each version of the website, and 200 people go
        from the original version to the cart, we have a 20% conversion. If 300
        people go to the cart from the second version, we have a 30% conversion.
      </p>

      <img src="conversion.png" alt="Conversion" />
    </section>
  );
};
