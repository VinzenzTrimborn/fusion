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
import Checkbox from "../../Checkbox"; // plasmic-import: QYHJ3nGLufw1/component
import Select from "../../Select"; // plasmic-import: YbzHlcQNiy51/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_fusion_lab.module.css"; // plasmic-import: adU29zJd9uLGW9TewABBsV/projectcss
import sty from "./PlasmicQuestions.module.css"; // plasmic-import: ua_gmRo83aZu/css

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
        path: "checkbox1.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox4.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "checkbox5.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "select2.value",
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
      <div
        data-plasmic-name={"loginForm"}
        data-plasmic-override={overrides.loginForm}
        className={classNames(projectcss.all, sty.loginForm)}
      >
        <div
          data-plasmic-name={"infoBox"}
          data-plasmic-override={overrides.infoBox}
          className={classNames(projectcss.all, sty.infoBox)}
        >
          <div
            data-plasmic-name={"infoBoxDetail"}
            data-plasmic-override={overrides.infoBoxDetail}
            className={classNames(projectcss.all, sty.infoBoxDetail)}
          >
            <div
              data-plasmic-name={"rectangleInfoBox"}
              data-plasmic-override={overrides.rectangleInfoBox}
              className={classNames(projectcss.all, sty.rectangleInfoBox)}
            />

            <div
              data-plasmic-name={"infoBoxAgain"}
              data-plasmic-override={overrides.infoBoxAgain}
              className={classNames(projectcss.all, sty.infoBoxAgain)}
            >
              <div
                data-plasmic-name={"infoBoxAgainAgain"}
                data-plasmic-override={overrides.infoBoxAgainAgain}
                className={classNames(projectcss.all, sty.infoBoxAgainAgain)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yINft
                  )}
                >
                  {"Great!"}
                </div>
                <div
                  data-plasmic-name={"textGroup"}
                  data-plasmic-override={overrides.textGroup}
                  className={classNames(projectcss.all, sty.textGroup)}
                >
                  <div
                    data-plasmic-name={"thatsVeryNiceOfYou"}
                    data-plasmic-override={overrides.thatsVeryNiceOfYou}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.thatsVeryNiceOfYou
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
                  data-plasmic-name={"geography"}
                  data-plasmic-override={overrides.geography}
                  className={classNames(projectcss.all, sty.geography)}
                >
                  <div
                    data-plasmic-name={"postCode"}
                    data-plasmic-override={overrides.postCode}
                    className={classNames(projectcss.all, sty.postCode)}
                  >
                    <div
                      data-plasmic-name={"postalCodeTxT"}
                      data-plasmic-override={overrides.postalCodeTxT}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.postalCodeTxT
                      )}
                    >
                      {"Postal Code"}
                    </div>
                    <div
                      data-plasmic-name={"postCodeBox"}
                      data-plasmic-override={overrides.postCodeBox}
                      className={classNames(projectcss.all, sty.postCodeBox)}
                    >
                      <div
                        data-plasmic-name={"postCodeRect"}
                        data-plasmic-override={overrides.postCodeRect}
                        className={classNames(projectcss.all, sty.postCodeRect)}
                      />
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"country"}
                    data-plasmic-override={overrides.country}
                    className={classNames(projectcss.all, sty.country)}
                  >
                    <div
                      data-plasmic-name={"postalCodeTxT2"}
                      data-plasmic-override={overrides.postalCodeTxT2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.postalCodeTxT2
                      )}
                    >
                      {"Country"}
                    </div>
                    <div
                      data-plasmic-name={"postCodeBox2"}
                      data-plasmic-override={overrides.postCodeBox2}
                      className={classNames(projectcss.all, sty.postCodeBox2)}
                    >
                      <div
                        data-plasmic-name={"postCodeRect2"}
                        data-plasmic-override={overrides.postCodeRect2}
                        className={classNames(
                          projectcss.all,
                          sty.postCodeRect2
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-plasmic-name={"multipleChoice"}
                  data-plasmic-override={overrides.multipleChoice}
                  className={classNames(projectcss.all, sty.multipleChoice)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"question"}
                    data-plasmic-override={overrides.question}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.question)}
                  >
                    <div
                      data-plasmic-name={"label"}
                      data-plasmic-override={overrides.label}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.label
                      )}
                    >
                      {"How much do you know about Donnersberger Bridge? "}
                    </div>
                  </p.Stack>
                  <div
                    data-plasmic-name={"options"}
                    data-plasmic-override={overrides.options}
                    className={classNames(projectcss.all, sty.options)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"option1"}
                      data-plasmic-override={overrides.option1}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.option1)}
                    >
                      <Checkbox
                        data-plasmic-name={"checkbox1"}
                        data-plasmic-override={overrides.checkbox1}
                        className={classNames("__wab_instance", sty.checkbox1)}
                        isChecked={
                          p.generateStateValueProp($state, [
                            "checkbox1",
                            "isChecked"
                          ]) ?? false
                        }
                        onChange={(...eventArgs) => {
                          p.generateStateOnChangeProp($state, [
                            "checkbox1",
                            "isChecked"
                          ])(eventArgs[0]);
                        }}
                      >
                        {"i am familiar with the bridge"}
                      </Checkbox>
                    </p.Stack>
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"option2"}
                      data-plasmic-override={overrides.option2}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.option2)}
                    >
                      <Checkbox
                        data-plasmic-name={"checkbox4"}
                        data-plasmic-override={overrides.checkbox4}
                        className={classNames("__wab_instance", sty.checkbox4)}
                        isChecked={
                          p.generateStateValueProp($state, [
                            "checkbox4",
                            "isChecked"
                          ]) ?? false
                        }
                        onChange={(...eventArgs) => {
                          p.generateStateOnChangeProp($state, [
                            "checkbox4",
                            "isChecked"
                          ])(eventArgs[0]);
                        }}
                      >
                        {"I have heard of it"}
                      </Checkbox>
                    </p.Stack>
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"option3"}
                      data-plasmic-override={overrides.option3}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.option3)}
                    >
                      <Checkbox
                        data-plasmic-name={"checkbox5"}
                        data-plasmic-override={overrides.checkbox5}
                        className={classNames("__wab_instance", sty.checkbox5)}
                        isChecked={
                          p.generateStateValueProp($state, [
                            "checkbox5",
                            "isChecked"
                          ]) ?? false
                        }
                        onChange={(...eventArgs) => {
                          p.generateStateOnChangeProp($state, [
                            "checkbox5",
                            "isChecked"
                          ])(eventArgs[0]);
                        }}
                      >
                        {"I don't know much about it"}
                      </Checkbox>
                    </p.Stack>
                  </div>
                </div>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"question2"}
                  data-plasmic-override={overrides.question2}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.question2)}
                >
                  <div
                    data-plasmic-name={"label2"}
                    data-plasmic-override={overrides.label2}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label2
                    )}
                  >
                    {
                      "How often to you use Donnersbergerbr\u00fccke station (bus/s-bahn)?"
                    }
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame22"}
                  data-plasmic-override={overrides.frame22}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame22)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame2"}
                    data-plasmic-override={overrides.frame2}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame2)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jrZus
                      )}
                    >
                      {"Enter text"}
                    </div>
                  </p.Stack>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"question3"}
                  data-plasmic-override={overrides.question3}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.question3)}
                >
                  <div
                    data-plasmic-name={"label3"}
                    data-plasmic-override={overrides.label3}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label3
                    )}
                  >
                    {"What do you use the bridge for?"}
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame3"}
                  data-plasmic-override={overrides.frame3}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame3)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame4"}
                    data-plasmic-override={overrides.frame4}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame4)}
                  >
                    <div
                      data-plasmic-name={
                        "whenGoingToWorkWalkingYourDogOrGoingShopping"
                      }
                      data-plasmic-override={
                        overrides.whenGoingToWorkWalkingYourDogOrGoingShopping
                      }
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.whenGoingToWorkWalkingYourDogOrGoingShopping
                      )}
                    >
                      {
                        " when going to work, walking your dog, or going shopping?"
                      }
                    </div>
                  </p.Stack>
                </p.Stack>
                <div
                  data-plasmic-name={"additionalQuestions"}
                  data-plasmic-override={overrides.additionalQuestions}
                  className={classNames(
                    projectcss.all,
                    sty.additionalQuestions
                  )}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame5"}
                    data-plasmic-override={overrides.frame5}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame5)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hDqr9
                      )}
                    >
                      {"How do you usually commute in the bridge?"}
                    </div>
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"frame6"}
                      data-plasmic-override={overrides.frame6}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.frame6)}
                    >
                      <Select
                        data-plasmic-name={"select"}
                        data-plasmic-override={overrides.select}
                        className={classNames("__wab_instance", sty.select)}
                        onChange={(...eventArgs) => {
                          p.generateStateOnChangeProp($state, [
                            "select",
                            "value"
                          ])(eventArgs[0]);
                        }}
                        options={[
                          { value: "option1", label: "Option 1" },
                          { value: "option2", label: "Option 2" }
                        ]}
                        placeholder={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__p7Z6R
                            )}
                          >
                            {"Select\u2026"}
                          </div>
                        }
                        value={p.generateStateValueProp($state, [
                          "select",
                          "value"
                        ])}
                      />
                    </p.Stack>
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame7"}
                    data-plasmic-override={overrides.frame7}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame7)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iiFcm
                      )}
                    >
                      {
                        "What kind of bridge activities would spark your interest?"
                      }
                    </div>
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"frame8"}
                      data-plasmic-override={overrides.frame8}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.frame8)}
                    >
                      <Select
                        data-plasmic-name={"select2"}
                        data-plasmic-override={overrides.select2}
                        className={classNames("__wab_instance", sty.select2)}
                        onChange={(...eventArgs) => {
                          p.generateStateOnChangeProp($state, [
                            "select2",
                            "value"
                          ])(eventArgs[0]);
                        }}
                        options={[
                          { value: "option1", label: "Option 1" },
                          { value: "option2", label: "Option 2" }
                        ]}
                        value={p.generateStateValueProp($state, [
                          "select2",
                          "value"
                        ])}
                      />
                    </p.Stack>
                  </p.Stack>
                </div>
                <div
                  data-plasmic-name={"register"}
                  data-plasmic-override={overrides.register}
                  className={classNames(projectcss.all, sty.register)}
                >
                  <div
                    data-plasmic-name={"registerRectangle"}
                    data-plasmic-override={overrides.registerRectangle}
                    className={classNames(
                      projectcss.all,
                      sty.registerRectangle
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__g2RP
                      )}
                    >
                      {"Submit"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "loginForm",
    "infoBox",
    "infoBoxDetail",
    "rectangleInfoBox",
    "infoBoxAgain",
    "infoBoxAgainAgain",
    "textGroup",
    "thatsVeryNiceOfYou",
    "geography",
    "postCode",
    "postalCodeTxT",
    "postCodeBox",
    "postCodeRect",
    "country",
    "postalCodeTxT2",
    "postCodeBox2",
    "postCodeRect2",
    "multipleChoice",
    "question",
    "label",
    "options",
    "option1",
    "checkbox1",
    "option2",
    "checkbox4",
    "option3",
    "checkbox5",
    "question2",
    "label2",
    "frame22",
    "frame2",
    "question3",
    "label3",
    "frame3",
    "frame4",
    "whenGoingToWorkWalkingYourDogOrGoingShopping",
    "additionalQuestions",
    "frame5",
    "frame6",
    "select",
    "frame7",
    "frame8",
    "select2",
    "register",
    "registerRectangle"
  ],

  loginForm: [
    "loginForm",
    "infoBox",
    "infoBoxDetail",
    "rectangleInfoBox",
    "infoBoxAgain",
    "infoBoxAgainAgain",
    "textGroup",
    "thatsVeryNiceOfYou",
    "geography",
    "postCode",
    "postalCodeTxT",
    "postCodeBox",
    "postCodeRect",
    "country",
    "postalCodeTxT2",
    "postCodeBox2",
    "postCodeRect2",
    "multipleChoice",
    "question",
    "label",
    "options",
    "option1",
    "checkbox1",
    "option2",
    "checkbox4",
    "option3",
    "checkbox5",
    "question2",
    "label2",
    "frame22",
    "frame2",
    "question3",
    "label3",
    "frame3",
    "frame4",
    "whenGoingToWorkWalkingYourDogOrGoingShopping",
    "additionalQuestions",
    "frame5",
    "frame6",
    "select",
    "frame7",
    "frame8",
    "select2",
    "register",
    "registerRectangle"
  ],

  infoBox: [
    "infoBox",
    "infoBoxDetail",
    "rectangleInfoBox",
    "infoBoxAgain",
    "infoBoxAgainAgain",
    "textGroup",
    "thatsVeryNiceOfYou",
    "geography",
    "postCode",
    "postalCodeTxT",
    "postCodeBox",
    "postCodeRect",
    "country",
    "postalCodeTxT2",
    "postCodeBox2",
    "postCodeRect2",
    "multipleChoice",
    "question",
    "label",
    "options",
    "option1",
    "checkbox1",
    "option2",
    "checkbox4",
    "option3",
    "checkbox5",
    "question2",
    "label2",
    "frame22",
    "frame2",
    "question3",
    "label3",
    "frame3",
    "frame4",
    "whenGoingToWorkWalkingYourDogOrGoingShopping",
    "additionalQuestions",
    "frame5",
    "frame6",
    "select",
    "frame7",
    "frame8",
    "select2",
    "register",
    "registerRectangle"
  ],

  infoBoxDetail: [
    "infoBoxDetail",
    "rectangleInfoBox",
    "infoBoxAgain",
    "infoBoxAgainAgain",
    "textGroup",
    "thatsVeryNiceOfYou",
    "geography",
    "postCode",
    "postalCodeTxT",
    "postCodeBox",
    "postCodeRect",
    "country",
    "postalCodeTxT2",
    "postCodeBox2",
    "postCodeRect2",
    "multipleChoice",
    "question",
    "label",
    "options",
    "option1",
    "checkbox1",
    "option2",
    "checkbox4",
    "option3",
    "checkbox5",
    "question2",
    "label2",
    "frame22",
    "frame2",
    "question3",
    "label3",
    "frame3",
    "frame4",
    "whenGoingToWorkWalkingYourDogOrGoingShopping",
    "additionalQuestions",
    "frame5",
    "frame6",
    "select",
    "frame7",
    "frame8",
    "select2",
    "register",
    "registerRectangle"
  ],

  rectangleInfoBox: ["rectangleInfoBox"],
  infoBoxAgain: [
    "infoBoxAgain",
    "infoBoxAgainAgain",
    "textGroup",
    "thatsVeryNiceOfYou",
    "geography",
    "postCode",
    "postalCodeTxT",
    "postCodeBox",
    "postCodeRect",
    "country",
    "postalCodeTxT2",
    "postCodeBox2",
    "postCodeRect2",
    "multipleChoice",
    "question",
    "label",
    "options",
    "option1",
    "checkbox1",
    "option2",
    "checkbox4",
    "option3",
    "checkbox5",
    "question2",
    "label2",
    "frame22",
    "frame2",
    "question3",
    "label3",
    "frame3",
    "frame4",
    "whenGoingToWorkWalkingYourDogOrGoingShopping",
    "additionalQuestions",
    "frame5",
    "frame6",
    "select",
    "frame7",
    "frame8",
    "select2",
    "register",
    "registerRectangle"
  ],

  infoBoxAgainAgain: [
    "infoBoxAgainAgain",
    "textGroup",
    "thatsVeryNiceOfYou",
    "geography",
    "postCode",
    "postalCodeTxT",
    "postCodeBox",
    "postCodeRect",
    "country",
    "postalCodeTxT2",
    "postCodeBox2",
    "postCodeRect2",
    "multipleChoice",
    "question",
    "label",
    "options",
    "option1",
    "checkbox1",
    "option2",
    "checkbox4",
    "option3",
    "checkbox5",
    "question2",
    "label2",
    "frame22",
    "frame2",
    "question3",
    "label3",
    "frame3",
    "frame4",
    "whenGoingToWorkWalkingYourDogOrGoingShopping",
    "additionalQuestions",
    "frame5",
    "frame6",
    "select",
    "frame7",
    "frame8",
    "select2",
    "register",
    "registerRectangle"
  ],

  textGroup: ["textGroup", "thatsVeryNiceOfYou"],
  thatsVeryNiceOfYou: ["thatsVeryNiceOfYou"],
  geography: [
    "geography",
    "postCode",
    "postalCodeTxT",
    "postCodeBox",
    "postCodeRect",
    "country",
    "postalCodeTxT2",
    "postCodeBox2",
    "postCodeRect2"
  ],

  postCode: ["postCode", "postalCodeTxT", "postCodeBox", "postCodeRect"],
  postalCodeTxT: ["postalCodeTxT"],
  postCodeBox: ["postCodeBox", "postCodeRect"],
  postCodeRect: ["postCodeRect"],
  country: ["country", "postalCodeTxT2", "postCodeBox2", "postCodeRect2"],
  postalCodeTxT2: ["postalCodeTxT2"],
  postCodeBox2: ["postCodeBox2", "postCodeRect2"],
  postCodeRect2: ["postCodeRect2"],
  multipleChoice: [
    "multipleChoice",
    "question",
    "label",
    "options",
    "option1",
    "checkbox1",
    "option2",
    "checkbox4",
    "option3",
    "checkbox5"
  ],

  question: ["question", "label"],
  label: ["label"],
  options: [
    "options",
    "option1",
    "checkbox1",
    "option2",
    "checkbox4",
    "option3",
    "checkbox5"
  ],

  option1: ["option1", "checkbox1"],
  checkbox1: ["checkbox1"],
  option2: ["option2", "checkbox4"],
  checkbox4: ["checkbox4"],
  option3: ["option3", "checkbox5"],
  checkbox5: ["checkbox5"],
  question2: ["question2", "label2"],
  label2: ["label2"],
  frame22: ["frame22", "frame2"],
  frame2: ["frame2"],
  question3: ["question3", "label3"],
  label3: ["label3"],
  frame3: ["frame3", "frame4", "whenGoingToWorkWalkingYourDogOrGoingShopping"],
  frame4: ["frame4", "whenGoingToWorkWalkingYourDogOrGoingShopping"],
  whenGoingToWorkWalkingYourDogOrGoingShopping: [
    "whenGoingToWorkWalkingYourDogOrGoingShopping"
  ],

  additionalQuestions: [
    "additionalQuestions",
    "frame5",
    "frame6",
    "select",
    "frame7",
    "frame8",
    "select2"
  ],

  frame5: ["frame5", "frame6", "select"],
  frame6: ["frame6", "select"],
  select: ["select"],
  frame7: ["frame7", "frame8", "select2"],
  frame8: ["frame8", "select2"],
  select2: ["select2"],
  register: ["register", "registerRectangle"],
  registerRectangle: ["registerRectangle"]
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
  if (nodeName === "root") {
    func.displayName = "PlasmicQuestions";
  } else {
    func.displayName = `PlasmicQuestions.${nodeName}`;
  }
  return func;
}

