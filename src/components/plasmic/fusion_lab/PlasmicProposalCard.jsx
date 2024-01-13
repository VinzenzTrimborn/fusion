// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: 13bqDO-cKM5b
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
import sty from "./PlasmicProposalCard.module.css"; // plasmic-import: 13bqDO-cKM5b/css
import FrameIcon from "./icons/PlasmicIcon__Frame"; // plasmic-import: _icd06TQqTSN/icon

createPlasmicElementProxy;

export const PlasmicProposalCard__VariantProps = new Array();

export const PlasmicProposalCard__ArgProps = new Array("children");

const $$ = {};

function PlasmicProposalCard__RenderFunc(props) {
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___24Uq5)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__aJjh)}>
          {p.renderPlasmicSlot({
            defaultContents: "Proposal A",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__r5WcM)}
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
            {"see more"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__clxF7)}>
            <FrameIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>
        </p.Stack>
      </p.Stack>
      <div className={classNames(projectcss.all, sty.freeBox__oOw0O)} />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "svg"],
  text: ["text"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProposalCard__ArgProps,
          internalVariantPropNames: PlasmicProposalCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProposalCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProposalCard";
  } else {
    func.displayName = `PlasmicProposalCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProposalCard = Object.assign(
  // Top-level PlasmicProposalCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicProposalCard
    internalVariantProps: PlasmicProposalCard__VariantProps,
    internalArgProps: PlasmicProposalCard__ArgProps
  }
);

export default PlasmicProposalCard;
/* prettier-ignore-end */
