"use client";

import SectionContainer from "../Section";
import {
  LoadingTextContainer,
  SkeletonLoadingContainer,
  SkeletonDiv,
  SkeletonNavbar,
  SkeletonNavItems,
} from "./styles";

export default function SkeletonLoading() {
  return (
    <SectionContainer>
      <SkeletonNavbar>
        <SkeletonDiv $width="170px" $height="2.4em" />
        <SkeletonNavItems>
          <SkeletonDiv $width="80px" $height="2em" />
          <SkeletonDiv $width="80px" $height="2em" />
          <SkeletonDiv $width="80px" $height="2em" />
          <SkeletonDiv $width="80px" $height="2em" />
          <SkeletonDiv $width="35px" $height="2em" />
          <SkeletonDiv $width="35px" $height="2em" />
        </SkeletonNavItems>
      </SkeletonNavbar>
      <SkeletonLoadingContainer>
        <LoadingTextContainer>
          <SkeletonDiv $width="250px" $height="2.4em" $mb="1.5em" />
          <SkeletonDiv $width="500px" $height="2.4em" $mb="1.5em" />
          <SkeletonDiv $width="420px" $height="2.4em" />
          <SkeletonDiv $width="300px" $height="2em" $mb="3em" $mt="3em" />
          <SkeletonDiv $width="320px" $height="1.6em" $mb="0.8em" />
          <SkeletonDiv $width="320px" $height="1.6em" $mb="0.8em" />
          <SkeletonDiv $width="320px" $height="1.6em" $mb="0.8em" />
          <SkeletonDiv $width="320px" $height="1.6em" $mb="2em" />
          <SkeletonDiv $width="200px" $height="3em" />
        </LoadingTextContainer>
      </SkeletonLoadingContainer>
    </SectionContainer>
  );
}
