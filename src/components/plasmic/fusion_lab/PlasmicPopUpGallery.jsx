// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: lKMH_lDVGHXv
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  set as $stateSet,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicPopUpGallery.module.css"; // plasmic-import: lKMH_lDVGHXv/css
import closeWhite36Dp1RrVeLvbYQpRj from "./images/closeWhite36Dp1.svg"; // plasmic-import: RrVeLvbYQpRJ/picture
import chevronLeftBlack24Dp2MYaRzqAvvItW from "./images/chevronLeftBlack24Dp2.svg"; // plasmic-import: mYaRZQAvvItW/picture
import chevronRightBlack24Dp1HPr2YtSdR4R from "./images/chevronRightBlack24Dp1.svg"; // plasmic-import: hPr2YTSd-R4R/picture

createPlasmicElementProxy;

export const PlasmicPopUpGallery__VariantProps = new Array("popUpVariants");

export const PlasmicPopUpGallery__ArgProps = new Array();

const $$ = {};

function PlasmicPopUpGallery__RenderFunc(props) {
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
        path: "popUpVariants",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.popUpVariants
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
          [sty.rootpopUpVariants_activity1]: hasVariant(
            $state,
            "popUpVariants",
            "activity1"
          ),
          [sty.rootpopUpVariants_activity2]: hasVariant(
            $state,
            "popUpVariants",
            "activity2"
          ),
          [sty.rootpopUpVariants_activity3]: hasVariant(
            $state,
            "popUpVariants",
            "activity3"
          ),
          [sty.rootpopUpVariants_activity4]: hasVariant(
            $state,
            "popUpVariants",
            "activity4"
          ),
          [sty.rootpopUpVariants_activity5]: hasVariant(
            $state,
            "popUpVariants",
            "activity5"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"lightboxDisplay"}
        data-plasmic-override={overrides.lightboxDisplay}
        className={classNames(projectcss.all, sty.lightboxDisplay)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__qUZjT)}>
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"36px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"36px"}
            loading={"lazy"}
            onClick={async event => {
              const $steps = {};
              $steps["goToProjectDetails"] = true
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
                $steps["goToProjectDetails"] != null &&
                typeof $steps["goToProjectDetails"] === "object" &&
                typeof $steps["goToProjectDetails"].then === "function"
              ) {
                $steps["goToProjectDetails"] = await $steps[
                  "goToProjectDetails"
                ];
              }
            }}
            src={{
              src: closeWhite36Dp1RrVeLvbYQpRj,
              fullWidth: 36,
              fullHeight: 36,
              aspectRatio: 1
            }}
          />
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vWrtT, {
            [sty.freeBoxpopUpVariants_activity1__vWrtTlPvvs]: hasVariant(
              $state,
              "popUpVariants",
              "activity1"
            )
          })}
        >
          <PlasmicImg__
            data-plasmic-name={"leftArrow"}
            data-plasmic-override={overrides.leftArrow}
            alt={""}
            className={classNames(sty.leftArrow, {
              [sty.leftArrowpopUpVariants_activity1]: hasVariant(
                $state,
                "popUpVariants",
                "activity1"
              ),
              [sty.leftArrowpopUpVariants_activity2]: hasVariant(
                $state,
                "popUpVariants",
                "activity2"
              ),
              [sty.leftArrowpopUpVariants_activity3]: hasVariant(
                $state,
                "popUpVariants",
                "activity3"
              )
            })}
            displayHeight={"56px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"auto"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            onClick={async event => {
              const $steps = {};
              $steps["updatePopUpVariants"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "popUpVariants",
                      operation: 0,
                      value: "activity2"
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }
                      $stateSet($state, vgroup, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updatePopUpVariants"] != null &&
                typeof $steps["updatePopUpVariants"] === "object" &&
                typeof $steps["updatePopUpVariants"].then === "function"
              ) {
                $steps["updatePopUpVariants"] = await $steps[
                  "updatePopUpVariants"
                ];
              }
            }}
            src={{
              src: chevronLeftBlack24Dp2MYaRzqAvvItW,
              fullWidth: 47,
              fullHeight: 56,
              aspectRatio: 0.839286
            }}
          />

          <div
            data-plasmic-name={"display"}
            data-plasmic-override={overrides.display}
            className={classNames(projectcss.all, sty.display)}
          >
            <div
              data-plasmic-name={"maskGroup"}
              data-plasmic-override={overrides.maskGroup}
              className={classNames(projectcss.all, sty.maskGroup)}
            >
              <div
                data-plasmic-name={"image"}
                data-plasmic-override={overrides.image}
                className={classNames(projectcss.all, sty.image, {
                  [sty.imagepopUpVariants_activity2]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity2"
                  ),
                  [sty.imagepopUpVariants_activity3]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity3"
                  ),
                  [sty.imagepopUpVariants_activity4]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity4"
                  ),
                  [sty.imagepopUpVariants_activity5]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity5"
                  )
                })}
              />
            </div>
            <div
              data-plasmic-name={"maskGroup2"}
              data-plasmic-override={overrides.maskGroup2}
              className={classNames(projectcss.all, sty.maskGroup2)}
            >
              <div
                data-plasmic-name={"image2"}
                data-plasmic-override={overrides.image2}
                className={classNames(projectcss.all, sty.image2)}
              />

              <div
                data-plasmic-name={
                  "extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience"
                }
                data-plasmic-override={
                  overrides.extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience
                }
                className={classNames(
                  projectcss.all,
                  sty.extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience,
                  {
                    [sty.extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConveniencepopUpVariants_activity4]:
                      hasVariant($state, "popUpVariants", "activity4")
                  }
                )}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text,
                    {
                      [sty.textpopUpVariants_activity2]: hasVariant(
                        $state,
                        "popUpVariants",
                        "activity2"
                      ),
                      [sty.textpopUpVariants_activity3]: hasVariant(
                        $state,
                        "popUpVariants",
                        "activity3"
                      ),
                      [sty.textpopUpVariants_activity4]: hasVariant(
                        $state,
                        "popUpVariants",
                        "activity4"
                      ),
                      [sty.textpopUpVariants_activity5]: hasVariant(
                        $state,
                        "popUpVariants",
                        "activity5"
                      )
                    }
                  )}
                >
                  {hasVariant($state, "popUpVariants", "activity5")
                    ? "In the northern region, our design prioritized the creation of a functional noise barrier. This was achieved by integrating a stair-like structure that serves as a versatile communal space. Residents can use it for diverse activities, such as hosting small gatherings, enjoying music, engaging in comedy performances, karaoke sessions, or holding discussions about updates in bridge activities and the surrounding area. Moreover, the space features a small playground, a park-like area, and a bioswale, a landscape element designed to manage stormwater runoff, promoting environmental sustainability within the community."
                    : hasVariant($state, "popUpVariants", "activity4")
                    ? "In the southern section, we have designed a more spacious area to ensure enhanced visibility for cars navigating through the crossroad and ramp connections. This not only optimizes safety but also improves the overall traffic flow. Additionally, we envision incorporating a cozy coffee cabin, perfect for grabbing a quick coffee to go as you disembark from your train and make your way home. For added community convenience, we're considering the inclusion of a small, temporary daytime vegetable market. This market would feature a simple yet flexible structure, tailored to meet the diverse needs of the local residents."
                    : hasVariant($state, "popUpVariants", "activity3")
                    ? "We aim for the bridge to be a standout landmark and a go-to spot for special experiences. Imagine a platform that lets visitors climb the arches, securing them with cables for controlled access. From the top, enjoy stunning views of Munich's skyline, passing trains, and the sunset over the railways. \n\nThe redesigned underpass features glazed structures on both sides, offering a  view of trains for those passing through. Linear illumination along the main directions adds a touch of brilliance to the bridge's innovative design."
                    : hasVariant($state, "popUpVariants", "activity2")
                    ? "The skatepark stands out as one of the few activities that seamlessly blend with the unique environment beneath the bridge. Positioned strategically, it is situated adjacent to the bridge's sidewalks, easily accessible via a carefully placed ramp. Visitors can smoothly transition from the top of the bridge, traversing the ramp while observing skaters in action and admiring the graffiti adorning the columns. The thoughtful placement of the ramp ensures a clear separation from the bicycle lane, allowing cyclists to enjoy a dedicated path that leads under the bridge toward the park in the west."
                    : "Extending from the skate park, users will flow from ramps to an open area adorned with graffiti-covered columns. Here, one can relax while looking at the art or indulge in climbing, conveniently close to home. The climbing wall, integrated onto reinforced walls supporting ramps, maintains privacy with covered upper sides and allows natural light through carefully placed openings. Well-lit for nighttime use, the space includes a few parking spots with power stations for electric vehicles, enhancing accessibility and convenience."}
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"maskGroup3"}
              data-plasmic-override={overrides.maskGroup3}
              className={classNames(projectcss.all, sty.maskGroup3)}
            >
              <div
                data-plasmic-name={"image3"}
                data-plasmic-override={overrides.image3}
                className={classNames(projectcss.all, sty.image3, {
                  [sty.image3popUpVariants_activity2]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity2"
                  ),
                  [sty.image3popUpVariants_activity3]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity3"
                  ),
                  [sty.image3popUpVariants_activity4]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity4"
                  ),
                  [sty.image3popUpVariants_activity5]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity5"
                  )
                })}
              />
            </div>
            <div
              data-plasmic-name={"maskGroup4"}
              data-plasmic-override={overrides.maskGroup4}
              className={classNames(projectcss.all, sty.maskGroup4)}
            >
              <div
                data-plasmic-name={"image4"}
                data-plasmic-override={overrides.image4}
                className={classNames(projectcss.all, sty.image4, {
                  [sty.image4popUpVariants_activity2]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity2"
                  ),
                  [sty.image4popUpVariants_activity3]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity3"
                  )
                })}
              />
            </div>
            <div
              data-plasmic-name={"caption"}
              data-plasmic-override={overrides.caption}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.caption,
                {
                  [sty.captionpopUpVariants_activity2]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity2"
                  ),
                  [sty.captionpopUpVariants_activity4]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity4"
                  ),
                  [sty.captionpopUpVariants_activity5]: hasVariant(
                    $state,
                    "popUpVariants",
                    "activity5"
                  )
                }
              )}
            >
              {hasVariant($state, "popUpVariants", "activity5")
                ? "open activities \non the north"
                : hasVariant($state, "popUpVariants", "activity4")
                ? "open activities \non the south"
                : hasVariant($state, "popUpVariants", "activity2")
                ? "Skate-park area"
                : "over the bridge \nplatform"}
            </div>
          </div>
          <PlasmicImg__
            data-plasmic-name={"rightArrow"}
            data-plasmic-override={overrides.rightArrow}
            alt={""}
            className={classNames(sty.rightArrow, {
              [sty.rightArrowpopUpVariants_activity1]: hasVariant(
                $state,
                "popUpVariants",
                "activity1"
              ),
              [sty.rightArrowpopUpVariants_activity2]: hasVariant(
                $state,
                "popUpVariants",
                "activity2"
              ),
              [sty.rightArrowpopUpVariants_activity3]: hasVariant(
                $state,
                "popUpVariants",
                "activity3"
              )
            })}
            displayHeight={"56px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"47px"}
            loading={"lazy"}
            onClick={async event => {
              const $steps = {};
              $steps["updatePopUpVariants"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "popUpVariants",
                      operation: 0,
                      value: "activity4"
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }
                      $stateSet($state, vgroup, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updatePopUpVariants"] != null &&
                typeof $steps["updatePopUpVariants"] === "object" &&
                typeof $steps["updatePopUpVariants"].then === "function"
              ) {
                $steps["updatePopUpVariants"] = await $steps[
                  "updatePopUpVariants"
                ];
              }
            }}
            src={{
              src: chevronRightBlack24Dp1HPr2YtSdR4R,
              fullWidth: 47,
              fullHeight: 56,
              aspectRatio: 0.839286
            }}
          />
        </Stack__>
        <div
          data-plasmic-name={"vottingButton"}
          data-plasmic-override={overrides.vottingButton}
          className={classNames(projectcss.all, sty.vottingButton)}
          onClick={async event => {
            const $steps = {};
            $steps["updateStateVariable"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    undefined;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateStateVariable"] != null &&
              typeof $steps["updateStateVariable"] === "object" &&
              typeof $steps["updateStateVariable"].then === "function"
            ) {
              $steps["updateStateVariable"] = await $steps[
                "updateStateVariable"
              ];
            }
          }}
        >
          <div
            data-plasmic-name={"leaveAComment"}
            data-plasmic-override={overrides.leaveAComment}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.leaveAComment
            )}
          >
            {"Leave a comment"}
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "lightboxDisplay",
    "img",
    "leftArrow",
    "display",
    "maskGroup",
    "image",
    "maskGroup2",
    "image2",
    "extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience",
    "text",
    "maskGroup3",
    "image3",
    "maskGroup4",
    "image4",
    "caption",
    "rightArrow",
    "vottingButton",
    "leaveAComment"
  ],

  lightboxDisplay: [
    "lightboxDisplay",
    "img",
    "leftArrow",
    "display",
    "maskGroup",
    "image",
    "maskGroup2",
    "image2",
    "extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience",
    "text",
    "maskGroup3",
    "image3",
    "maskGroup4",
    "image4",
    "caption",
    "rightArrow",
    "vottingButton",
    "leaveAComment"
  ],

  img: ["img"],
  leftArrow: ["leftArrow"],
  display: [
    "display",
    "maskGroup",
    "image",
    "maskGroup2",
    "image2",
    "extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience",
    "text",
    "maskGroup3",
    "image3",
    "maskGroup4",
    "image4",
    "caption"
  ],

  maskGroup: ["maskGroup", "image"],
  image: ["image"],
  maskGroup2: [
    "maskGroup2",
    "image2",
    "extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience",
    "text"
  ],

  image2: ["image2"],
  extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience:
    [
      "extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience",
      "text"
    ],

  text: ["text"],
  maskGroup3: ["maskGroup3", "image3"],
  image3: ["image3"],
  maskGroup4: ["maskGroup4", "image4"],
  image4: ["image4"],
  caption: ["caption"],
  rightArrow: ["rightArrow"],
  vottingButton: ["vottingButton", "leaveAComment"],
  leaveAComment: ["leaveAComment"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPopUpGallery__ArgProps,
          internalVariantPropNames: PlasmicPopUpGallery__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPopUpGallery__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPopUpGallery";
  } else {
    func.displayName = `PlasmicPopUpGallery.${nodeName}`;
  }
  return func;
}

