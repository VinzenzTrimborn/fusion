// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: BOUoKYlWFZly
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { AntdInputNumber } from "@plasmicpkgs/antd5/skinny/registerInput";
import Select from "../../Select"; // plasmic-import: YbzHlcQNiy51/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import Button from "../../Button"; // plasmic-import: apXgE63BR30L/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicActivityQuestions.module.css"; // plasmic-import: BOUoKYlWFZly/css

createPlasmicElementProxy;

export const PlasmicActivityQuestions__VariantProps = new Array("activity");

export const PlasmicActivityQuestions__ArgProps = new Array("open");

const $$ = {};

function PlasmicActivityQuestions__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          open: true
        },
        props.args
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props["open"]
      },
      {
        path: "numberInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textarea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "textarea2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "activity",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.activity
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
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
          [sty.rootactivity_bridgePlatform]: hasVariant(
            $state,
            "activity",
            "bridgePlatform"
          ),
          [sty.rootactivity_climbingWall]: hasVariant(
            $state,
            "activity",
            "climbingWall"
          ),
          [sty.rootactivity_openActivitiesNorth]: hasVariant(
            $state,
            "activity",
            "openActivitiesNorth"
          ),
          [sty.rootactivity_openActivitiesSouth]: hasVariant(
            $state,
            "activity",
            "openActivitiesSouth"
          ),
          [sty.rootactivity_skateParkArea]: hasVariant(
            $state,
            "activity",
            "skateParkArea"
          )
        }
      )}
    >
      <AntdModal
        data-plasmic-name={"modal"}
        data-plasmic-override={overrides.modal}
        className={classNames("__wab_instance", sty.modal, {
          [sty.modalactivity_climbingWall]: hasVariant(
            $state,
            "activity",
            "climbingWall"
          )
        })}
        defaultStylesClassName={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens
        )}
        footer={
          <div className={classNames(projectcss.all, sty.freeBox__wxuMq)}>
            <Button className={classNames("__wab_instance", sty.button__ppvOk)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__k1K7P
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700, color: "#FFFFFF" }}
                  >
                    {"Submit"}
                  </span>
                </React.Fragment>
              </div>
            </Button>
          </div>
        }
        modalScopeClassName={sty["modal__modal"]}
        onOpenChange={generateStateOnChangeProp($state, ["modal", "open"])}
        open={generateStateValueProp($state, ["modal", "open"])}
        title={
          hasVariant($state, "activity", "openActivitiesSouth")
            ? "What is your opinion of the open activities south?"
            : hasVariant($state, "activity", "openActivitiesNorth")
            ? "What is your opinion of the open activities north?"
            : hasVariant($state, "activity", "skateParkArea")
            ? "What is your opinion of the skate park area?"
            : hasVariant($state, "activity", "bridgePlatform")
            ? "What is your opinion of the bridge platform?"
            : "What is your opinion of the climbing wall?"
        }
        trigger={
          <AntdButton
            className={classNames("__wab_instance", sty.button__zHqam)}
            type={"primary"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5X3MJ
              )}
            >
              {"Give us your opinion"}
            </div>
          </AntdButton>
        }
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6TkBw)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tca74
            )}
          >
            {"On a scale from 1 (best) to 6 how do you like this idea?"}
          </div>
          <AntdInputNumber
            data-plasmic-name={"numberInput"}
            data-plasmic-override={overrides.numberInput}
            className={classNames("__wab_instance", sty.numberInput)}
            controls={true}
            max={6}
            min={1}
            onChange={generateStateOnChangeProp($state, [
              "numberInput",
              "value"
            ])}
            placeholder={"Grade"}
            step={1}
            type={"number"}
            value={generateStateValueProp($state, ["numberInput", "value"])}
          />
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___5UVn6)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__px7Sb
            )}
          >
            {"How often would you use this area?"}
          </div>
          <Select
            data-plasmic-name={"select"}
            data-plasmic-override={overrides.select}
            className={classNames("__wab_instance", sty.select)}
            onChange={(...eventArgs) => {
              generateStateOnChangeProp($state, ["select", "value"])(
                eventArgs[0]
              );
            }}
            options={(() => {
              const __composite = [
                { value: null, label: null },
                { value: null, label: null },
                { value: null, label: null }
              ];

              __composite["0"]["value"] = "Never";
              __composite["0"]["label"] = "Never";
              __composite["1"]["value"] = "1-2 per month";
              __composite["1"]["label"] = "1-2 per month";
              __composite["2"]["value"] = "More";
              __composite["2"]["label"] = "More";
              return __composite;
            })()}
            value={generateStateValueProp($state, ["select", "value"])}
          />
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__oIb3)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pjQjL
            )}
          >
            {"What do you not like about the current idea?"}
          </div>
          <textarea
            data-plasmic-name={"textarea2"}
            data-plasmic-override={overrides.textarea2}
            className={classNames(
              projectcss.all,
              projectcss.textarea,
              sty.textarea2
            )}
            onChange={e => {
              generateStateOnChangeProp($state, ["textarea2", "value"])(
                e.target.value
              );
            }}
            placeholder={"Describe what you do not like..."}
            ref={ref => {
              $refs["textarea2"] = ref;
            }}
            value={generateStateValueProp($state, ["textarea2", "value"]) ?? ""}
          />
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__sguF9)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___6QUek
            )}
          >
            {"What would you like to improve about this idea?"}
          </div>
          <textarea
            data-plasmic-name={"textarea"}
            data-plasmic-override={overrides.textarea}
            className={classNames(
              projectcss.all,
              projectcss.textarea,
              sty.textarea
            )}
            onChange={e => {
              generateStateOnChangeProp($state, ["textarea", "value"])(
                e.target.value
              );
            }}
            placeholder={"Describe what you would improve..."}
            ref={ref => {
              $refs["textarea"] = ref;
            }}
            value={generateStateValueProp($state, ["textarea", "value"]) ?? ""}
          />
        </Stack__>
      </AntdModal>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "modal", "numberInput", "select", "textarea2", "textarea"],
  modal: ["modal", "numberInput", "select", "textarea2", "textarea"],
  numberInput: ["numberInput"],
  select: ["select"],
  textarea2: ["textarea2"],
  textarea: ["textarea"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicActivityQuestions__ArgProps,
          internalVariantPropNames: PlasmicActivityQuestions__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActivityQuestions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivityQuestions";
  } else {
    func.displayName = `PlasmicActivityQuestions.${nodeName}`;
  }
  return func;
}

export const PlasmicActivityQuestions = Object.assign(
  // Top-level PlasmicActivityQuestions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    modal: makeNodeComponent("modal"),
    numberInput: makeNodeComponent("numberInput"),
    select: makeNodeComponent("select"),
    textarea2: makeNodeComponent("textarea2"),
    textarea: makeNodeComponent("textarea"),
    // Metadata about props expected for PlasmicActivityQuestions
    internalVariantProps: PlasmicActivityQuestions__VariantProps,
    internalArgProps: PlasmicActivityQuestions__ArgProps
  }
);

export default PlasmicActivityQuestions;
/* prettier-ignore-end */
