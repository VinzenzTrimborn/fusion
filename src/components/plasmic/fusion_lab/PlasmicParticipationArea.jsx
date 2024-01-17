// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: clPh1NSkBPaO
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Comment from "../../Comment"; // plasmic-import: FjjS-KWqLu0p/component
import UserAuth from "../../UserAuth"; // plasmic-import: zv2IqcCjwXro/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicParticipationArea.module.css"; // plasmic-import: clPh1NSkBPaO/css
import QuestionCircleSvgrepoComsvgIcon from "./icons/PlasmicIcon__QuestionCircleSvgrepoComsvg"; // plasmic-import: 0DE5OuaA8WJ1/icon

createPlasmicElementProxy;

export const PlasmicParticipationArea__VariantProps = new Array();

export const PlasmicParticipationArea__ArgProps = new Array();

const $$ = {};

function PlasmicParticipationArea__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "newCommentText.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
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
      <div className={classNames(projectcss.all, sty.freeBox__mnvTp)}>
        <div className={classNames(projectcss.all, sty.freeBox__vAye7)}>
          <div
            data-plasmic-name={"canvas"}
            data-plasmic-override={overrides.canvas}
            className={classNames(projectcss.all, sty.canvas)}
          />

          <div
            data-plasmic-name={"helpButton"}
            data-plasmic-override={overrides.helpButton}
            className={classNames(projectcss.all, sty.helpButton)}
          >
            <QuestionCircleSvgrepoComsvgIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__nw8Q1)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__diJG)}
            >
              <textarea
                data-plasmic-name={"newCommentText"}
                data-plasmic-override={overrides.newCommentText}
                className={classNames(
                  projectcss.all,
                  projectcss.textarea,
                  sty.newCommentText
                )}
                onChange={e => {
                  p.generateStateOnChangeProp($state, [
                    "newCommentText",
                    "value"
                  ])(e.target.value);
                }}
                placeholder={"Type in comment here..."}
                ref={ref => {
                  $refs["newCommentText"] = ref;
                }}
                value={
                  p.generateStateValueProp($state, [
                    "newCommentText",
                    "value"
                  ]) ?? ""
                }
              />

              <div
                data-plasmic-name={"sendButton"}
                data-plasmic-override={overrides.sendButton}
                className={classNames(projectcss.all, sty.sendButton)}
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
                  {"Leave Comment"}
                </div>
              </div>
            </p.Stack>
            <p.Stack
              as={"div"}
              data-plasmic-name={"commentSidebar"}
              data-plasmic-override={overrides.commentSidebar}
              hasGap={true}
              className={classNames(projectcss.all, sty.commentSidebar)}
            >
              <Comment
                className={classNames("__wab_instance", sty.comment__fuV80)}
              />

              <Comment
                className={classNames("__wab_instance", sty.comment__jXvz)}
              />

              <Comment
                className={classNames("__wab_instance", sty.comment__wMo2)}
              />

              <Comment
                className={classNames("__wab_instance", sty.comment__syp9S)}
              />

              <Comment
                className={classNames("__wab_instance", sty.comment__hdDi)}
              />

              <Comment
                className={classNames("__wab_instance", sty.comment__bbf8W)}
              />
            </p.Stack>
          </p.Stack>
        </div>
      </div>
      <UserAuth
        data-plasmic-name={"userAuth"}
        data-plasmic-override={overrides.userAuth}
        className={classNames("__wab_instance", sty.userAuth)}
        open={false}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "canvas",
    "helpButton",
    "svg",
    "newCommentText",
    "sendButton",
    "text",
    "commentSidebar",
    "userAuth"
  ],

  canvas: ["canvas"],
  helpButton: ["helpButton", "svg"],
  svg: ["svg"],
  newCommentText: ["newCommentText"],
  sendButton: ["sendButton", "text"],
  text: ["text"],
  commentSidebar: ["commentSidebar"],
  userAuth: ["userAuth"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicParticipationArea__ArgProps,
          internalVariantPropNames: PlasmicParticipationArea__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicParticipationArea__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicParticipationArea";
  } else {
    func.displayName = `PlasmicParticipationArea.${nodeName}`;
  }
  return func;
}

export const PlasmicParticipationArea = Object.assign(
  // Top-level PlasmicParticipationArea renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    canvas: makeNodeComponent("canvas"),
    helpButton: makeNodeComponent("helpButton"),
    svg: makeNodeComponent("svg"),
    newCommentText: makeNodeComponent("newCommentText"),
    sendButton: makeNodeComponent("sendButton"),
    text: makeNodeComponent("text"),
    commentSidebar: makeNodeComponent("commentSidebar"),
    userAuth: makeNodeComponent("userAuth"),
    // Metadata about props expected for PlasmicParticipationArea
    internalVariantProps: PlasmicParticipationArea__VariantProps,
    internalArgProps: PlasmicParticipationArea__ArgProps
  }
);

export default PlasmicParticipationArea;
/* prettier-ignore-end */
