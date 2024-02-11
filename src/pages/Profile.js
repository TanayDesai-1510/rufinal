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
  HStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { getDocs, query, where } from "firebase/firestore";
import { db, FirebaseAuth } from "../firebase/firebase-config";

const Profile = () => {
  const [data, setData] = useState([]);
  const [doc, setDoc] = useState([]);

  return (
    <>
      <HStack align={"center"} justify={"center"}>
        <Card maxW="lg" align="center">
          <CardBody>
            <Image
              src="/rutgers-student.jpg"
              alt="Rutgers Student"
              borderRadius="md"
              width={400}
              height={300}
              style={{ alignItems: "center", marginLeft: "30px" }}
            />
            <Stack mt="6" spacing="3" align="center">
              <Heading size="md">
                UserName : {localStorage.getItem("UserName")}{" "}
              </Heading>
              <Heading size="md">
                Email : {localStorage.getItem("Email")}
              </Heading>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link to="">
                {" "}
                <Button variant="solid" colorScheme="blue">
                  View Tests
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </HStack>
    </>
  );
};

export default Profile;
