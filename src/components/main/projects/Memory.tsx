export const Memory: React.FC = () => {
  const defaultText = `text-justify leading-8 mb-4`;
  const bluishText = `text-[#5BC0EB]`;

  return (
    <div className="cursor-pointer mt-10">
      <p className="text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        Memory Master
      </p>

      <p className={defaultText}>
        The game was created entirely in {''}
        <span className={bluishText}>Javascript</span> and uses localStorage to
        store results, user settings and preferences. The website is fully
        mobile and adapted to play on your phone.
        <br />
        <br />
        Brain training is based on the idea that mental stimulation can improve
        neuroplasticity. It is the ability of the brain to create and reorganize
        connections between brain cells in response to new stimuli and tasks.
        The Brain Training Game Boosts Executive Functions study published in
        PLOS One in 2013 found that people who engaged in brain training games
        showed improvements in information processing speed, memory and
        executive functions.
        <br />
        <br />
        Memory Master is a game that intensively simulates short-term memory,
        improving focus and concentration.
        <br />
        <br />
        It involves remembering the letters and positions that appear on the
        board and, in the extended version, also the colors of the letters. As
        the difficulty increases, we have to remember more and more information.
        <br />
        <br />
        The game requires us to simultaneously remember information and use
        information already memorized, strongly stimulating the brain.
        <br />
        <br />
        Remember the letter that appears and the field in which it appears. The
        letter and the field are unrelated and independent.
        <br />
        <br />
        If the same letter appears on the same or any other field two turns
        later, click the &quot;Letter&quot; button. If the same or a different
        letter appears in the same field two turns later, click the
        &quot;Position&quot; button. If both the letter and the position match,
        click both buttons.
        <br />
        <br />
        If the letter does not match the letter from two turns ago, you do not
        click anything. If the field does not match the field from two turns,
        you do not click anything.
        <br />
        <br />
        Play Here {''}
        <a
          className="text-[#5BC0EB]"
          href="https://waszkiewiczja.github.io/MemoryMaster/"
          target="blank"
        >
          waszkiewiczja.github.io/Mistrz/
        </a>
      </p>

      <div className="flex justify-between">
        <img src="/mm1.png" alt="Memory Master" width={500} />
        <img src="/mm2.png" alt="Memory Master" width={500} />
      </div>
    </div>
  );
};