import React, { useState } from "react";

function Suggestions() {
  const [suggestion, setSuggestion] = useState([]);



  const suggestions = [
    {
      id: "1",
      profile: "crossrehk",
      userImg:
        "https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png",
      img: "https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/three.png",
      company: "TATA",
    },
    {
      id: "2",
      profile: "crossrehk",
      userImg:
        "https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png",
      img: "https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png",
      company: "Mahindra",
    },
    {
      id: "3",
      profile: "crossrehk",
      userImg:
        "https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png",
      img: "https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png",
      company: "Apple",
    },
  ];
  



  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm">
          <h3 className="text-sm font-bold text-gray-400">
              Suggestions for you
          </h3>
          <button className="text-gray-600 font-semibold">See All</button>
      </div>


      {
          suggestions.map(profile => (
              <div key={profile.id} className='flex items-center justify-between mt-3'>
                  <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.img} alt="" />
                  <div>
                      <h2 className="font-semibold text-sm">{profile.profile}</h2>
                      <h3 className="text-xs text-gray-400">Works at something something big that you  {profile.company}</h3>
                  </div>
                  <button className="text-blue-500">
                      Follow
                  </button>
              </div>
          ))
      }
    </div>

    
  );
}

export default Suggestions;