export const PlasmicQuestions = Object.assign(
  // Top-level PlasmicQuestions renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginForm: makeNodeComponent("loginForm"),
    infoBox: makeNodeComponent("infoBox"),
    infoBoxDetail: makeNodeComponent("infoBoxDetail"),
    rectangleInfoBox: makeNodeComponent("rectangleInfoBox"),
    infoBoxAgain: makeNodeComponent("infoBoxAgain"),
    infoBoxAgainAgain: makeNodeComponent("infoBoxAgainAgain"),
    textGroup: makeNodeComponent("textGroup"),
    thatsVeryNiceOfYou: makeNodeComponent("thatsVeryNiceOfYou"),
    geography: makeNodeComponent("geography"),
    postCode: makeNodeComponent("postCode"),
    postalCodeTxT: makeNodeComponent("postalCodeTxT"),
    postCodeBox: makeNodeComponent("postCodeBox"),
    postCodeRect: makeNodeComponent("postCodeRect"),
    country: makeNodeComponent("country"),
    postalCodeTxT2: makeNodeComponent("postalCodeTxT2"),
    postCodeBox2: makeNodeComponent("postCodeBox2"),
    postCodeRect2: makeNodeComponent("postCodeRect2"),
    multipleChoice: makeNodeComponent("multipleChoice"),
    question: makeNodeComponent("question"),
    label: makeNodeComponent("label"),
    options: makeNodeComponent("options"),
    option1: makeNodeComponent("option1"),
    checkbox1: makeNodeComponent("checkbox1"),
    option2: makeNodeComponent("option2"),
    checkbox4: makeNodeComponent("checkbox4"),
    option3: makeNodeComponent("option3"),
    checkbox5: makeNodeComponent("checkbox5"),
    question2: makeNodeComponent("question2"),
    label2: makeNodeComponent("label2"),
    frame22: makeNodeComponent("frame22"),
    frame2: makeNodeComponent("frame2"),
    question3: makeNodeComponent("question3"),
    label3: makeNodeComponent("label3"),
    frame3: makeNodeComponent("frame3"),
    frame4: makeNodeComponent("frame4"),
    whenGoingToWorkWalkingYourDogOrGoingShopping: makeNodeComponent(
      "whenGoingToWorkWalkingYourDogOrGoingShopping"
    ),
    additionalQuestions: makeNodeComponent("additionalQuestions"),
    frame5: makeNodeComponent("frame5"),
    frame6: makeNodeComponent("frame6"),
    select: makeNodeComponent("select"),
    frame7: makeNodeComponent("frame7"),
    frame8: makeNodeComponent("frame8"),
    select2: makeNodeComponent("select2"),
    register: makeNodeComponent("register"),
    registerRectangle: makeNodeComponent("registerRectangle"),
    // Metadata about props expected for PlasmicQuestions
    internalVariantProps: PlasmicQuestions__VariantProps,
    internalArgProps: PlasmicQuestions__ArgProps
  }
);

export default PlasmicQuestions;
/* prettier-ignore-end */