export const PlasmicPopUpGallery = Object.assign(
  // Top-level PlasmicPopUpGallery renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    lightboxDisplay: makeNodeComponent("lightboxDisplay"),
    img: makeNodeComponent("img"),
    leftArrow: makeNodeComponent("leftArrow"),
    display: makeNodeComponent("display"),
    maskGroup: makeNodeComponent("maskGroup"),
    image: makeNodeComponent("image"),
    maskGroup2: makeNodeComponent("maskGroup2"),
    image2: makeNodeComponent("image2"),
    extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience:
      makeNodeComponent(
        "extendingFromTheSkateParkUsersWillFlowFromRampsToAnOpenAreaAdornedWithGraffitiCoveredColumnsHereOneCanRelaxWhileLookingAtTheArtOrIndulgeInClimbingConvenientlyCloseToHomeTheClimbingWallIntegratedOntoReinforcedWallsSupportingRampsMaintainsPrivacyWithCoveredUpperSidesAndAllowsNaturalLightThroughCarefullyPlacedOpeningsWellLitForNighttimeUseTheSpaceIncludesAFewParkingSpotsWithPowerStationsForElectricVehiclesEnhancingAccessibilityAndConvenience"
      ),
    text: makeNodeComponent("text"),
    maskGroup3: makeNodeComponent("maskGroup3"),
    image3: makeNodeComponent("image3"),
    maskGroup4: makeNodeComponent("maskGroup4"),
    image4: makeNodeComponent("image4"),
    caption: makeNodeComponent("caption"),
    rightArrow: makeNodeComponent("rightArrow"),
    vottingButton: makeNodeComponent("vottingButton"),
    leaveAComment: makeNodeComponent("leaveAComment"),
    // Metadata about props expected for PlasmicPopUpGallery
    internalVariantProps: PlasmicPopUpGallery__VariantProps,
    internalArgProps: PlasmicPopUpGallery__ArgProps
  }
);

export default PlasmicPopUpGallery;
/* prettier-ignore-end */
