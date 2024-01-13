// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: oAGE1uzhgryh
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
import sty from "./PlasmicVotingCard.module.css"; // plasmic-import: oAGE1uzhgryh/css

createPlasmicElementProxy;

export const PlasmicVotingCard__VariantProps = new Array();

export const PlasmicVotingCard__ArgProps = new Array(
  "voteCount",
  "proposalName"
);

const $$ = {};

function PlasmicVotingCard__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox__mKHqX)}>
        {p.renderPlasmicSlot({
          defaultContents: "Proposal A",
          value: args.proposalName,
          className: classNames(sty.slotTargetProposalName)
        })}
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__hPmQr)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___47I6H)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__qdUuN)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vpS7Q
              )}
            >
              {"Votes:"}
            </div>
          </div>
          {p.renderPlasmicSlot({
            defaultContents: "434.535",
            value: args.voteCount,
            className: classNames(sty.slotTargetVoteCount)
          })}
        </p.Stack>
      </p.Stack>
      <div className={classNames(projectcss.all, sty.freeBox__jZvUe)}>
        <div
          data-plasmic-name={"vottingButton"}
          data-plasmic-override={overrides.vottingButton}
          className={classNames(projectcss.all, sty.vottingButton)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__c7DRc
            )}
          >
            {"Vote"}
          </div>
        </div>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "vottingButton"],
  vottingButton: ["vottingButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicVotingCard__ArgProps,
          internalVariantPropNames: PlasmicVotingCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicVotingCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVotingCard";
  } else {
    func.displayName = `PlasmicVotingCard.${nodeName}`;
  }
  return func;
}

export const PlasmicVotingCard = Object.assign(
  // Top-level PlasmicVotingCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    vottingButton: makeNodeComponent("vottingButton"),
    // Metadata about props expected for PlasmicVotingCard
    internalVariantProps: PlasmicVotingCard__VariantProps,
    internalArgProps: PlasmicVotingCard__ArgProps
  }
);

export default PlasmicVotingCard;
/* prettier-ignore-end */
