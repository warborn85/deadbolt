import React, { Fragment, useState } from "react";
import { Camera } from "./Camera";
import { Root, Preview, Footer, GlobalStyle } from "./global-styles";
import Button from '@material-ui/core/Button';

export function PictureTaker() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <Fragment>
      <div>
        {isCameraOpen && (
          <Camera
            onCapture={blob => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <div>
            <h2>Preview</h2>
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
          </div>
        )}
        <div>
          <Button
            onClick={() => setIsCameraOpen(true)}
          >
            Open Camera
          </Button>
          <Button
            onClick={() => {
              setIsCameraOpen(false);
              // setCardImage(undefined);
            }}
          >
            Close Camera
          </Button>
          {/* <Button
            onClick={() => {
              setIsCameraOpen(true);
              setCardImage(undefined);
            }}
          >
            Take Another
          </Button> */}
        </div>
      </div>
      {/* <GlobalStyle /> */}
    </Fragment>
  );
}
