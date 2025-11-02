import { Box, Image, Heading, Text, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();

  return (
    <>
      <Header title="News" withBack={true} />
      <ScrollView bg="$white">
        <Box>
          <Image
            source={{ uri: params.image }}
            alt="News Image"
            w="$full"
            h={250}
          />
        </Box>

        <Box px="$4" py="$3">
          <Text color="$gray500" fontSize="$sm" mb="$2">
            {params.date}
          </Text>

          <Heading fontSize="$lg" mb="$3" color="$black">
            {params.title}
          </Heading>

          <Text fontSize="$md" lineHeight="$lg" textAlign="justify" color="$gray800">
            {params.content
              ? params.content
              : "Konten berita tidak tersedia."}
          </Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
