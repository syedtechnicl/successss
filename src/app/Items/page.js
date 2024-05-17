"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/slicer";

const page = () => {
  const dispatch = useDispatch();
  const datas = useSelector((dd) => dd.counterSlicerss);
  console.log(datas);
  return (
    <>
      {datas.map((elem, ind) => {
        return (
          <>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={elem.image}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{elem.category}</Heading>

                  <Text py="2">{elem.title}</Text>
                </CardBody>

                <CardFooter>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => {
                      dispatch(remove(elem.id));
                    }}
                  >
                    remove
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default page;
