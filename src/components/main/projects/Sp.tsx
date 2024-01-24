import Image from 'next/image';

export const Sp: React.FC = () => {
  const defaultText = `text-justify leading-8 mb-4`;
  const bluishText = `text-[#5BC0EB]`;

  return (
    <div className="cursor-pointer mt-10">
      <p className="text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        S&P 500 Calculator
      </p>

      <p className={defaultText}>
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
