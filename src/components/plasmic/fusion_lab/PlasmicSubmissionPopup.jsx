// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: WfiBN6F4EFom
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicSubmissionPopup.module.css"; // plasmic-import: WfiBN6F4EFom/css
import checkOneOLn2Q3HdIiHd from "./images/checkOne.svg"; // plasmic-import: oLn2Q3hdIIHd/picture
import frame1042Gi6A7CMnoJyb from "./images/frame1042.svg"; // plasmic-import: GI6a7cMnoJYB/picture

createPlasmicElementProxy;

export const PlasmicSubmissionPopup__VariantProps = new Array();

export const PlasmicSubmissionPopup__ArgProps = new Array();

const $$ = {};

function PlasmicSubmissionPopup__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"alert01"}
        data-plasmic-override={overrides.alert01}
        className={classNames(projectcss.all, sty.alert01)}
      >
        <div
          data-plasmic-name={"frame1141"}
          data-plasmic-override={overrides.frame1141}
          className={classNames(projectcss.all, sty.frame1141)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame1038"}
            data-plasmic-override={overrides.frame1038}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame1038)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame1045"}
              data-plasmic-override={overrides.frame1045}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame1045)}
            >
              <div
                data-plasmic-name={"icon"}
                data-plasmic-override={overrides.icon}
                className={classNames(projectcss.all, sty.icon)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__tkeGv)}
                  displayHeight={"28px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"28px"}
                  loading={"lazy"}
                  src={{
                    src: checkOneOLn2Q3HdIiHd,
                    fullWidth: 28,
                    fullHeight: 28,
                    aspectRatio: 1
                  }}
                />
              </div>
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame1039"}
                data-plasmic-override={overrides.frame1039}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame1039)}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Successfully submitted!"}
                </div>
                <div
                  data-plasmic-name={"paragraph"}
                  data-plasmic-override={overrides.paragraph}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.paragraph
                  )}
                >
                  {"Thank you for answering the questions!"}
                </div>
              </p.Stack>
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={p.PlasmicImg}
            hasGap={true}
            alt={""}
            className={classNames(sty.img__j3JaV)}
            displayHeight={"24px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"24px"}
            loading={"lazy"}
            src={{
              src: frame1042Gi6A7CMnoJyb,
              fullWidth: 24,
              fullHeight: 24,
              aspectRatio: 1
            }}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "alert01",
    "frame1141",
    "frame1038",
    "frame1045",
    "icon",
    "frame1039",
    "text",
    "paragraph"
  ],

  alert01: [
    "alert01",
    "frame1141",
    "frame1038",
    "frame1045",
    "icon",
    "frame1039",
    "text",
    "paragraph"
  ],

  frame1141: [
    "frame1141",
    "frame1038",
    "frame1045",
    "icon",
    "frame1039",
    "text",
    "paragraph"
  ],

  frame1038: [
    "frame1038",
    "frame1045",
    "icon",
    "frame1039",
    "text",
    "paragraph"
  ],

  frame1045: ["frame1045", "icon", "frame1039", "text", "paragraph"],
  icon: ["icon"],
  frame1039: ["frame1039", "text", "paragraph"],
  text: ["text"],
  paragraph: ["paragraph"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSubmissionPopup__ArgProps,
          internalVariantPropNames: PlasmicSubmissionPopup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSubmissionPopup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSubmissionPopup";
  } else {
    func.displayName = `PlasmicSubmissionPopup.${nodeName}`;
  }
  return func;
}

export const PlasmicSubmissionPopup = Object.assign(
  // Top-level PlasmicSubmissionPopup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    alert01: makeNodeComponent("alert01"),
    frame1141: makeNodeComponent("frame1141"),
    frame1038: makeNodeComponent("frame1038"),
    frame1045: makeNodeComponent("frame1045"),
    icon: makeNodeComponent("icon"),
    frame1039: makeNodeComponent("frame1039"),
    text: makeNodeComponent("text"),
    paragraph: makeNodeComponent("paragraph"),
    // Metadata about props expected for PlasmicSubmissionPopup
    internalVariantProps: PlasmicSubmissionPopup__VariantProps,
    internalArgProps: PlasmicSubmissionPopup__ArgProps
  }
);

export default PlasmicSubmissionPopup;
/* prettier-ignore-end */
