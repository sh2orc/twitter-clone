import React from 'react';
import {EmojiHappyIcon, PhotographIcon} from "@heroicons/react/outline";

function Input(props) {
  return (
    <div className={"flex border-b border-gray-200 p-3 space-x-3"}>
      <img
        className={"h-11 w-11 object-cover cursor-pointer hover:brightness-95 rounded-full xl:mr-2"}
        src={"https://media-exp1.licdn.com/dms/image/C4E03AQFOvu-hmRxPKw/profile-displayphoto-shrink_200_200/0/1517460822736?e=1660176000&v=beta&t=UM572IpDo_-aatDpZ3ofzhXRR9Rl6OLV9HA90-BtAak"}
      />

      <div className={"w-full divide-y divide-gray-200"}>
        <div className="">
          <textarea
            className={"w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"}
            rows={2} placeholder={"what's happening?"}/>
        </div>
        <div className={"flex  items-center justify-between pt-2.5"}>
          <div className={"flex"}>
            <PhotographIcon className={"h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"}/>
            <EmojiHappyIcon className={"h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"}/>
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
        </div>
      </div>

    </div>
  );
}

export default Input;