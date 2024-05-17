"use client";
import {
  Box,
  SimpleGrid,
  Card as Cardss,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addfunc } from "../Redux/slicer";

const Card = () => {
  const [cdata, setcdata] = useState([]);
  const dispatch = useDispatch();

  const maincall = (id) => {
    dispatch(addfunc(id));
  };

  const getfunc = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const data1 = await data.json();
    setcdata(data1);
  };

  useEffect(() => {
    getfunc();
  }, []);

  return (
    <div>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {cdata.map((elem, ind) => {
          return (
            <>
              <Cardss
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                p={5}
                m={3}
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
                    <Text py="2">$ {elem.price}</Text>
                  </CardBody>

                  <CardFooter>
                    <Button
                      onClick={() => {
                        maincall(elem);
                      }}
                      variant="solid"
                      colorScheme="blue"
                    >
                      Buy Now
                    </Button>
                  </CardFooter>
                </Stack>
              </Cardss>
            </>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Card;
