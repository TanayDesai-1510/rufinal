import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
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
const Papers = () => {
  const [doce, setDoc] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getMarkers = async () => {
      const res = await getDocs(collection(db, "tests"));
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
    <>
      <Input
        placeholder="Search Tests"
        size="lg"
        style={{ marginBottom: "20px" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.5rem",
        }}
      >
        {doce &&
          doce
            ?.filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.courseName.toLowerCase().includes(search.toLowerCase()) ||
                val.courseProf.toLowerCase().includes(search.toLowerCase()) ||
                val.courseCode.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((doc) => {
              return (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  //   style={{ width: "50%" }}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="/pdf.png"
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody>
                      <Heading size="md">{doc?.courseName}</Heading>
                      <Heading size="sm">
                        Course Code : {doc?.courseCode}
                      </Heading>
                      <Heading size="sm">Professor : {doc?.courseProf}</Heading>
                      <Heading size="sm">Section : {doc?.section}</Heading>
                      <Heading size="sm">Test Name : {doc?.test}</Heading>
                      <Heading size="sm">Uploaded By : {doc?.name}</Heading>
                      <Heading size="sm"> email : {doc?.email}</Heading>
                    </CardBody>

                    <CardFooter>
                      <a href={doc?.pdfUrl} target="_blank">
                        {" "}
                        <Button variant="solid" colorScheme="blue">
                          View Test
                        </Button>
                      </a>
                    </CardFooter>
                  </Stack>
                </Card>
              );
            })}
      </div>
    </>
  );
};

export default Papers;
