import React, { useEffect, useState } from "react";
import { useContract } from "../context/context";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Center,
  HStack,
  Flex,
  useColorModeValue,
  Box,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { ethers } from "ethers";

const Dashboard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <HStack align={"center"} justify={"center"}>
        <Card maxW="sm" align="center">
          <CardBody>
            <Image
              src="/doco.jpg"
              alt="Court Hammer"
              borderRadius="lg"
              h={240}
              w={330}
              objectFit={"cover"}
            />
            <Stack mt="6" spacing="3" align="center">
              <Heading size="md">12</Heading>

              <Text color="blue.600" fontSize="2xl">
                1
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
        <Card maxW="sm" align="center">
          <CardBody>
            <Image
              src="/doc2.png"
              alt="Judge"
              borderRadius="lg"
              h={240}
              w={330}
              objectFit={"cover"}
            />
            <Stack mt="6" spacing="3" align="center">
              <Heading size="md">HI</Heading>

              <Text color="blue.600" fontSize="2xl">
                2
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
      </HStack>

      <HStack align={"center"} justify={"center"}>
        <Card maxW="sm" align="center">
          <CardBody>
            <Image
              src="/doc3.png"
              alt="Lawyer"
              borderRadius="lg"
              h={240}
              w={330}
              objectFit={"cover"}
            />
            <Stack mt="6" spacing="3" align="center">
              <Heading size="md">hi</Heading>

              <Text color="blue.600" fontSize="2xl">
                2
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
        <Card maxW="sm" align="center">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1796&q=80"
              alt="Client"
              borderRadius="lg"
              h={240}
              w={330}
              objectFit={"cover"}
            />
            <Stack mt="6" spacing="3" align="center">
              <Heading size="md">hi</Heading>

              <Text color="blue.600" fontSize="2xl">
                3
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter></CardFooter>
        </Card>
      </HStack>
    </>
  );
};

export default Dashboard;
