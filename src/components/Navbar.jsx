import React from "react";
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

function Navbar() {
  return (
    <>
      <Box bg="#d8d8d8" w="100%" color="#000000" h="70px">
        <Flex>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              LOGO
            </Center>
          </Box>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              RESERVATION
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              OFFERS
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              LOCATIONS
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              CARS & SERVICES
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              BUSINESS RENTALS
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              CAR SALES
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              HELP
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              AVIS PREFERRED
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              SIGN UP
            </Center>
          </Box>
          <Spacer />
          <Box>
            <Center h="70px" fontSize="13px">
              LOG IN
            </Center>
          </Box>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
        </Flex>
      </Box>
      <Box bg="#b00022" w="100%" h="340.14px" color="white" paddingTop="40px">
        <Box
          fontSize="36px"
          fontWeight={800}
          lineHeight="40px"
          textAlign="center"
          fontFamily="Arial Narrow, sans-serif"
          color="#ffffff"
        >
          FIND YOUR BEST CAR RENTAL WITH AVIS
        </Box>
        <Box paddingLeft="17.3%" paddingTop={10}>
          <Flex>
            <Input
              placeholder="Enter your pick-up location or zip code"
              w="20%"
              color="#8c7983"
              bg="#ffffff"
              h="50px"
              width="500px"
            />
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="date"
              w="20%"
              h="50px"
              width="250px"
              color="#8c7983"
              bg="#ffffff"
            />
            <Select
              //   placeholder="Select option"
              w="20%"
              h="50px"
              width="248.4px"
              color="#8c7983"
              bg="#ffffff"
            >
              <option value="option1">midnight</option>
              <option value="option2">12:30 AM</option>
              <option value="option3">1:00 AM</option>
              <option value="option3">2:00 AM</option>
              <option value="option3">1:10 AM</option>
              <option value="option3">2:00 AM</option>
              <option value="option3">2:30 AM</option>
              <option value="option3">3:00 AM</option>
              <option value="option3">3:30 AM</option>
              <option value="option3">4:00 AM</option>
              <option value="option3">4:30 AM</option>
              <option value="option3">5:00 AM</option>
              <option value="option3">5:30 AM</option>
              <option value="option3">6:00 AM</option>
              <option value="option3">6:30 AM</option>
              <option value="option3">7:00 AM</option>
              <option value="option3">7:30 AM</option>
              <option value="option3">8:00 AM</option>
              <option value="option3">8:30 AM</option>
              <option value="option3">9:00 AM</option>
              <option value="option3">9:30 AM</option>
              <option value="option3">10:00 AM</option>
              <option value="option3">10:30 AM</option>
              <option value="option3">11:00 AM</option>
              <option value="option3">11:00 AM</option>
              <option value="option1">noon</option>
              <option value="option2">12:30 PM</option>
              <option value="option3">1:00 PM</option>
              <option value="option3">2:00 PM</option>
              <option value="option3">1:10 PM</option>
              <option value="option3">2:00 PM</option>
              <option value="option3">2:30 PM</option>
              <option value="option3">3:00 PM</option>
              <option value="option3">3:30 PM</option>
              <option value="option3">4:00 PM</option>
              <option value="option3">4:30 PM</option>
              <option value="option3">5:00 PM</option>
              <option value="option3">5:30 PM</option>
              <option value="option3">6:00 PM</option>
              <option value="option3">6:30 PM</option>
              <option value="option3">7:00 PM</option>
              <option value="option3">7:30 PM</option>
              <option value="option3">8:00 PM</option>
              <option value="option3">8:30 PM</option>
              <option value="option3">9:00 PM</option>
              <option value="option3">9:30 PM</option>
              <option value="option3">10:00 PM</option>
              <option value="option3">10:30 PM</option>
              <option value="option3">11:00 PM</option>
              <option value="option3">11:00 PM</option>
            </Select>
          </Flex>
        </Box>
        <Box>
          <Center>
            <Button
              colorScheme="blue"
              marginTop="35px"
              alignItems="center"
              bg="black"
              color="white"
              borderRadius="0px"
              fontFamily="Arial Narrow, sans-serif"
              fontWeight={600}
              fontSize="18px"
              lineHeight="20px"
              paddingLeft="30px"
              paddingRight="30px"
            >
              SELECT MY CAR
            </Button>
          </Center>
        </Box>
      </Box>
      <Box
        paddingTop="40px"
        paddingLeft="91.15px"
        paddingRight="91.15px"
        position="relative"
        alignItems="center"
      >
        <Center>
          <Img
            src="https://images.jazelc.com/uploads/finninford-m2en/flex_buy_desktop-1536x240.jpeg"
            w="100%"
            h="250px"
            border="1px solid gray"
          ></Img>
        </Center>
        <Button postion="absolute" bottom="59px" left="400px">
          SAVE NOW
        </Button>
      </Box>

      <Center>
        <Box
          display="flex"
          justifyContent="space-between"
          w="88%"
          // border="1px solid red"
        >
          <Box>
            <Text
              color="rgb(0,0,0)"
              fontFamily="Arial Narrow, sans-serif"
              fontWeight={600}
              lineHeight="64px"
              fontSize="40px"
            >
              EXPLORE ALL THE WAYS YOU CAN SAVE
            </Text>
            <Text
              color="rgb(51, 51, 51)"
              fontFamily="Arial, sans-serif"
              lineHeight="30.6px"
              fontSize="18px"
            >
              Save on your next daily or monthly car rental with these deals and
              offers.
            </Text>
          </Box>
          <Center>
            <Box>
              <Button
                bg="rgb(212, 0, 42)"
                fontSize="18px"
                fontWeight={600}
                lineHeight="23.8px"
                paddingLeft="40px"
                paddingRight="40px"
                borderRadius="0px"
                color="white"
              >
                VIEW ALL OFFERS
              </Button>
            </Box>
          </Center>
        </Box>
      </Center>
      <Center>
        <Box w="88%" marginTop="30px">
          <Box display="flex" justifyContent="space-between" gap="30px">
            <Box>
              <Image
                src="https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/a98626f2-d100-cb9f-376a-df19d56a1c59/630x355.jpg"
                alt="Green double couch with wooden legs"
                w="425.63px"
                h="218px"
              />
              <Heading size="md" marginTop="30px">
                GET A FREE UPGRADE!
              </Heading>
              <Text
                marginTop="20px"
                marginBottom="40px"
                fontFamily="Arial, sans-serif"
                lineHeight="25.7px"
                fontSize="18px"
              >
                Travel in a roomier ride
              </Text>
              <Link
                fontFamily="Arial, sans-serif"
                fontSize="14px"
                fontWeight="700"
                lineHeight="20px"
                color="rgb(212, 0, 42)"
              >
                UPGRADE NOW
              </Link>
            </Box>
            <Box>
              <Image
                src="https://www.jetstar.com/_/media/inspiration-hub/article-images/19sept/easy-airport-travel-hacks/shutterstock_655431676.jpg?rev=aa488d6de198429e87d9613830a0ed42&w=1050&rc=1&cw=1050&ch=590&cx=71&cy=0&hash=1343E963F02BA05A0FED8866424A349132E8E2F4"
                alt="Green double couch with wooden legs"
                w="425.63px"
                h="218px"
              />
              <Heading size="md" marginTop="30px">
                GET LAST MINUTE TRAVEL DEALS.
              </Heading>
              <Text
                marginTop="20px"
                marginBottom="17px"
                fontFamily="Arial, sans-serif"
                lineHeight="25.7px"
                fontSize="18px"
              >
                Use our last-minute car rental travel deals to save today.
              </Text>
              <Link
                fontFamily="Arial, sans-serif"
                fontSize="14px"
                fontWeight="700"
                lineHeight="20px"
                color="rgb(212, 0, 42)"
              >
                SAVE NOW
              </Link>
            </Box>
            <Box>
              <Image
                src="https://www.passporttoyota.com/static/dealer-9898/Passport_Pre-Check.jpg"
                alt="Green double couch with wooden legs"
                w="425.63px"
                h="218px"
              />
              <Heading size="md" marginTop="30px">
                EARN FREE DAYS!
              </Heading>
              <Text
                marginTop="20px"
                marginBottom="40px"
                fontFamily="Arial, sans-serif"
                lineHeight="25.7px"
                fontSize="18px"
              >
                Start earning FREE days by registering today.
              </Text>
              <Link
                fontFamily="Arial, sans-serif"
                fontSize="14px"
                fontWeight="700"
                lineHeight="20px"
                color="rgb(212, 0, 42)"
              >
                REGISTER NOW
              </Link>
            </Box>
          </Box>
        </Box>
      </Center>
      <Center marginTop="40px">
        <Box
          display="flex"
          justifyContent="space-between"
          w="88%"
          // border="1px solid red"
        >
          <Box>
            <Text
              color="rgb(0,0,0)"
              fontFamily="Arial Narrow, sans-serif"
              fontWeight={600}
              lineHeight="64px"
              fontSize="40px"
            >
              BENEFITS FROM OUR TRAVEL PARTNERS
            </Text>
          </Box>
        </Box>
      </Center>
      <Center>
        <Flex
          display="flex"
          justifyContent="space-around"
          w="88%"
          gap="40px"
          marginTop="20px"
        >
          <Flex display="flex" justifyContent="space-between" gap="15px">
            <Box>
              <Img
                src="https://cdn.shortpixel.ai/spai/q_lossy+w_749+to_webp+ret_img/https://tinuiti.com/wp-content/uploads/2019/09/amazon-product-ads-logo-7.png"
                w="235px"
              ></Img>
            </Box>
            <Box>
              <Text
                fontFamily="Arial,sans-serif"
                fontSize="14px"
                lineHeight="20px"
                color="rgb(51, 51, 51)"
                marginBottom="55px"
                marginTop="10px"
              >
                Get up to 30% off with pay now plus 10% back in an Amazon Gift
                Card*
              </Text>
              <Link
                color="rgb(212, 0, 42)"
                fontFamily="Arial, sans-serif"
                fontWeight={700}
                fontSize="14px"
                lineHeight="20px"
              >
                LEARN MORE
              </Link>
            </Box>
          </Flex>
          <Flex display="flex" justifyContent="space-between" gap="15px">
            <Center>
              <Box>
                <Img
                  src="https://mma.prnewswire.com/media/1196011/AARP_Services_Logo.jpg?w=200"
                  w="235px"
                ></Img>
              </Box>
            </Center>
            <Box>
              <Text
                fontFamily="Arial,sans-serif"
                fontSize="14px"
                lineHeight="20px"
                color="rgb(51, 51, 51)"
                marginBottom="55px"
                marginTop="10px"
              >
                Get up to 30% off with pay now plus 10% back in an Amazon Gift
                Card*
              </Text>
              <Link
                color="rgb(212, 0, 42)"
                fontFamily="Arial, sans-serif"
                fontWeight={700}
                fontSize="14px"
                lineHeight="20px"
              >
                LEARN MORE
              </Link>
            </Box>
          </Flex>
          <Flex display="flex" justifyContent="space-between" gap="15px">
            <Box>
              <Img
                src="https://media.glassdoor.com/sql/925326/wayne-healthcare-squarelogo-1468401544323.png"
                w="235px"
              ></Img>
            </Box>
            <Box>
              <Text
                fontFamily="Arial,sans-serif"
                fontSize="14px"
                lineHeight="20px"
                color="rgb(51, 51, 51)"
                marginBottom="55px"
                marginTop="10px"
              >
                Get up to 30% off with pay now plus 10% back in an Amazon Gift
                Card*
              </Text>
              <Link
                color="rgb(212, 0, 42)"
                fontFamily="Arial, sans-serif"
                fontWeight={700}
                fontSize="14px"
                lineHeight="20px"
              >
                LEARN MORE
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Center>
      <Box
        paddingTop="40px"
        paddingLeft="91.15px"
        paddingRight="91.15px"
        position="relative"
        alignItems="center"
        marginTop="15px"
      >
        <Center>
          <Img
            src="https://pictures.dealer.com/a/aviscarsalesgroup/1888/75c797d82e88dd7d38f0314cac535ec1x.jpg"
            w="100%"
            h="400px"
          ></Img>
        </Center>
      </Box>
      <Box
        w="100%"
        h="450px"
        bg="rgb(51, 51, 51)"
        marginTop="40px"
        paddingTop="20px"
        paddingLeft="100px"
      >
        <Box
          // border="1px solid red"
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
  );
}

export default Navbar;
