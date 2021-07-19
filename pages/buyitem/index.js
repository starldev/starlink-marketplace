import React from 'react';
import {
    Flex,
    Text,
    Image,
    FormLabel,
    ListItem,
    List,
} from '@chakra-ui/react';

const BuyItem = () => {
    return (
        <Flex w="100%" h="100%" ml="200px">
            {/* <Flex flexDirection="column">
                <Image alt="ico-twitter"></Image>
                <Image alt="ico-facebook"></Image>
            </Flex> */}
            <Flex w="750px" h="550px" padding="4px" borderRadius="8px" bg="linear-gradient(180deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" m="50px">
                <Flex w="100%" h="100%" bg="#131A32" borderRadius="6px" justifyContent="center" alignItems="center">
                    <Image alt="asset image" w="350px" h="350px" src="buyitem/img_item.png"></Image>
                </Flex>
            </Flex>
            <Flex flexDirection="column" m="50px">
                <Text lineHeight="0px" fontSize="40px" textColor="#fff" fontWeight="400">ADMIRAL GLOVES</Text>
                <Flex alignItems="center">
                    <Text lineHeight="0px" fontSize="14px" fontWeight="400" textColor="#1365F1">Token ID: 5334...4096</Text>
                    <Image alt="copy addr" w="20px" h="20px" src="buyitem/ico_addr_copy.png" ml="1rem" />
                </Flex>
                <Flex mt="1rem" alignItems="center">
                    <Image alt="creator avatar" w="50px" h="50px" src="buyitem/img_profile.png"></Image>
                    <Flex flexDirection="column" ml="1rem">
                        <FormLabel fontSize="10px" fontWeight="300" textColor="rgba(255, 255, 255, 0.4)">BY CREATOR</FormLabel>
                        <FormLabel fontSize="14px" fontWeight="300" textColor="#fff">@KamiSawZe</FormLabel>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex alignItems="center">
                        <Image alt="ico copy" w="15px" h="15px" src="buyitem/ico_copy.png"></Image>
                        <Text ml="0.5rem" fontSize="14px" textColor="#fff" fontWeight="300">11 Minted</Text>
                    </Flex>
                    <Flex w="1px" h="30px" bg="#1C2646" m="0 1.5rem 0 1.5rem" alignSelf="center"></Flex>
                    <Flex alignItems="center">
                        <Image alt="ico mark" w="15px" h="15px" src="buyitem/ico_note.png"></Image>
                        <Text ml="0.5rem" fontSize="14px" textColor="#fff" fontWeight="300">8 of 10 For sale</Text>
                    </Flex>
                    <Flex w="1px" h="30px" bg="#1C2646" m="0 1.5rem 0 1.5rem" alignSelf="center"></Flex>
                    <Flex alignItems="center">
                        <Image alt="ico profile" w="20px" h="15px" src="buyitem/ico_network.png"></Image>
                        <Text ml="0.5rem" fontSize="14px" textColor="#fff" fontWeight="300">3 Owners</Text>
                    </Flex>
                </Flex>
                {/* ---------------------------------------------------------------------------------- */}
                <Flex bg="#131A32" w="100%" borderRadius="4px" p="1rem" mt="1.5rem">
                    <Flex flexDirection="column" mr="4rem">
                        <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">TYPE</Flex>
                        <Flex fontWeight="300" h="100%" textColor="#fff" fontSize="14px" mt="1rem" alignItems="center">
                            <Image alt="ico equip type" w="13px" h="13px" src="buyitem/ico_item_type.png" mr="0.5rem"></Image>
                            Equipment
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column" mr="4rem">
                        <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">BIOME</Flex>
                        <Flex fontWeight="300" h="100%" textColor="#fff" fontSize="14px" mt="1rem" alignItems="center">None</Flex>
                    </Flex>
                    <Flex flexDirection="column">
                        <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">TAGS</Flex>
                        <Flex h="30px" borderRadius="15px" mt="1rem" bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" p="2px" alignItems="center">
                            <Flex as="button" border="none" w="100%" h="100%" borderRadius="15px" bg="#131A32" textColor="#fff" fontSize="10px" fontWeight="300" alignItems="center" p="0 1rem 0 1rem">
                                PIRATES
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                {/* ------------------------------------Attributes------------------------------------- */}
                <Flex textColor="#fff" fontSize="20px" mt="1.5rem">Attributes</Flex>
                <Flex alignItems="center" mt="0.5rem" p="1rem" w="100%" bg="#131A32" borderRadius="4px">
                    <Image alt="attribute overview img" w="40px" h="40px" src="buyitem/img_attr_type1.png"></Image>
                    <Flex flexDirection="column" h="100%" justifyContent="space-between" ml="1rem">
                        <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="10px">Catalyst</Flex>
                        <Flex fontWeight="300" textColor="#fff" fontSize="14px">Legendary</Flex>
                    </Flex>
                    <Flex flexDirection="column" h="100%" justifyContent="space-between" ml="4rem">
                        <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">POWER</Flex>
                        <Flex fontWeight="300" textColor="#fff" fontSize="14px">
                            <Image alt="power img" w="20px" h="20px" src="buyitem/img_def.png" mr="0.5rem"></Image>
                            49
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column" h="100%" justifyContent="space-between" ml="4rem">
                        <Flex fontWeight="300" textColor="rgba(255, 255, 255, 0.1)" fontSize="12px">DEFENSE</Flex>
                        <Flex fontWeight="300" textColor="#fff" fontSize="14px">
                            <Image alt="defense img" w="20px" h="20px" src="buyitem/img_power.png" mr="0.5rem"></Image>
                            31
                        </Flex>
                    </Flex>
                </Flex>
                {/* ------------------------------------Description------------------------------------- */}
                <Flex flexDirection="column" textColor="#fff" fontSize="20px" mt="1.5rem">
                    Description
                    <Text fontWeight="300" textColor="#fff" fontSize="14px">
                        Gloves protect from rope burn and splinters. Gold epaulettes complete the Admiral Jacket. Lover's blue scarf and an emergency dagger on each bicep...
                    </Text>
                </Flex>
                <Flex flexDirection="column">
                    <Flex>
                        <Text fontWeight="300" textColor="rgba(255, 255, 255, 0.4)" fontSize="12px">NFT FORM CREATOR</Text>
                        <Text fontWeight="300" textColor="#fff" fontSize="16px">See more {'>'}</Text>
                    </Flex>
                    {/* --------Gloves------- */}
                    <Flex alignItems="center">
                        <Image alt="asset img" w="60px" h="60px" src="buyitem/img_item1.png"></Image>
                        <Flex flexDirection="column"  fontWeight="300" textColor="#fff" fontSize="16px">
                            Admiral Gloves
                            <Flex textColor="#314DFF">Legendary</Flex>
                            11
                        </Flex>
                        <Image alt="overview img" w="40px" h="40px" src="buyitem/img_attr_type1.png"></Image>
                    </Flex>
                    {/* ---------Jacket--------- */}
                    <Flex alignItems="center">
                        <Image alt="asset img"  w="60px" h="60px" src="buyitem/img_item1.png"></Image>
                        <Flex flexDirection="column" fontWeight="300" textColor="#fff" fontSize="16px">
                            Admiral Jacket
                            <Flex color="transparent" bg="linear-gradient(#FDBF25, #FE9200)" style={{ "-webkit-background-clip": "text" }}>Legendary</Flex>
                            11
                        </Flex>
                        <Image alt="overview img" w="40px" h="40px" src="buyitem/img_attr_type2.png"></Image>
                    </Flex>
                    {/* --------------Boots-------------- */}
                    <Flex alignItems="center">
                        <Image alt="asset img" w="60px" h="60px" src="buyitem/img_item1.png"></Image>
                        <Flex flexDirection="column" fontWeight="300" textColor="#fff" fontSize="16px">
                            Admiral Boots
                            <Flex color="transparent" bg="linear-gradient(#FDBF25, #FE9200)" style={{ "-webkit-background-clip": "text" }}>Legendary</Flex>
                            11
                        </Flex>
                        <Image alt="overview img" w="40px" h="40px" src="buyitem/img_attr_type2.png"></Image>
                    </Flex>
                </Flex>
                {/* -----------------------------Description----------------------------- */}
                <Flex flexDirection="column">
                    <Text fontWeight="300" textColor="#fff" fontSize="24px">Description</Text>
                    <Flex flexDirection="column" fontWeight="300" textColor="#fff" fontSize="14px">
                        <Flex><Image alt="list icon" src="buyitem/ico_li.png" w="10px" h="10px" mr="1rem"/>When a creator designs an Asset, he has to distribute points amongst the chosen Attributes.</Flex>
                        <Flex><Image alt="list icon" src="buyitem/ico_li.png" w="10px" h="10px" mr="1rem"/>A creator can change the amount of the attributes while creating an asset.</Flex>
                        <Flex><Image alt="list icon" src="buyitem/ico_li.png" w="10px" h="10px" mr="1rem"/>When a Game Maker update is released, new mechanics can use existing attributes or new ones released with the update.</Flex>
                    </Flex>
                </Flex>
                {/* ------------------------------buy component---------------------------- */}
                <Flex>
                    <Flex flexDirection="column">
                        <Flex color="rgba(255, 255, 255, 0.4)" fontWeight="300" fontSize="10px">CURRENT PRICE</Flex>
                        <Flex>
                            <Image src="item/coin_logo.png" w="20px" h="20px" alt="coin logo"></Image>
                            <Text textColor="#FDB32A" fontSize="15px" fontWeight="500" ml="0.5rem">2940.00</Text>
                        </Flex>
                    </Flex>
                    <Text color="#fff" fontSize="20px">FAVORITE</Text>
                    <Flex as="button" color="#fff" fontSize="20px" bg="linear-gradient(225deg, #FDBF25, #B417EB, #0D57FF, #2D9CB4)" _hover={{ background: '#314DFF' }} border="none" _disabled={{ background: '#131A32', textColor: "rgba(255, 255, 255, 0.2)" }}>BUY NOW</Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default BuyItem;