export const MyInvestment: React.FC = () => {
  return (
    <div className="cursor-pointer">
      <p className="text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        my-investment.com
      </p>

      <p className="text-justify leading-8 mb-4">
        www.my-investment.com is a website that allows you to observe selected
        investments. We can observe over 1,200 different investment instruments
        - shares, indices, currencies, raw materials, cryptocurrencies. We can
        browse the website anonymously or create an account and track the profit
        or loss from our investment on an ongoing basis. The website was created
        using
        <span className="text-[#5BC0EB]"> React, Typescript and Django. </span>
        To read rates, it uses numerous
        <span className="text-[#5BC0EB]">
          {' '}
          public APIs, as well as private APIs and Data Scrape.{' '}
        </span>
        It uses, among others: API of the National Bank of Poland, API of the
        Bitbay exchange, API of the Coingecko exchange and API of the IEX
        platform to display investment rates in real time.
        <br />
        <br />
        We can track shares from the Warsaw Stock Exchange, the US Stock
        Exchange, the gold and silver raw material market, the cryptocurrency
        market and the index market. The interface is operated in JavaScript,
        while the backend is handled by Django. The website is fully mobile and
        adapted to phones.
      </p>
      <img src="/investment1.png" alt="investment" />
    </div>
  );
};
