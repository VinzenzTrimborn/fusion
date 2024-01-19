// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: ua_gmRo83aZu
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { AntdInputNumber } from "@plasmicpkgs/antd5/skinny/registerInput";
import Select from "../../Select"; // plasmic-import: YbzHlcQNiy51/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import Button from "../../Button"; // plasmic-import: apXgE63BR30L/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicQuestions.module.css"; // plasmic-import: ua_gmRo83aZu/css
import checkOneOLn2Q3HdIiHd from "./images/checkOne.svg"; // plasmic-import: oLn2Q3hdIIHd/picture

createPlasmicElementProxy;

export const PlasmicQuestions__VariantProps = new Array();

export const PlasmicQuestions__ArgProps = new Array();

const $$ = {};

function PlasmicQuestions__RenderFunc(props) {
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
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "postalCode.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "howOften.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "bridgeUse.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "commute.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "bridgeActivities.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
      data-plasmic-name={"generalStack"}
      data-plasmic-override={overrides.generalStack}
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
        sty.generalStack
      )}
    >
      <div
        data-plasmic-name={"textForm"}
        data-plasmic-override={overrides.textForm}
        className={classNames(projectcss.all, sty.textForm)}
      >
        <div
          data-plasmic-name={"textGroup"}
          data-plasmic-override={overrides.textGroup}
          className={classNames(projectcss.all, sty.textGroup)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___1YjqO
            )}
          >
            {"That\u2019s very nice of you "}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__daDbc
            )}
          >
            {
              "The questions below help us understand your feedback better and enable us to address them in our design"
            }
          </div>
        </div>
        <div
          data-plasmic-name={"formGroup"}
          data-plasmic-override={overrides.formGroup}
          className={classNames(projectcss.all, sty.formGroup)}
        >
          <div
            data-plasmic-name={"formColumn"}
            data-plasmic-override={overrides.formColumn}
            className={classNames(projectcss.all, sty.formColumn)}
          >
            <div
              data-plasmic-name={"firstRow"}
              data-plasmic-override={overrides.firstRow}
              className={classNames(projectcss.all, sty.firstRow)}
            >
              <div
                data-plasmic-name={"postalCodeBox"}
                data-plasmic-override={overrides.postalCodeBox}
                className={classNames(projectcss.all, sty.postalCodeBox)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7WNz
                  )}
                >
                  {"Postal Code"}
                </div>
                <AntdInputNumber
                  data-plasmic-name={"postalCode"}
                  data-plasmic-override={overrides.postalCode}
                  className={classNames("__wab_instance", sty.postalCode)}
                  maxLength={8}
                  onChange={p.generateStateOnChangeProp($state, [
                    "postalCode",
                    "value"
                  ])}
                  type={"number"}
                  value={p.generateStateValueProp($state, [
                    "postalCode",
                    "value"
                  ])}
                />
              </div>
              <div
                data-plasmic-name={"countryBox"}
                data-plasmic-override={overrides.countryBox}
                className={classNames(projectcss.all, sty.countryBox)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hCdoE
                  )}
                >
                  {"Country"}
                </div>
                <Select
                  data-plasmic-name={"select"}
                  data-plasmic-override={overrides.select}
                  className={classNames("__wab_instance", sty.select)}
                  onChange={(...eventArgs) => {
                    p.generateStateOnChangeProp($state, ["select", "value"])(
                      eventArgs[0]
                    );
                  }}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" }
                  ]}
                  value={p.generateStateValueProp($state, ["select", "value"])}
                />
              </div>
            </div>
            <div
              data-plasmic-name={"howOftenBox"}
              data-plasmic-override={overrides.howOftenBox}
              className={classNames(projectcss.all, sty.howOftenBox)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7ANih
                )}
              >
                {
                  "How often do you use the Donnersberger Bridge Station (Bus or S-Bahn)?"
                }
              </div>
              <Select
                data-plasmic-name={"howOften"}
                data-plasmic-override={overrides.howOften}
                className={classNames("__wab_instance", sty.howOften)}
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, ["howOften", "value"])(
                    eventArgs[0]
                  );
                }}
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" }
                ]}
                value={p.generateStateValueProp($state, ["howOften", "value"])}
              />
            </div>
            <div
              data-plasmic-name={"bridgeUseBox"}
              data-plasmic-override={overrides.bridgeUseBox}
              className={classNames(projectcss.all, sty.bridgeUseBox)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nTn1
                )}
              >
                {"What do you use the Bridge for?"}
              </div>
              <Select
                data-plasmic-name={"bridgeUse"}
                data-plasmic-override={overrides.bridgeUse}
                className={classNames("__wab_instance", sty.bridgeUse)}
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, ["bridgeUse", "value"])(
                    eventArgs[0]
                  );
                }}
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" }
                ]}
                value={p.generateStateValueProp($state, ["bridgeUse", "value"])}
              />
            </div>
            <div
              data-plasmic-name={"commuteBox"}
              data-plasmic-override={overrides.commuteBox}
              className={classNames(projectcss.all, sty.commuteBox)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__padt3
                )}
              >
                {"How do you usually commute on the Bridge?"}
              </div>
              <Select
                data-plasmic-name={"commute"}
                data-plasmic-override={overrides.commute}
                className={classNames("__wab_instance", sty.commute)}
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, ["commute", "value"])(
                    eventArgs[0]
                  );
                }}
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" }
                ]}
                value={p.generateStateValueProp($state, ["commute", "value"])}
              />
            </div>
            <div
              data-plasmic-name={"bridgeActivitiesBox"}
              data-plasmic-override={overrides.bridgeActivitiesBox}
              className={classNames(projectcss.all, sty.bridgeActivitiesBox)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___78JRn
                )}
              >
                {"What kind of Bridge activities would spark your interest?"}
              </div>
              <Select
                data-plasmic-name={"bridgeActivities"}
                data-plasmic-override={overrides.bridgeActivities}
                className={classNames("__wab_instance", sty.bridgeActivities)}
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, [
                    "bridgeActivities",
                    "value"
                  ])(eventArgs[0]);
                }}
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" }
                ]}
                value={p.generateStateValueProp($state, [
                  "bridgeActivities",
                  "value"
                ])}
              />
            </div>
          </div>
        </div>
        <AntdButton
          className={classNames("__wab_instance", sty.button___64Ewy)}
          onClick={async () => {
            const $steps = {};
            $steps["updateModalOpen"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["modal", "open"]
                    },
                    operation: 0,
                    value: true
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    p.set(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateModalOpen"] != null &&
              typeof $steps["updateModalOpen"] === "object" &&
              typeof $steps["updateModalOpen"].then === "function"
            ) {
              $steps["updateModalOpen"] = await $steps["updateModalOpen"];
            }
          }}
          submitsForm={true}
          type={"primary"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tbYx5
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Submit"}
              </span>
            </React.Fragment>
          </div>
        </AntdButton>
      </div>
      <AntdModal
        data-plasmic-name={"modal"}
        data-plasmic-override={overrides.modal}
        className={classNames("__wab_instance", sty.modal)}
        defaultStylesClassName={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens
        )}
        hideFooter={true}
        modalScopeClassName={sty["modal__modal"]}
        onOpenChange={p.generateStateOnChangeProp($state, ["modal", "open"])}
        open={p.generateStateValueProp($state, ["modal", "open"])}
        title={
          <div className={classNames(projectcss.all, sty.freeBox__dp4FY)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vfAhg
              )}
            >
              {"Sucessfully Submitted!"}
            </div>
          </div>
        }
        trigger={null}
      >
        <div className={classNames(projectcss.all, sty.freeBox__rIj1H)}>
          <div
            data-plasmic-name={"icon"}
            data-plasmic-override={overrides.icon}
            className={classNames(projectcss.all, sty.icon)}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
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
          <div
            data-plasmic-name={"thanks"}
            data-plasmic-override={overrides.thanks}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.thanks
            )}
          >
            {"Thank you for answering the questions!"}
          </div>
        </div>
        <Button
          className={classNames("__wab_instance", sty.button___8Ovz5)}
          onClick={async event => {
            const $steps = {};
            $steps["goToHome"] = true
              ? (() => {
                  const actionArgs = { destination: `/` };
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
              $steps["goToHome"] != null &&
              typeof $steps["goToHome"] === "object" &&
              typeof $steps["goToHome"].then === "function"
            ) {
              $steps["goToHome"] = await $steps["goToHome"];
            }
          }}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__o73JR
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Return to Home"}
              </span>
            </React.Fragment>
          </div>
        </Button>
      </AntdModal>
    </div>
  );
}

