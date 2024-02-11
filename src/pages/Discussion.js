// import React from "react";

// const Discussion = () => {
//   return <h1 style={{ fontSize: "45px", fontWeight: "bolder " }}>Discuss</h1>;
// };

// export default Discussion;

import React from "react";
import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Heading,
  Box,
  HStack,
  Flex,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";

import { InfoOutlineIcon } from "@chakra-ui/icons";

import { useState, useEffect } from "react";
import Papers from "./Papers";
import UploadTests from "./UploadTests";
import Posts from "./Posts";
import CreatePosts from "./CreatePosts";

const Discussion = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [casesList, setCasesList] = useState([]);

  useEffect(() => {}, []);

  const changeTab = () => {
    setActiveTab(activeTab === 0 ? 1 : 0);
  };

  return (
    <Tabs variant="soft-rounded" isFitted colorScheme="cyan">
      <TabList>
        <Tab>Posts</Tab>
        <Tab>Create Posts</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Posts />
        </TabPanel>
        <TabPanel>
          <CreatePosts />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Discussion;
