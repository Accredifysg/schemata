import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import schema from "./schema.json";
import sampleDocJson from "./sample-document.json";
import axios from "axios";
import {testCommon} from "../../../common/tests/1.0/profile-schema";

function loadSchema(uri: string) {
  return axios.get(uri).then(res => {
    return res.data;
  });
}
const ajv = new Ajv({ allErrors: true, loadSchema: loadSchema });
let validator: Ajv.ValidateFunction;

describe("testCommonRequired", () => {
  testCommon(schema, sampleDocJson);
});

describe("limitedLiabilityPartnershipProfileSchema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });

  describe("registrationDate", () => {
    it("should return array of errors without registrationDate", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "registrationDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "registrationDate" },
          message: "should have required property 'registrationDate'"
        }
      ]);
    });
  });

  describe("partners", () => {
    it("should return array of errors without partners", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "partners");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "partners" },
          message: "should have required property 'partners'"
        }
      ]);
    });
  });

  describe("managers", () => {
    it("should return array of errors without managers", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "managers");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "managers" },
          message: "should have required property 'managers'"
        }
      ]);
    });
  });
});