const PlasmicDescendants = {
  generalStack: [
    "generalStack",
    "textForm",
    "textGroup",
    "formGroup",
    "formColumn",
    "firstRow",
    "postalCodeBox",
    "postalCode",
    "countryBox",
    "select",
    "howOftenBox",
    "howOften",
    "bridgeUseBox",
    "bridgeUse",
    "commuteBox",
    "commute",
    "bridgeActivitiesBox",
    "bridgeActivities",
    "modal",
    "icon",
    "img",
    "thanks"
  ],

  textForm: [
    "textForm",
    "textGroup",
    "formGroup",
    "formColumn",
    "firstRow",
    "postalCodeBox",
    "postalCode",
    "countryBox",
    "select",
    "howOftenBox",
    "howOften",
    "bridgeUseBox",
    "bridgeUse",
    "commuteBox",
    "commute",
    "bridgeActivitiesBox",
    "bridgeActivities"
  ],

  textGroup: ["textGroup"],
  formGroup: [
    "formGroup",
    "formColumn",
    "firstRow",
    "postalCodeBox",
    "postalCode",
    "countryBox",
    "select",
    "howOftenBox",
    "howOften",
    "bridgeUseBox",
    "bridgeUse",
    "commuteBox",
    "commute",
    "bridgeActivitiesBox",
    "bridgeActivities"
  ],

  formColumn: [
    "formColumn",
    "firstRow",
    "postalCodeBox",
    "postalCode",
    "countryBox",
    "select",
    "howOftenBox",
    "howOften",
    "bridgeUseBox",
    "bridgeUse",
    "commuteBox",
    "commute",
    "bridgeActivitiesBox",
    "bridgeActivities"
  ],

  firstRow: ["firstRow", "postalCodeBox", "postalCode", "countryBox", "select"],
  postalCodeBox: ["postalCodeBox", "postalCode"],
  postalCode: ["postalCode"],
  countryBox: ["countryBox", "select"],
  select: ["select"],
  howOftenBox: ["howOftenBox", "howOften"],
  howOften: ["howOften"],
  bridgeUseBox: ["bridgeUseBox", "bridgeUse"],
  bridgeUse: ["bridgeUse"],
  commuteBox: ["commuteBox", "commute"],
  commute: ["commute"],
  bridgeActivitiesBox: ["bridgeActivitiesBox", "bridgeActivities"],
  bridgeActivities: ["bridgeActivities"],
  modal: ["modal", "icon", "img", "thanks"],
  icon: ["icon", "img"],
  img: ["img"],
  thanks: ["thanks"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicQuestions__ArgProps,
          internalVariantPropNames: PlasmicQuestions__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicQuestions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "generalStack") {
    func.displayName = "PlasmicQuestions";
  } else {
    func.displayName = `PlasmicQuestions.${nodeName}`;
  }
  return func;
}

