import Typewriter from 'typewriter-effect';

function TypewriterComponent() {
  return (
    <h6 className='type-animation'>
      <Typewriter
          options={{
            strings: [
              'UI/UX Developer',
              'Front-end Developer',
              'Graphic & Web Designer',
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 40,
          }}
        />
    </h6>
  )
}

export default TypewriterComponent