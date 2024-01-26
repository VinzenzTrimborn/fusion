// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: x_Fghcos84Ui
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
import sty from "./PlasmicActionButton.module.css"; // plasmic-import: x_Fghcos84Ui/css

createPlasmicElementProxy;

export const PlasmicActionButton__VariantProps = new Array("options");

export const PlasmicActionButton__ArgProps = new Array("children");

const $$ = {};

function PlasmicActionButton__RenderFunc(props) {
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
        path: "options",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.options
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
        {
          [sty.rootoptions_sVersion]: hasVariant($state, "options", "sVersion")
        }
      )}
      onClick={async event => {
        const $steps = {};
        $steps["goToQuestionnaire"] = true
          ? (() => {
              const actionArgs = { destination: `/questionnaire` };
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
          $steps["goToQuestionnaire"] != null &&
          typeof $steps["goToQuestionnaire"] === "object" &&
          typeof $steps["goToQuestionnaire"].then === "function"
        ) {
          $steps["goToQuestionnaire"] = await $steps["goToQuestionnaire"];
        }
      }}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxoptions_sVersion]: hasVariant(
            $state,
            "options",
            "sVersion"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Participate & Give Feedback",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenoptions_sVersion]: hasVariant(
              $state,
              "options",
              "sVersion"
            )
          })
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicActionButton__ArgProps,
          internalVariantPropNames: PlasmicActionButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActionButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActionButton";
  } else {
    func.displayName = `PlasmicActionButton.${nodeName}`;
  }
  return func;
}

export const PlasmicActionButton = Object.assign(
  // Top-level PlasmicActionButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicActionButton
    internalVariantProps: PlasmicActionButton__VariantProps,
    internalArgProps: PlasmicActionButton__ArgProps
  }
);

export default PlasmicActionButton;
/* prettier-ignore-end */