export const PlasmicQuestions = Object.assign(
  // Top-level PlasmicQuestions renders the root element
  makeNodeComponent("generalStack"),
  {
    // Helper components rendering sub-elements
    textForm: makeNodeComponent("textForm"),
    textGroup: makeNodeComponent("textGroup"),
    formGroup: makeNodeComponent("formGroup"),
    formColumn: makeNodeComponent("formColumn"),
    firstRow: makeNodeComponent("firstRow"),
    postalCodeBox: makeNodeComponent("postalCodeBox"),
    postalCode: makeNodeComponent("postalCode"),
    countryBox: makeNodeComponent("countryBox"),
    select: makeNodeComponent("select"),
    howOftenBox: makeNodeComponent("howOftenBox"),
    howOften: makeNodeComponent("howOften"),
    bridgeUseBox: makeNodeComponent("bridgeUseBox"),
    bridgeUse: makeNodeComponent("bridgeUse"),
    commuteBox: makeNodeComponent("commuteBox"),
    commute: makeNodeComponent("commute"),
    bridgeActivitiesBox: makeNodeComponent("bridgeActivitiesBox"),
    bridgeActivities: makeNodeComponent("bridgeActivities"),
    modal: makeNodeComponent("modal"),
    icon: makeNodeComponent("icon"),
    img: makeNodeComponent("img"),
    thanks: makeNodeComponent("thanks"),
    // Metadata about props expected for PlasmicQuestions
    internalVariantProps: PlasmicQuestions__VariantProps,
    internalArgProps: PlasmicQuestions__ArgProps
  }
);

export default PlasmicQuestions;
/* prettier-ignore-end */
