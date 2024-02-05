// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: YbzHlcQNiy51
import * as React from "react";
import {
  PlasmicIcon as PlasmicIcon__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState,
  useTrigger
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as pp from "@plasmicapp/react-web";
import Select__Overlay from "../../Select__Overlay"; // plasmic-import: XBkijaWkHdy5/component
import Select__Option from "../../Select__Option"; // plasmic-import: ke75249KxUU3/component
import Select__OptionGroup from "../../Select__OptionGroup"; // plasmic-import: ZkFEZxJlkbzP/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicSelect.module.css"; // plasmic-import: YbzHlcQNiy51/css
import ChevronDownsvgIcon from "./icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: 7c3Q7EmSE3Jp/icon
import ChevronUpsvgIcon from "./icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: YVd9z0ygTnMD/icon

createPlasmicElementProxy;

export const PlasmicSelect__VariantProps = new Array(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "color"
);

export const PlasmicSelect__ArgProps = new Array(
  "selectedContent",
  "placeholder",
  "children",
  "value",
  "name",
  "aria-label",
  "aria-labelledby",
  "options",
  "onChange"
);

const PlasmicSelectContext = React.createContext(undefined);

const $$ = {};

function PlasmicSelect__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
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
        path: "showPlaceholder",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showPlaceholder
      },
      {
        path: "isOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isOpen
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "value",
        type: "writable",
        variableType: "text",
        valueProp: "value",
        onChangeProp: "onChange"
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
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };
  return (
    <PlasmicSelectContext.Provider value={{ variants, args }}>
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
            [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.rootcolor_clear]: hasVariant($state, "color", "clear"),
            [sty.rootcolor_softBlue]: hasVariant($state, "color", "softBlue"),
            [sty.rootcolor_softCyan]: hasVariant($state, "color", "softCyan"),
            [sty.rootcolor_softGreen]: hasVariant($state, "color", "softGreen"),
            [sty.rootcolor_softOrange]: hasVariant(
              $state,
              "color",
              "softOrange"
            ),
            [sty.rootcolor_softPink]: hasVariant($state, "color", "softPink"),
            [sty.rootcolor_softPurple]: hasVariant(
              $state,
              "color",
              "softPurple"
            ),
            [sty.rootcolor_softRed]: hasVariant($state, "color", "softRed"),
            [sty.rootcolor_softYellow]: hasVariant(
              $state,
              "color",
              "softYellow"
            ),
            [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen")
          }
        )}
        data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
      >
        <button
          data-plasmic-name={"trigger"}
          data-plasmic-override={overrides.trigger}
          className={classNames(
            projectcss.all,
            projectcss.button,
            sty.trigger,
            {
              [sty.trigger___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.triggercolor_clear]: hasVariant($state, "color", "clear"),
              [sty.triggercolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.triggercolor_softCyan]: hasVariant(
                $state,
                "color",
                "softCyan"
              ),
              [sty.triggercolor_softGray]: hasVariant(
                $state,
                "color",
                "softGray"
              ),
              [sty.triggercolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.triggercolor_softOrange]: hasVariant(
                $state,
                "color",
                "softOrange"
              ),
              [sty.triggercolor_softPink]: hasVariant(
                $state,
                "color",
                "softPink"
              ),
              [sty.triggercolor_softPurple]: hasVariant(
                $state,
                "color",
                "softPurple"
              ),
              [sty.triggercolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.triggercolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.triggerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.triggerisOpen]: hasVariant($state, "isOpen", "isOpen")
            }
          )}
          disabled={
            hasVariant($state, "isDisabled", "isDisabled") ? true : undefined
          }
          ref={ref => {
            $refs["trigger"] = ref;
          }}
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainercolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.contentContainerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.contentContainershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              )
            })}
          >
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentcolor_softBlue]: hasVariant(
                      $state,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetSelectedContentcolor_softCyan]: hasVariant(
                      $state,
                      "color",
                      "softCyan"
                    ),
                    [sty.slotTargetSelectedContentcolor_softGreen]: hasVariant(
                      $state,
                      "color",
                      "softGreen"
                    ),
                    [sty.slotTargetSelectedContentcolor_softOrange]: hasVariant(
                      $state,
                      "color",
                      "softOrange"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPink]: hasVariant(
                      $state,
                      "color",
                      "softPink"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPurple]: hasVariant(
                      $state,
                      "color",
                      "softPurple"
                    ),
                    [sty.slotTargetSelectedContentcolor_softRed]: hasVariant(
                      $state,
                      "color",
                      "softRed"
                    ),
                    [sty.slotTargetSelectedContentcolor_softYellow]: hasVariant(
                      $state,
                      "color",
                      "softYellow"
                    ),
                    [sty.slotTargetSelectedContentisDisabled]: hasVariant(
                      $state,
                      "isDisabled",
                      "isDisabled"
                    ),
                    [sty.slotTargetSelectedContentisOpen]: hasVariant(
                      $state,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? true
                : (() => {
                    try {
                      return !$state.value;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return false;
                      }
                      throw e;
                    }
                  })()
            )
              ? renderPlasmicSlot({
                  defaultContents: "Select\u2026",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholdercolor_softBlue]: hasVariant(
                      $state,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetPlaceholdercolor_softCyan_showPlaceholder]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softCyan"),
                    [sty.slotTargetPlaceholdercolor_softGreen_showPlaceholder]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softGreen"),
                    [sty.slotTargetPlaceholdercolor_softPink_showPlaceholder]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softPink"),
                    [sty.slotTargetPlaceholdercolor_softYellow_showPlaceholder]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softYellow"),
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softBlue]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softBlue"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softOrange]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softOrange"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softPurple]:
                      hasVariant($state, "color", "softPurple") &&
                      hasVariant($state, "showPlaceholder", "showPlaceholder"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softRed]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softRed")
                  })
                })
              : null}
          </div>
          <PlasmicIcon__
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant($state, "isOpen", "isOpen")
                ? ChevronUpsvgIcon
                : ChevronDownsvgIcon
            }
            className={classNames(projectcss.all, sty.dropdownIcon, {
              [sty.dropdownIcon___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.dropdownIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.dropdownIconcolor_softCyan]: hasVariant(
                $state,
                "color",
                "softCyan"
              ),
              [sty.dropdownIconcolor_softGray]: hasVariant(
                $state,
                "color",
                "softGray"
              ),
              [sty.dropdownIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.dropdownIconcolor_softOrange]: hasVariant(
                $state,
                "color",
                "softOrange"
              ),
              [sty.dropdownIconcolor_softPink]: hasVariant(
                $state,
                "color",
                "softPink"
              ),
              [sty.dropdownIconcolor_softPurple]: hasVariant(
                $state,
                "color",
                "softPurple"
              ),
              [sty.dropdownIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.dropdownIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.dropdownIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.dropdownIconisOpen]: hasVariant($state, "isOpen", "isOpen")
            })}
            role={"img"}
          />
        </button>
        {(hasVariant($state, "isOpen", "isOpen") ? true : false) ? (
          <Select__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlayisOpen]: hasVariant($state, "isOpen", "isOpen")
            })}
            relativePlacement={"bottom"}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(projectcss.all, sty.optionsContainer, {
                [sty.optionsContainerisOpen]: hasVariant(
                  $state,
                  "isOpen",
                  "isOpen"
                )
              })}
            >
              {renderPlasmicSlot({
                defaultContents: null,
                value: args.children
              })}
            </div>
          </Select__Overlay>
        ) : null}
      </div>
    </PlasmicSelectContext.Provider>
  );
}

