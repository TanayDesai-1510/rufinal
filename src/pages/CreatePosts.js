import React, { useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,
  Toast,
  useToast,
} from "@chakra-ui/react";

import { Radio, RadioGroup } from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";
import { useContract } from "../context/context";
import { ethers } from "ethers";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase/firebase-config";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

const CreatePosts = ({ onSuccess }) => {
  const toast = useToast();
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const retrieveFile = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const imgRef = await ref(storage, `images/${file.name}`);
      uploadBytes(imgRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
      getDownloadURL(ref(storage, `images/${file.name}`)).then((url) => {
        setUrl(url);
      });
      toast({
        position: "top",
        title: "Uploaded Succesfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  const uploadDetails = async () => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        name: localStorage.getItem("UserName"),
        email: localStorage.getItem("Email"),
        title: title,
        desc: desc,
        url: url,
      });
      console.log("Document written with ID: ", docRef.id);
      toast({
        position: "top",
        title: "Post Succesfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } catch (err) {
      toast({
        position: "top",
        title: "Error While Posting. Retry!",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      console.log(err);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            {" "}
            Create Post
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input type="text" onChange={(e) => setTitle(e.target.value)} />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl id="title" isRequired>
                <FormLabel>Description</FormLabel>
                <Input type="text" onChange={(e) => setDesc(e.target.value)} />
              </FormControl>
            </HStack>

            <HStack>
              <FormControl isRequired>
                <FormLabel>Upload Image</FormLabel>
                <Input
                  type="file"
                  id="file-upload"
                  name="data"
                  onChange={retrieveFile}
                />
              </FormControl>
              <Stack spacing={10} pt={7}>
                <Button
                  onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Upload
                </Button>
              </Stack>
            </HStack>

            <Stack spacing={10} pt={2}>
              <Button
                onClick={uploadDetails}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Add
              </Button>
            </Stack>
            <Stack pt={6}></Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CreatePosts;
