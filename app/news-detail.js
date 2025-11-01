import { Heading, Text, Center } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <Center flex={1} padding={"$4"}>
        <Heading>News Detail</Heading>
        <Text textAlign="center">{params.title}</Text>
      </Center>
    </>
  );
};

export default NewsDetail;
