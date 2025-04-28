// import { Button } from "@chakra-ui/react";
// import { FormControl, FormLabel } from "@chakra-ui/react";
// import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
// import { VStack } from "@chakra-ui/react";
// import { useToast } from "@chakra-ui/react";
// import axios from "axios";
// import { useState } from "react";
// import { useHistory } from "react-router";

// const Signup = () => {
//   const [show, setShow] = useState(false);
//   const handleClick = () => setShow(!show);
//   const toast = useToast();
//   const history = useHistory();

//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [confirmpassword, setConfirmpassword] = useState();
//   const [password, setPassword] = useState();
//   const [pic, setPic] = useState();
//   const [picLoading, setPicLoading] = useState(false);

//   const submitHandler = async () => {
//     setPicLoading(true);
//     if (!name || !email || !password || !confirmpassword) {
//       toast({
//         title: "Please Fill all the Feilds",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setPicLoading(false);
//       return;
//     }
//     if (password !== confirmpassword) {
//       toast({
//         title: "Passwords Do Not Match",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     console.log(name, email, password, pic);
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         "/api/user",
//         {
//           name,
//           email,
//           password,
//           pic,
//         },
//         config
//       );
//       toast({
//         title: "Registration Successful",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       localStorage.setItem("userInfo", JSON.stringify(data));
//       setPicLoading(false);
//       history.push("/chats");
//       window.location.reload();
//     } catch (error) {
//       toast({
//         title: "Error Occured!",
//         description: error.response.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setPicLoading(false);
//     }
//   };

//   const postDetails = (pics) => {
//     setPicLoading(true);
//     if (pics === undefined) {
//       toast({
//         title: "Please Select an Image!",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "chat-app");
//       data.append("cloud_name", "dwrquhhn9");
//       fetch("https://api.cloudinary.com/v1_1/dwrquhhn9/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//           setPicLoading(false);
//         })
//         .catch((err) => {
//           setPicLoading(false);
//         });
//     } else {
//       toast({
//         title: "Please Select an Image!",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setPicLoading(false);
//       return;
//     }
//   };

//   return (
//     <VStack spacing="5px">
//       <FormControl id="signup-name" isRequired>
//         <FormLabel color="white">Name</FormLabel>
//         <Input
//           placeholder="Enter Your Name"
//           onChange={(e) => setName(e.target.value)}
//           _placeholder={{ color: "white" }} // Make placeholder text white
//         />
//       </FormControl>
//       <FormControl id="signup-email" isRequired>
//         <FormLabel color="white">Email Address</FormLabel>
//         <Input
//           type="email"
//           placeholder="Enter Your Email Address"
//           onChange={(e) => setEmail(e.target.value)}
//           _placeholder={{ color: "white" }} // Make placeholder text white
//         />
//       </FormControl>
//       <FormControl id="signup-password" isRequired>
//         <FormLabel color="white">Password</FormLabel>
//         <InputGroup size="md">
//           <Input
//             type={show ? "text" : "password"}
//             placeholder="Enter Password"
//             onChange={(e) => setPassword(e.target.value)}
//             _placeholder={{ color: "white" }} // Make placeholder text white
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//       <FormControl id="signup-confirm-password" isRequired>
//         <FormLabel color="white">Confirm Password</FormLabel>
//         <InputGroup size="md">
//           <Input
//             type={show ? "text" : "password"}
//             placeholder="Confirm password"
//             onChange={(e) => setConfirmpassword(e.target.value)}
//             _placeholder={{ color: "white" }} // Make placeholder text white
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//       <FormControl id="signup-pic">
//         <FormLabel color="white">Upload your Picture</FormLabel>
//         <Input
//           type="file"
//           p={1.5}
//           accept="image/*"
//           onChange={(e) => postDetails(e.target.files[0])}
//         />
//       </FormControl>
//       <Button
//         colorScheme="blue"
//         width="100%"
//         style={{ marginTop: 15 }}
//         onClick={submitHandler}
//         isLoading={picLoading}
//       >
//         Sign Up
//       </Button>
//     </VStack>
//   );
// };

// export default Signup;




import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      history.push("/chats");
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dwrquhhn9");
      fetch("https://api.cloudinary.com/v1_1/dwrquhhn9/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            id="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </button>
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type={show ? "text" : "password"}
            id="confirm-password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pic">Upload Your Picture</label>
          <input
            type="file"
            id="pic"
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </div>
        <button type="button" onClick={submitHandler} disabled={picLoading}>
          {picLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};
export default Signup;

