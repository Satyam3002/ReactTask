import React from 'react';

export default function Box() {
  return (
    <div className="flex flex-col justify-start w-full p-4 lg:p-0 mt-16 mb-16 space-y-8">
      {/* First Row */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
        {/* First Box */}
        <div className="flex-1 border-2 border-customPurple rounded-xl p-6 flex flex-col hover:bg-customPurple transition-colors duration-300 group">
          <div className="flex items-center mt-8 gap-4">
            <img className="group-hover:filter group-hover:brightness-0 group-hover:invert" src="people.svg" alt="People Icon" />
            <p className="group-hover:text-white">People</p>
          </div>
          <div className="flex-grow">
            <p className="mt-7 mb-2 font-light text-lg group-hover:text-white">
              Find a teacher, coach, or expert for your hobby interest in
              <br />
              your locality. Find a partner, teammate, accompanist or
              <br />
              collaborator.
            </p>
          </div>
          <div className="mt-auto">
            <button className="bg-white text-customPurple mt-6 px-3 py-1 rounded-md border-2 border-customPurple w-32 h-10">
              Connect
            </button>
          </div>
        </div>

        {/* Second Box */}
        <div className="flex-1 border-2 border-parrot rounded-xl p-6 flex flex-col hover:bg-parrot transition-colors duration-300 group">
          <div className="flex items-center mt-8 gap-4">
            <img className="group-hover:filter group-hover:brightness-0 group-hover:invert" src="location.svg" alt="Place Icon" />
            <p className="group-hover:text-white">Place</p>
          </div>
          <div className="flex-grow">
            <p className="mt-7 mb-2 font-light text-lg group-hover:text-white">
              Find a class, school, playground, auditorium, studio, shop
              <br />
              or an event venue. Book a slot at venues that allow
              <br />
              booking through hobbycue.
            </p>
          </div>
          <div className="mt-auto">
            <button className="bg-white text-customPurple mt-6 px-3 py-1 rounded-md border-2 border-customPurple w-32 h-10">
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto space-y-4 lg:space-y-0 lg:space-x-8">
        {/* Third Box */}
        <div className="flex-1 border-2 border-darkred rounded-xl p-6 flex flex-col hover:bg-darkred transition-colors duration-300 group">
          <div className="flex items-center mt-8 gap-4">
            <img className="group-hover:filter group-hover:brightness-0 group-hover:invert" src="product.svg" alt="Equipment Icon" />
            <p className="group-hover:text-white">Equipment</p>
          </div>
          <div className="flex-grow">
            <p className="mt-7 mb-2 font-light text-lg group-hover:text-white">
              Find equipment or supplies required for your hobby. Buy,
              <br />
              rent or borrow from shops, online stores or from
              <br />
              community members.
            </p>
          </div>
          <div className="mt-auto">
            <button className="bg-white text-customPurple mt-6 px-3 py-1 rounded-md border-2 border-customPurple w-32 h-10">
              Connect
            </button>
          </div>
        </div>

        {/* Fourth Box */}
        <div className="flex-1 border-2 border-darkblue rounded-xl p-6 flex flex-col hover:bg-darkblue transition-colors duration-300 group">
          <div className="flex items-center mt-8 gap-4">
            <img className="group-hover:filter group-hover:brightness-0 group-hover:invert" src="program.svg" alt="Events Icon" />
            <p className="group-hover:text-white">Events</p>
          </div>
          <div className="flex-grow">
            <p className="mt-7 mb-2 font-light text-lg group-hover:text-white">
              Find events, meetups and workshops related to your
              <br />
              hobby. Register or buy tickets online.
            </p>
          </div>
          <div className="mt-auto">
            <button className="bg-white text-customPurple mt-6 px-3 py-1 rounded-md border-2 border-customPurple w-32 h-10">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
