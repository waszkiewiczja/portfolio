export const Sp: React.FC = () => {
  return (
    <div className="cursor-pointer mt-10">
      <p className="text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        S&P 500 Calculator
      </p>

      <p className="text-justify leading-8 mb-4">
        Unlock the power of financial foresight with our SP500 Compound ROI
        Calculator. Discover the potential growth of your investments with
        precision, as you effortlessly calculate compound returns based on the
        historic performance of the S&P 500. Make informed decisions and
        navigate your financial journey with confidence. Try it now and empower
        your wealth-building strategy!
        <br />
        <br />
        Calculate Here {''}
        <a
          className="text-[#5BC0EB]"
          href="https://waszkiewiczja.github.io/sp500/"
          target="blank"
        >
          https://waszkiewiczja.github.io/sp500/
        </a>
      </p>

      <img src="/sp.png" alt="S&P" />
    </div>
  );
};