function useBehavior(props, ref) {
  if (!("options" in props)) {
  }
  return pp.useSelect(
    PlasmicSelect,
    props,
    {
      ...{
        isOpenVariant: { group: "isOpen", variant: "isOpen" },
        placeholderVariant: {
          group: "showPlaceholder",
          variant: "showPlaceholder"
        },
        isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
        triggerContentSlot: "selectedContent",
        optionsSlot: "children",
        placeholderSlot: "placeholder",
        root: "root",
        trigger: "trigger",
        overlay: "overlay",
        optionsContainer: "optionsContainer"
      },
      OptionComponent: Select__Option,
      OptionGroupComponent: Select__OptionGroup
    },
    ref
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "trigger",
    "contentContainer",
    "dropdownIcon",
    "overlay",
    "optionsContainer"
  ],

  trigger: ["trigger", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"],
  overlay: ["overlay", "optionsContainer"],
  optionsContainer: ["optionsContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSelect__ArgProps,
          internalVariantPropNames: PlasmicSelect__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect";
  } else {
    func.displayName = `PlasmicSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect = Object.assign(
  // Top-level PlasmicSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),
    // Metadata about props expected for PlasmicSelect
    internalVariantProps: PlasmicSelect__VariantProps,
    internalArgProps: PlasmicSelect__ArgProps,
    // Context for sub components
    Context: PlasmicSelectContext,
    useBehavior
  }
);

export default PlasmicSelect;
/* prettier-ignore-end */
