import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import schema from "./schema.json";
import sampleDocJson from "./sample-document.json";
import axios from "axios";
import { testCommon } from "../../../common/tests/profile-schema";

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

describe("companyProfileSchema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });

  describe("companyType", () => {
    it("should return array of errors without companyType", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "companyType");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "companyType" },
          message: "should have required property 'companyType'"
        }
      ]);
    });
  });

  describe("capitals", () => {
    it("should return array of errors without capitals", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "capitals");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "capitals" },
          message: "should have required property 'capitals'"
        }
      ]);
    });
  });

  describe("auditFirms", () => {
    it("should return array of errors without auditFirms", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "auditFirms");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "auditFirms" },
          message: "should have required property 'auditFirms'"
        }
      ]);
    });
  });

  describe("charges", () => {
    it("should return array of errors without charges", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "charges");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "charges" },
          message: "should have required property 'charges'"
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

  describe("shareholders", () => {
    it("should return array of errors without shareholders", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "shareholders");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toStrictEqual([
        {
          keyword: "required",
          dataPath: "",
          schemaPath: "#/required",
          params: { missingProperty: "shareholders" },
          message: "should have required property 'shareholders'"
        }
      ]);
    });
  });
});
