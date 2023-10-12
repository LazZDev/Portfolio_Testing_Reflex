import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <VStack>
  <HStack sx={{"position": "sticky", "bg": "blue", "paddingX": "15px", "paddingY": "10px"}}>
  <Text sx={{"height": "25px"}}>
  {`lazdev`}
</Text>
</HStack>
  <VStack>
  <Avatar name={`masotdev`} sx={{"height": "40px"}}/>
  <Text>
  {`@masotdev`}
</Text>
  <Text>
  {`Hi👋🏻, my name is LAZARO MASOT`}
</Text>
  <Text>
  {`I am a software engineer, with one year of experience in web development. I currently work in the technology industry. Here you can find my links of interest. Welcome!`}
</Text>
</VStack>
  <VStack>
  <Link as={NextLink} href={`https://www.linkedin.com/in/lazaro-d-masot`} isExternal={true}>
  <Button>
  {`LinkedIn`}
</Button>
</Link>
  <Link as={NextLink} href={`https://twitter.com/home`} isExternal={true}>
  <Button>
  {`X`}
</Button>
</Link>
</VStack>
  <VStack>
  <Link as={NextLink} href={`https://www.reflex.dev`} isExternal={true}>
  <Image src={`favicon.ico`}/>
</Link>
  <Link as={NextLink} href={`https://github.com/lazaromasot/lazaromasot`} isExternal={true}>
  {`© 2023 MASOTDEV BY LAZARO MASOT`}
</Link>
  <Text>
  {`BUILDING SOFTWARE WITH ❤️ FROM MIAMI TO THE WORLD.`}
</Text>
  <Text>
  {`This is a test project.`}
</Text>
</VStack>
</VStack>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
