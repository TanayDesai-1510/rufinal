import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Center, Input } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { db } from "../firebase/firebase-config";

const Posts = () => {
  const [doce, setDoc] = useState([]);
  useEffect(() => {
    const getMarkers = async () => {
      const res = await getDocs(collection(db, "posts"));
      const temp = [];
      for (let i = 0; i < res.docs.length; i++) {
        temp.push(res?.docs[i]?.data());
      }
      console.log(temp);
      setDoc(temp);
    };
    getMarkers();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {doce &&
        doce?.map((doc) => {
          return (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              style={{ width: "80%", height: "200px" }}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={doc?.url}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{doc?.title}</Heading>
                  <br />
                  <Heading size="sm">Description : {doc?.desc}</Heading>
                  <br />
                  <Heading size="sm">Uploaded By : {doc?.name}</Heading>
                  <br />
                </CardBody>

                <CardFooter>
                  <a href={doc?.pdfUrl} target="_blank">
                    {" "}
                    <Button variant="solid" colorScheme="blue">
                      View Posts
                    </Button>
                  </a>
                </CardFooter>
              </Stack>
            </Card>
          );
        })}
    </div>
  );
};

export default Posts;
