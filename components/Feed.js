import React from 'react';
import {SparklesIcon} from "@heroicons/react/solid";
import Input from "./Input";

function Feed(props) {
  return (
    <div className={"sm:ml-[73px] flex-grow max-w-xl xl:ml-[370px] border-gray-200 border-l border-r xl:min-w-[576px]"}>
      <div className="flex py-2 px-3 sticky top-0 z-50  bg-white border-b border-gray-200">
        <h2 className={"text-lg sm:text-xl font-bold cursor-pointer"}>Home</h2>
          <div className="hoverEffect flex items-center justify-center px-0 ml-auto h-9 w-9">
            <SparklesIcon className="h-5"/>
          </div>
      </div>
      <Input/>

    </div>
  );
}

export default Feed;