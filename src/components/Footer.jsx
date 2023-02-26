import React from 'react'
import {
    Box,
    Center,
    Flex,
    Spacer,
    Input,
    Select,
    Button,
    Img,
    Text,
    CardFooter,
    CardBody,
    Heading,
    Card,
    Image,
    Stack,
    Link,
  } from "@chakra-ui/react";

function Footer() {
  return (
    <>
    <Box
        w="100%"
        h="450px"
        bg="rgb(51, 51, 51)"
        marginTop="40px"
        paddingTop="20px"
        paddingLeft="100px"
        // border="1px solid red"
      >
        <Box
          
          marginTop="20px"
          h="300px"
          display="flex"
          justifyContent="space-around"
          gap="20px"
          marginRight="100px"
          marginBottom="20px"
        >
          <Box w="20%" h="500px">
            <Text
              marginBottom="13px"
              color="rgb(255,255,255)"
              fontWeight={600}
              fontSize="16px"
              lineHeight="22.86px"
            >
              TOP US DESTINATIONS
            </Text>
            <Text
              marginBottom="13px"
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="14px"
              lineHeight="20px"
            >
              Travel Guides
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Car Rental Las Vegas
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Car Rental Los Angeles
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Car Rental Chicago
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Car Rental Orlando
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
            >
              Car Rental Miami
            </Text>
          </Box>

          <Box w="20%" h="500px">
            <Text
              marginBottom="13px"
              color="rgb(255,255,255)"
              fontWeight={600}
              fontSize="16px"
              lineHeight="22.86px"
            >
              RENTAL CAR TYPES
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              One-Way Airport Car Rental
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Luxury Car Rental
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Pickup Truck Rental
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Van Rental
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              SUV Rental
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
            >
              Rental Car Sizes—Sedans
            </Text>
          </Box>

          <Box w="20%" h="500px">
            <Text
              marginBottom="13px"
              color="rgb(255,255,255)"
              fontWeight={600}
              fontSize="16px"
              lineHeight="22.86px"
            >
              AVIS EXTRAS
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Rental Car Products
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Car Rental Services
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Protections & Coverages
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Loss Damage Waiver
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
            >
              Roadside Assistance
            </Text>
          </Box>

          <Box w="20%" h="500px">
            <Text
              marginBottom="13px"
              color="rgb(255,255,255)"
              fontWeight={600}
              fontSize="16px"
              lineHeight="22.86px"
            >
              AVIS PARTNERS
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Affiliates
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Travel Agents
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Military & Veterans
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Airline Points Partners
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
            >
              Hotel Points Partners
            </Text>
          </Box>

          <Box w="20%" h="500px">
            <Text
              marginBottom="13px"
              color="rgb(255,255,255)"
              fontWeight={600}
              fontSize="16px"
              lineHeight="22.86px"
            >
              COMPANY INFO
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              About Avis
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Best Price Pledge
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Avis Careers
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Site Maps
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Lost & Found
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              We Try Harder
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
            >
              Accessibility
            </Text>
          </Box>

          <Box w="20%" h="500px">
            <Text
              marginBottom="13px"
              color="rgb(255,255,255)"
              fontWeight={600}
              fontSize="16px"
              lineHeight="22.86px"
            >
              SECURITY & PRIVACY
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Terms Of Use
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Privacy Notice
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Your Privacy Choices
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
              marginBottom="13px"
            >
              Copyright Notices
            </Text>
            <Text
              color="rgb(255,255,255)"
              fontWeight={400}
              fontSize="16px"
              lineHeight="20px"
            >
              Fraud & Scams
            </Text>
          </Box>
        </Box>
        <Flex>
          <Select
            w="312px"
            marginRight="30px"
            borderRadius="0px"
            bg="black"
            color="white"
          >
            <option value="option1">United States</option>
            <option value="option2">India</option>
            <option value="option3">Canada</option>
          </Select>
          <Select w="312px" borderRadius="0px" bg="black" color="white">
            <option value="option1">English</option>
            <option value="option2">Francais</option>
            <option value="option3">Espanol</option>
            <option value="option3">Portugues</option>
          </Select>

          <Box display="flex" justifyContent="space-between" marginLeft="350px">
            <Center>
              <Text color="white" marginRight="10px">
                © 2023 Avis Rent A Car System, LLC
              </Text>
              <Img
                src="https://www.cnet.com/a/img/resize/1bd92818e6a8654d3620fd3f69c2a747ad868178/hub/2020/12/21/a551a010-93fe-47b8-8dd6-6689f716966b/norton-secure-vpn.png?auto=webp&fit=crop&height=362&width=644"
                w="76px"
                h="40px"
              ></Img>
            </Center>
          </Box>
        </Flex>
      </Box>
      <Box
        h="90px"
        bg="#000"
        paddingLeft="90px"
        paddingRight="90px"
        display="flex"
      >
        <Img
          src="https://www.avis.com/etc/designs/avis/home/clientlib/images/AvisApp@2xHalf-Cut-Mobile.png"
          w="78.2px"
          position="relative"
          top="-15px"
          h="103.5px"
        ></Img>
        <Text
          color="rgb(255,255,255)"
          marginTop="40px"
          marginLeft="20px"
          fontFamily="Arial, sans-serif"
          lineHeight="14px"
          fontSize="14px"
        >
          Get the Avis App {">"}
        </Text>
        <Box display="flex" paddingLeft="800px" gap="20px" marginTop="40px">
          <Img
            src="https://cdn-icons-png.flaticon.com/512/121/121502.png"
            w="30px"
            h="30px"
            bg="white"
          ></Img>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/121/121503.png"
            w="30px"
            h="30px"
            bg="white"
          ></Img>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/121/121509.png"
            w="30px"
            h="30px"
            bg="white"
          ></Img>
          <Img
            src="https://cdn-icons-png.flaticon.com/512/49/49399.png"
            borderRadius="50%"
            w="30px"
            h="30px"
            bg="white"
          ></Img>
          <Img
            src="https://cdn-icons-png.flaticon.com/128/25/25425.png"
            borderRadius="50%"
            w="30px"
            h="30px"
            bg="white"
          ></Img>
        </Box>
      </Box>
    </>
  )
}

export default Footer