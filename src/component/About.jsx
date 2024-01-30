import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full border-gray-200'>
        <div className='pb-8'>
            <p className='text-4xl font-bold  border-b-4 border-gray-500 inline'>About</p>
        </div>
        <p className='mt-20 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis, blanditiis nemo, ratione praesentium aliquid repellat cum nobis voluptatum et nihil vero illum ab quo impedit rerum corrupti pariatur dicta soluta quaerat sint. Aspernatur quas hic dolorem amet error possimus deleniti illum quidem, officiis necessitatibus dolor, culpa animi recusandae iusto.</p>
        <br/>
        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis deleniti earum vero in tenetur enim aliquam molestiae, quibusdam possimus dolorem commodi culpa fugiat veritatis ea animi ipsam temporibus numquam!</p>
      </div>
    </div>
  )
}

export default About
