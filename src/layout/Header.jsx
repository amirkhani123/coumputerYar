import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../helper/searchInput";
import { SearchOutlined } from "@mui/icons-material";
function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <AppBar
        position="sticky"
        sx={{ bgcolor: "dark.black", color: "dark.white" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="h1" flex={1}>
              <Link to="/">زوپیت</Link>
            </Typography>
            <Search dir="ltr">
              <SearchIconWrapper>
                <SearchOutlined />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => {
                  setSearchParams((s) => ({
                    search: e.target.value,
                  }));
                }}
                dir="rtl"
                placeholder="جستجو ..."
                inputProps={{ "aria-label": "جستجو " }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
