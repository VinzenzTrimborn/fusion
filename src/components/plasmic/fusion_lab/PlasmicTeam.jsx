// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: SnzWAy89iw5m
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
import sty from "./PlasmicTeam.module.css"; // plasmic-import: SnzWAy89iw5m/css
import ellipse94Pwwq9GinLkcJ from "./images/ellipse94.svg"; // plasmic-import: Pwwq9GINLkcJ/picture
import ellipse96VqRzDp9T50Mu from "./images/ellipse96.svg"; // plasmic-import: VqRzDP9t50MU/picture
import ellipse95Z1FcWs93Tz from "./images/ellipse95.svg"; // plasmic-import: Z1fcWS9-3TZ-/picture
import ellipse98HNxjJfqdv0Ot from "./images/ellipse98.svg"; // plasmic-import: hNXJJfqdv0ot/picture
import ellipse97WXYy61HktYmm from "./images/ellipse97.svg"; // plasmic-import: wXYy61hktYmm/picture

createPlasmicElementProxy;

export const PlasmicTeam__VariantProps = new Array();

export const PlasmicTeam__ArgProps = new Array();

const $$ = {};

function PlasmicTeam__RenderFunc(props) {
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
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <div className={classNames(projectcss.all, sty.freeBox___0ZDE)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__lca8N
          )}
        >
          {"Team"}
        </div>
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__mcGsO)}
      >
        <div
          data-plasmic-name={"firstRoll"}
          data-plasmic-override={overrides.firstRoll}
          className={classNames(projectcss.all, sty.firstRoll)}
        >
          <div
            data-plasmic-name={"boxLelino"}
            data-plasmic-override={overrides.boxLelino}
            className={classNames(projectcss.all, sty.boxLelino)}
          >
            <p.PlasmicImg
              data-plasmic-name={"photoLelino"}
              data-plasmic-override={overrides.photoLelino}
              alt={""}
              className={classNames(sty.photoLelino)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"80%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: ellipse94Pwwq9GinLkcJ,
                fullWidth: 331,
                fullHeight: 331,
                aspectRatio: 1
              }}
            />

            <div
              data-plasmic-name={"linkedinLelino"}
              data-plasmic-override={overrides.linkedinLelino}
              className={classNames(projectcss.all, sty.linkedinLelino)}
              onClick={async event => {
                const $steps = {};
                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {};
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          location.assign(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToPage"] != null &&
                  typeof $steps["goToPage"] === "object" &&
                  typeof $steps["goToPage"].then === "function"
                ) {
                  $steps["goToPage"] = await $steps["goToPage"];
                }
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___144B0
              )}
            >
              {"Lelino\nGomes"}
            </div>
          </div>
          <div
            data-plasmic-name={"boxTina"}
            data-plasmic-override={overrides.boxTina}
            className={classNames(projectcss.all, sty.boxTina)}
          >
            <p.PlasmicImg
              data-plasmic-name={"photoTina"}
              data-plasmic-override={overrides.photoTina}
              alt={""}
              className={classNames(sty.photoTina)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"80%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: ellipse96VqRzDp9T50Mu,
                fullWidth: 331,
                fullHeight: 331,
                aspectRatio: 1
              }}
            />

            <div
              data-plasmic-name={"linkedinTina"}
              data-plasmic-override={overrides.linkedinTina}
              className={classNames(projectcss.all, sty.linkedinTina)}
              onClick={async event => {
                const $steps = {};
                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {};
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          location.assign(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToPage"] != null &&
                  typeof $steps["goToPage"] === "object" &&
                  typeof $steps["goToPage"].then === "function"
                ) {
                  $steps["goToPage"] = await $steps["goToPage"];
                }
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rxhKp
              )}
            >
              {"Celtina\nBalaj"}
            </div>
          </div>
          <div
            data-plasmic-name={"boxVinzenz"}
            data-plasmic-override={overrides.boxVinzenz}
            className={classNames(projectcss.all, sty.boxVinzenz)}
          >
            <p.PlasmicImg
              data-plasmic-name={"photoVinzenz"}
              data-plasmic-override={overrides.photoVinzenz}
              alt={""}
              className={classNames(sty.photoVinzenz)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"80%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: ellipse95Z1FcWs93Tz,
                fullWidth: 331,
                fullHeight: 331,
                aspectRatio: 1
              }}
            />

            <div
              data-plasmic-name={"linkedinVinzenz"}
              data-plasmic-override={overrides.linkedinVinzenz}
              className={classNames(projectcss.all, sty.linkedinVinzenz)}
              onClick={async event => {
                const $steps = {};
                $steps["goToHttpswwwlinkedincominvinzenzTrimborn"] = true
                  ? (() => {
                      const actionArgs = {
                        destination:
                          "https://www.linkedin.com/in/vinzenz-trimborn/"
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          location.assign(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHttpswwwlinkedincominvinzenzTrimborn"] != null &&
                  typeof $steps["goToHttpswwwlinkedincominvinzenzTrimborn"] ===
                    "object" &&
                  typeof $steps["goToHttpswwwlinkedincominvinzenzTrimborn"]
                    .then === "function"
                ) {
                  $steps["goToHttpswwwlinkedincominvinzenzTrimborn"] =
                    await $steps["goToHttpswwwlinkedincominvinzenzTrimborn"];
                }
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sVNtH
              )}
            >
              {"Vinzenz\nTrimborn"}
            </div>
          </div>
        </div>
        <div
          data-plasmic-name={"secondRoll"}
          data-plasmic-override={overrides.secondRoll}
          className={classNames(projectcss.all, sty.secondRoll)}
        >
          <div
            data-plasmic-name={"boxMohammad"}
            data-plasmic-override={overrides.boxMohammad}
            className={classNames(projectcss.all, sty.boxMohammad)}
          >
            <p.PlasmicImg
              data-plasmic-name={"photoMohammad"}
              data-plasmic-override={overrides.photoMohammad}
              alt={""}
              className={classNames(sty.photoMohammad)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"80%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: ellipse98HNxjJfqdv0Ot,
                fullWidth: 331,
                fullHeight: 331,
                aspectRatio: 1
              }}
            />

            <div
              data-plasmic-name={"linkedinMohammad"}
              data-plasmic-override={overrides.linkedinMohammad}
              className={classNames(projectcss.all, sty.linkedinMohammad)}
              onClick={async event => {
                const $steps = {};
                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {};
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          location.assign(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToPage"] != null &&
                  typeof $steps["goToPage"] === "object" &&
                  typeof $steps["goToPage"].then === "function"
                ) {
                  $steps["goToPage"] = await $steps["goToPage"];
                }
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nwz1W
              )}
            >
              {"Mohammad Alrabab\u2019h"}
            </div>
          </div>
          <div
            data-plasmic-name={"boxKoray"}
            data-plasmic-override={overrides.boxKoray}
            className={classNames(projectcss.all, sty.boxKoray)}
          >
            <p.PlasmicImg
              data-plasmic-name={"photoKoray"}
              data-plasmic-override={overrides.photoKoray}
              alt={""}
              className={classNames(sty.photoKoray)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"80%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: ellipse97WXYy61HktYmm,
                fullWidth: 331,
                fullHeight: 331,
                aspectRatio: 1
              }}
            />

            <div
              data-plasmic-name={"linkedinKoray"}
              data-plasmic-override={overrides.linkedinKoray}
              className={classNames(projectcss.all, sty.linkedinKoray)}
              onClick={async event => {
                const $steps = {};
                $steps["goToPage"] = true
                  ? (() => {
                      const actionArgs = {};
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          location.assign(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToPage"] != null &&
                  typeof $steps["goToPage"] === "object" &&
                  typeof $steps["goToPage"].then === "function"
                ) {
                  $steps["goToPage"] = await $steps["goToPage"];
                }
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__o2J8N
              )}
            >
              {"Koray\nInal"}
            </div>
          </div>
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "firstRoll",
    "boxLelino",
    "photoLelino",
    "linkedinLelino",
    "boxTina",
    "photoTina",
    "linkedinTina",
    "boxVinzenz",
    "photoVinzenz",
    "linkedinVinzenz",
    "secondRoll",
    "boxMohammad",
    "photoMohammad",
    "linkedinMohammad",
    "boxKoray",
    "photoKoray",
    "linkedinKoray"
  ],

  firstRoll: [
    "firstRoll",
    "boxLelino",
    "photoLelino",
    "linkedinLelino",
    "boxTina",
    "photoTina",
    "linkedinTina",
    "boxVinzenz",
    "photoVinzenz",
    "linkedinVinzenz"
  ],

  boxLelino: ["boxLelino", "photoLelino", "linkedinLelino"],
  photoLelino: ["photoLelino"],
  linkedinLelino: ["linkedinLelino"],
  boxTina: ["boxTina", "photoTina", "linkedinTina"],
  photoTina: ["photoTina"],
  linkedinTina: ["linkedinTina"],
  boxVinzenz: ["boxVinzenz", "photoVinzenz", "linkedinVinzenz"],
  photoVinzenz: ["photoVinzenz"],
  linkedinVinzenz: ["linkedinVinzenz"],
  secondRoll: [
    "secondRoll",
    "boxMohammad",
    "photoMohammad",
    "linkedinMohammad",
    "boxKoray",
    "photoKoray",
    "linkedinKoray"
  ],

  boxMohammad: ["boxMohammad", "photoMohammad", "linkedinMohammad"],
  photoMohammad: ["photoMohammad"],
  linkedinMohammad: ["linkedinMohammad"],
  boxKoray: ["boxKoray", "photoKoray", "linkedinKoray"],
  photoKoray: ["photoKoray"],
  linkedinKoray: ["linkedinKoray"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTeam__ArgProps,
          internalVariantPropNames: PlasmicTeam__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeam__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeam";
  } else {
    func.displayName = `PlasmicTeam.${nodeName}`;
  }
  return func;
}

export const PlasmicTeam = Object.assign(
  // Top-level PlasmicTeam renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    firstRoll: makeNodeComponent("firstRoll"),
    boxLelino: makeNodeComponent("boxLelino"),
    photoLelino: makeNodeComponent("photoLelino"),
    linkedinLelino: makeNodeComponent("linkedinLelino"),
    boxTina: makeNodeComponent("boxTina"),
    photoTina: makeNodeComponent("photoTina"),
    linkedinTina: makeNodeComponent("linkedinTina"),
    boxVinzenz: makeNodeComponent("boxVinzenz"),
    photoVinzenz: makeNodeComponent("photoVinzenz"),
    linkedinVinzenz: makeNodeComponent("linkedinVinzenz"),
    secondRoll: makeNodeComponent("secondRoll"),
    boxMohammad: makeNodeComponent("boxMohammad"),
    photoMohammad: makeNodeComponent("photoMohammad"),
    linkedinMohammad: makeNodeComponent("linkedinMohammad"),
    boxKoray: makeNodeComponent("boxKoray"),
    photoKoray: makeNodeComponent("photoKoray"),
    linkedinKoray: makeNodeComponent("linkedinKoray"),
    // Metadata about props expected for PlasmicTeam
    internalVariantProps: PlasmicTeam__VariantProps,
    internalArgProps: PlasmicTeam__ArgProps
  }
);

export default PlasmicTeam;
/* prettier-ignore-end */
