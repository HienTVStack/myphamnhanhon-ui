import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Image from "../../../components/Image";
import { SearchResultItem } from "../../../styles/Search";

function SearchResultBlog({ blog }) {
    return (
        <SearchResultItem component={Link} to={`/bai-viet/${blog.slug}`}>
            <Box width={"60px"} height={"60px"}>
                <Image src={blog.image} alt={blog.title} />
            </Box>
            <Stack justifyContent={"center"} flex={1} ml={1}>
                <Typography variant={"body1"} component="h4" fontSize={"16px"} color={"rgba(22,24,35,.8)"} lineHeight={1.5}>
                    {blog.title}
                </Typography>
            </Stack>
        </SearchResultItem>
    );
}

export default SearchResultBlog;
