import React, { useState } from "react";
import { Fab } from "@mui/material";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Content = styled.div`
  margin-top: -10px;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  z-index: 1;
  filter: ${(props) => (props.showChildMenu ? "brightness(0.5)" : "none")};
`;

const FloatingMenu = styled(Fab)`
  background: "none !important",
  boxShadow: "none !important",
`;

const ChangeFontSizeFab = ({ content, showChildMenu, onFloatingMenuClick }) => {
  const [fontSize, setFontSize] = useState(16);

  const handleFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize);
  };

  const handleShareKakao = () => {};

  return (
    <div>
      <FloatingMenu
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
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
      </FloatingMenu>
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
          <FloatingMenu
            onClick={() => handleShareKakao()}
            style={{
              marginRight: "10px",
              marginBottom: "8px",
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
                marginRight: "10.5px",
              }}
            >
              카카오톡으로 공유
            </Typography>
            <img
              style={{
                width: "58px",
                height: "58px",
                marginRight: "105px",
              }}
              src={`${process.env.PUBLIC_URL}/assets/kakao.svg`}
              alt="Change Font Size Big"
            />
          </FloatingMenu>
          <FloatingMenu
            onClick={() => handleFontSizeChange(30)}
            style={{
              marginRight: "10px",
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
          </FloatingMenu>
          <FloatingMenu
            onClick={() => handleFontSizeChange(16)}
            style={{
              marginTop: "8px",
              marginRight: "10px",
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
          </FloatingMenu>
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
