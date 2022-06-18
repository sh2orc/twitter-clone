import React from 'react';
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardListIcon,
  DotsCircleHorizontalIcon, DotsHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon, UserIcon
} from "@heroicons/react/solid";

function Sidebar(props) {
    return (
        <div className={"hidden sm:flex flex-col p-2 xl:items-start fixed h-full"}>

            {/*Twitter Logo*/}
            <div className={"hoverEffect p-0 hover:bg-blue-100"}>
                <Image
                  width={50}
                  height={50}
                  src={"https://help.twitter.com/content/dam/help-twitter/brand/logo.png"}></Image>
            </div>

            {/*Menu*/}
            <div className={"mt-4 mb-2.5 xl:items-start"}>
              <SidebarMenuItem className={""} text={'Home'} Icon={HomeIcon}/>
              <SidebarMenuItem className={""} text={'Explorer'} Icon={HashtagIcon}/>
              <SidebarMenuItem className={""} text={'Notifications'} Icon={BellIcon}/>
              <SidebarMenuItem className={""} text={'Messages'} Icon={InboxIcon}/>
              <SidebarMenuItem className={""} text={'Bookmarks'} Icon={BookmarkIcon}/>
              <SidebarMenuItem className={""} text={'Lists'} Icon={ClipboardListIcon}/>
              <SidebarMenuItem className={""} text={'Profile'} Icon={UserIcon}/>
              <SidebarMenuItem className={""} text={'More'} Icon={DotsCircleHorizontalIcon}/>
            </div>

            {/*Button*/}
          <button className={"bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"}>Tweet</button>

            {/*Mini profile*/}
          <div className={"hoverEffect text-gray-700 items-center flex justify-center xl:justify-start mt-auto"}>
            <img
              className={"h-10  w-10 object-cover rounded-full xl:mr-2"}
              src={"https://media-exp1.licdn.com/dms/image/C4E03AQFOvu-hmRxPKw/profile-displayphoto-shrink_200_200/0/1517460822736?e=1660176000&v=beta&t=UM572IpDo_-aatDpZ3ofzhXRR9Rl6OLV9HA90-BtAak"}/>
            <div className={"leading-5 hidden xl:inline"}>
              <h4 className={"font-bold"}>seen</h4>
              <p className={"text-gray-500"}>@seen</p>
              <DotsHorizontalIcon class={"h-5 xl:ml-8  hidden xl:inline"}/>
            </div>
          </div>

        </div>
    );
}

export default Sidebar;