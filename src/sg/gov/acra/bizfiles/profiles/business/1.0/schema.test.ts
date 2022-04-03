import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import schema from "./schema.json";
import sampleDocJson from "./sample-document.json";
import axios from "axios";
import { testCommon } from "../../../common/tests/profile-schema.test";

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

describe("businessProfileSchema", () => {
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

  describe("commencementDate", () => {
    it("should return array of errors without commencementDate", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "commencementDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "commencementDate" },
          message: "should have required property 'commencementDate'"
        }
      ]);
    });
  });

  describe("renewalDate", () => {
    it("should return array of errors without renewalDate", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "renewalDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "renewalDate" },
          message: "should have required property 'renewalDate'"
        }
      ]);
    });
  });

  describe("expiryDate", () => {
    it("should return array of errors without expiryDate", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "expiryDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "expiryDate" },
          message: "should have required property 'expiryDate'"
        }
      ]);
    });
  });

  describe("renewalByGiro", () => {
    it("should return array of errors without renewalByGiro", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "renewalByGiro");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "renewalByGiro" },
          message: "should have required property 'renewalByGiro'"
        }
      ]);
    });
  });

  describe("businessConstitution", () => {
    it("should return array of errors without businessConstitution", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "businessConstitution");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "businessConstitution" },
          message: "should have required property 'businessConstitution'"
        }
      ]);
    });
  });

  describe("representatives", () => {
    it("should return array of errors without representatives", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "representatives");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "representatives" },
          message: "should have required property 'representatives'"
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
});
