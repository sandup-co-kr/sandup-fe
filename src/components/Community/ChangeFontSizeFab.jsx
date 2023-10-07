import React, { useState } from "react";
import { Fab } from "@mui/material";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Content = styled.div`
  margin-top: -10px;
  width: 100%;
  height: 500px;
  background-color: #f5f5f5;
  z-index: 1;
  filter: ${(props) => (props.showChildMenu ? "brightness(0.5)" : "none")};
`;

const ChangeFontSizeFab = ({ content, showChildMenu, onFloatingMenuClick }) => {
  const [fontSize, setFontSize] = useState(16);

  const handleFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize);
  };

  return (
    <div>
      <Fab
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "none",
          boxShadow: "none",
        }}
        onClick={onFloatingMenuClick}
      >
        <img
          src={
            showChildMenu
              ? `${process.env.PUBLIC_URL}/assets/floatingButtonClicked.svg`
              : `${process.env.PUBLIC_URL}/assets/floatingButton.svg`
          }
          alt="floatingMenu"
        />
      </Fab>
      {showChildMenu && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            bottom: "90px",
            right: "10px",
            zIndex: "2",
          }}
        >
          <Fab
            onMouseEnter={() => handleFontSizeChange(30)}
            style={{
              marginRight: "10px",
              background: "none",
              boxShadow: "none",
            }}
          >
            <Typography
              variant="body1"
              style={{
                whiteSpace: "nowrap",
                color: "#EEE",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "NanumSquare_ac",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "150%",
              }}
            >
              글씨 크게
            </Typography>
            <img
              style={{
                width: "80px",
                height: "80px",
                marginRight: "48.5px",
              }}
              src={`${process.env.PUBLIC_URL}/assets/floatingButtonFontBig.svg`}
              alt="Change Font Size Big"
            />
          </Fab>
          <Fab
            onMouseEnter={() => handleFontSizeChange(16)}
            style={{
              marginTop: "8px",
              marginRight: "10px",
              background: "none",
              boxShadow: "none",
            }}
          >
            <Typography
              variant="body1"
              style={{
                whiteSpace: "nowrap",
                color: "#EEE",
                leadingTrim: "both",
                textEdge: "cap",
                fontFamily: "NanumSquare_ac",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "150%",
              }}
            >
              글씨 작게
            </Typography>
            <img
              style={{
                width: "80px",
                height: "80px",
                marginRight: "48.5px",
              }}
              src={`${process.env.PUBLIC_URL}/assets/floatingButtonFontSmall.svg`}
              alt="Change Font Size Small"
            />
          </Fab>
        </div>
      )}
      <Content showChildMenu={showChildMenu}>
        <Typography
          variant="body1"
          showChildMenu={showChildMenu}
          style={{
            fontSize: `${fontSize}px`,
            marginTop: "10px",
          }}
        >
          {content.split("\n").map((line) => {
            return (
              <>
                {line.replace(/ /g, "\u00A0")}
                <br />
              </>
            );
          })}
        </Typography>
      </Content>
    </div>
  );
};

export default ChangeFontSizeFab;
