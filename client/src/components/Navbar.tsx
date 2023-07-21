'use client'
import Logo from './Logo'
import Link from 'next/link'
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import ButtonType from './Button'
import { ethers } from "ethers"
import { InjectedWallet, MetaMaskWallet } from "@thirdweb-dev/wallets";



const Navbar = () => {

  async function connectWallet() {
    const provider = new ethers.BrowserProvider(window.ethereum, "any");
    const wallet = new InjectedWallet();
    wallet.connect();
    const signer = await provider.getSigner()
    // address to update to 
    const address = await signer.getAddress()
    console.log(address);
  }

  return (
    <>
      <Box as='header' className=' bg-black text-white fixed z-10 w-full px-2 md:px-4 xl:px-8 py-4 drop-shadow-xl border-b border-b-white'>
        <Flex className=' items-center justify-between text-md md:text-lg'>
          <Logo />
          <Flex gap={8} alignItems='center'>
            <Link href='/about'>
              About
            </Link>
            <ButtonType bgColor='bg-purple-700' label='Connect Wallet' border='purple' color='white' bgModified='purple.500' onClick={async () => {
              console.log("clicked")
              await connectWallet()
            }} />
            {/* <Menu>
              <MenuButton>
                Discover <ChevronDownIcon />
              </MenuButton>
              <MenuList className='text-white bg-black'>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar