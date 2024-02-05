// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adU29zJd9uLGW9TewABBsV
// Component: FjjS-KWqLu0p
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
import Button from "../../Button"; // plasmic-import: apXgE63BR30L/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicComment.module.css"; // plasmic-import: FjjS-KWqLu0p/css
import LikeSvgrepoComsvgIcon from "./icons/PlasmicIcon__LikeSvgrepoComsvg"; // plasmic-import: fk0APNR9z8Wz/icon
import LocationArrowSvgrepoComsvgIcon from "./icons/PlasmicIcon__LocationArrowSvgrepoComsvg"; // plasmic-import: DXlzMsobazwr/icon

createPlasmicElementProxy;

export const PlasmicComment__VariantProps = new Array("liked");

export const PlasmicComment__ArgProps = new Array();

const $$ = {};

function PlasmicComment__RenderFunc(props) {
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
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "liked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.liked
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
        { [sty.rootliked]: hasVariant($state, "liked", "liked") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__t0ZT, {
          [sty.freeBoxliked__t0ZTdFe6S]: hasVariant($state, "liked", "liked")
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__p7Sb1, {
            [sty.freeBoxliked__p7Sb1DFe6S]: hasVariant($state, "liked", "liked")
          })}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___0CtHj, {
              [sty.freeBoxliked___0CtHjdFe6S]: hasVariant(
                $state,
                "liked",
                "liked"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox___9CRnq, {
                [sty.freeBoxliked___9CRnqdFe6S]: hasVariant(
                  $state,
                  "liked",
                  "liked"
                )
              })}
            >
              <div
                className={classNames(projectcss.all, sty.freeBox__vxEdt, {
                  [sty.freeBoxliked__vxEdtdFe6S]: hasVariant(
                    $state,
                    "liked",
                    "liked"
                  )
                })}
              >
                <div
                  data-plasmic-name={"username"}
                  data-plasmic-override={overrides.username}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.username,
                    {
                      [sty.usernameliked]: hasVariant($state, "liked", "liked")
                    }
                  )}
                >
                  {"Anonymous"}
                </div>
              </div>
              <div
                className={classNames(projectcss.all, sty.freeBox__d5Jt9, {
                  [sty.freeBoxliked__d5Jt9DFe6S]: hasVariant(
                    $state,
                    "liked",
                    "liked"
                  )
                })}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text,
                    { [sty.textliked]: hasVariant($state, "liked", "liked") }
                  )}
                >
                  {"Group C is the best!"}
                </div>
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
                onOpenChange={generateStateOnChangeProp($state, [
                  "modal",
                  "open"
                ])}
                open={generateStateValueProp($state, ["modal", "open"])}
                title={"Comment Options"}
                trigger={null}
                width={"1200"}
              >
                <div className={classNames(projectcss.all, sty.freeBox__d3Fcb)}>
                  <Button
                    className={classNames("__wab_instance", sty.button__sIvBb)}
                  >
                    {"Edit Comment"}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__yb73)}
                  >
                    {"Delete Comment"}
                  </Button>
                </div>
              </AntdModal>
            </div>
            <div
              className={classNames(projectcss.all, sty.freeBox__xpSoV, {
                [sty.freeBoxliked__xpSoVdFe6S]: hasVariant(
                  $state,
                  "liked",
                  "liked"
                )
              })}
            >
              <div
                data-plasmic-name={"likeButton"}
                data-plasmic-override={overrides.likeButton}
                className={classNames(projectcss.all, sty.likeButton)}
              >
                <LikeSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__prLvb, {
                    [sty.svgliked__prLvbdFe6S]: hasVariant(
                      $state,
                      "liked",
                      "liked"
                    )
                  })}
                  role={"img"}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__ut5N)}>
                <div
                  data-plasmic-name={"likes"}
                  data-plasmic-override={overrides.likes}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.likes
                  )}
                >
                  {"0"}
                </div>
              </div>
              <div
                data-plasmic-name={"showLocation"}
                data-plasmic-override={overrides.showLocation}
                className={classNames(projectcss.all, sty.showLocation)}
              >
                <LocationArrowSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__c9AeG)}
                  role={"img"}
                />
              </div>
            </div>
          </Stack__>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "username",
    "text",
    "modal",
    "likeButton",
    "likes",
    "showLocation"
  ],

  username: ["username"],
  text: ["text"],
  modal: ["modal"],
  likeButton: ["likeButton"],
  likes: ["likes"],
  showLocation: ["showLocation"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicComment__ArgProps,
          internalVariantPropNames: PlasmicComment__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicComment__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComment";
  } else {
    func.displayName = `PlasmicComment.${nodeName}`;
  }
  return func;
}

export const PlasmicComment = Object.assign(
  // Top-level PlasmicComment renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    username: makeNodeComponent("username"),
    text: makeNodeComponent("text"),
    modal: makeNodeComponent("modal"),
    likeButton: makeNodeComponent("likeButton"),
    likes: makeNodeComponent("likes"),
    showLocation: makeNodeComponent("showLocation"),
    // Metadata about props expected for PlasmicComment
    internalVariantProps: PlasmicComment__VariantProps,
    internalArgProps: PlasmicComment__ArgProps
  }
);

export default PlasmicComment;
/* prettier-ignore-end */
