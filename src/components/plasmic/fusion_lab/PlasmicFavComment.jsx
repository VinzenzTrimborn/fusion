// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: 0MoHniQ3DN8s
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicFavComment.module.css"; // plasmic-import: 0MoHniQ3DN8s/css
import LikeSvgrepoComsvgIcon from "./icons/PlasmicIcon__LikeSvgrepoComsvg"; // plasmic-import: fk0APNR9z8Wz/icon
import LocationArrowSvgrepoComsvgIcon from "./icons/PlasmicIcon__LocationArrowSvgrepoComsvg"; // plasmic-import: DXlzMsobazwr/icon

createPlasmicElementProxy;

export const PlasmicFavComment__VariantProps = new Array("inFront");

export const PlasmicFavComment__ArgProps = new Array();

const $$ = {};

function PlasmicFavComment__RenderFunc(props) {
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
        path: "inFront",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.inFront
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
        sty.root,
        { [sty.rootinFront]: hasVariant($state, "inFront", "inFront") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___5RZm1, {
          [sty.freeBoxinFront___5RZm1N7Wy6]: hasVariant(
            $state,
            "inFront",
            "inFront"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__kyBml)}>
          <div
            data-plasmic-name={"username"}
            data-plasmic-override={overrides.username}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.username
            )}
          >
            {"Vinzenz@trimborn"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___535Oh)}>
            <div className={classNames(projectcss.all, sty.freeBox__plKZu)}>
              <LikeSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__yy8Eb)}
                role={"img"}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__fNv2V)}>
              <div
                data-plasmic-name={"likes"}
                data-plasmic-override={overrides.likes}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.likes
                )}
              >
                {"400"}
              </div>
            </div>
            <div
              data-plasmic-name={"locationButton"}
              data-plasmic-override={overrides.locationButton}
              className={classNames(projectcss.all, sty.locationButton)}
            >
              <LocationArrowSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__qqJrc)}
                role={"img"}
              />
            </div>
          </div>
        </div>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            { [sty.textinFront]: hasVariant($state, "inFront", "inFront") }
          )}
        >
          {
            "I wan go baff but I can\u2019t. Because chowdeck riders move like thieves in the night. Before you cough, rider don reach your gate. The efficiency and speed is crazy."
          }
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "username", "likes", "locationButton", "text"],
  username: ["username"],
  likes: ["likes"],
  locationButton: ["locationButton"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFavComment__ArgProps,
          internalVariantPropNames: PlasmicFavComment__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFavComment__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFavComment";
  } else {
    func.displayName = `PlasmicFavComment.${nodeName}`;
  }
  return func;
}

export const PlasmicFavComment = Object.assign(
  // Top-level PlasmicFavComment renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    username: makeNodeComponent("username"),
    likes: makeNodeComponent("likes"),
    locationButton: makeNodeComponent("locationButton"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicFavComment
    internalVariantProps: PlasmicFavComment__VariantProps,
    internalArgProps: PlasmicFavComment__ArgProps
  }
);

export default PlasmicFavComment;
/* prettier-ignore-end */
