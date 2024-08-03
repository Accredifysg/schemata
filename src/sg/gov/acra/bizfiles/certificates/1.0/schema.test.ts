import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import schema from "./schema.json";
import axios from "axios";
import {testCommon} from "../../common/1.0/tests/certificates-schema";

import businessSampleDocJson from "./sample-document-business.json";
import companySampleDocJson from "./sample-document-company.json";
import foreignCompanySampleDocJson from "./sample-document-foreign-company.json";
import llpSampleDocJson from "./sample-document-llp.json";
import lpSampleDocJson from "./sample-document-lp.json";

function loadSchema(uri: string) {
  return axios.get(uri).then(res => {
    return res.data;
  });
}
const ajv = new Ajv({ allErrors: true, loadSchema: loadSchema });
let validator: Ajv.ValidateFunction;

describe("businessCertificateSchema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });

  describe("testCommonRequired", () => {
    testCommon(schema, businessSampleDocJson);
  });

  describe("registrationDate", () => {
    it("should return array of errors without registrationDate", () => {
      const badDoc = omit(cloneDeep(businessSampleDocJson), "registrationDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toContainEqual({
        keyword: "required",
        dataPath: "",
        schemaPath: "#/anyOf/3/required",
        params: { missingProperty: "registrationDate" },
        message: "should have required property 'registrationDate'"
      });
    });
  });
});

describe("companyCertificateSchema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });

  describe("testCommonRequired", () => {
    testCommon(schema, companySampleDocJson);
  });

  describe("incorporationDate", () => {
    it("should return array of errors without incorporationDate", () => {
      const badDoc = omit(cloneDeep(companySampleDocJson), "incorporationDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toContainEqual({
        keyword: "required",
        dataPath: "",
        schemaPath: "#/anyOf/4/required",
        params: { missingProperty: "incorporationDate" },
        message: "should have required property 'incorporationDate'"
      });
    });
  });
});

describe("foreignCompanyCertificateSchema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });

  describe("testCommonRequired", () => {
    testCommon(schema, foreignCompanySampleDocJson);
  });

  describe("country", () => {
    it("should return array of errors without country", () => {
      const badDoc = omit(cloneDeep(foreignCompanySampleDocJson), "country");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toContainEqual({
        keyword: "required",
        dataPath: "",
        schemaPath: "#/anyOf/0/required",
        params: { missingProperty: "country" },
        message: "should have required property 'country'"
      });
    });
  });

  describe("incorporationDate", () => {
    it("should return array of errors without incorporationDate", () => {
      const badDoc = omit(cloneDeep(foreignCompanySampleDocJson), "incorporationDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toContainEqual({
        keyword: "required",
        dataPath: "",
        schemaPath: "#/anyOf/0/required",
        params: { missingProperty: "incorporationDate" },
        message: "should have required property 'incorporationDate'"
      });
    });
  });
});

describe("lpCertificateSchema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });

  describe("testCommonRequired", () => {
    testCommon(schema, lpSampleDocJson);
  });

  describe("registrationDate", () => {
    it("should return array of errors without registrationDate", () => {
      const badDoc = omit(cloneDeep(lpSampleDocJson), "registrationDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toContainEqual({
        keyword: "required",
        dataPath: "",
        schemaPath: "#/anyOf/1/required",
        params: { missingProperty: "registrationDate" },
        message: "should have required property 'registrationDate'"
      });
    });
  });
});

describe("llpCertificateSchema", () => {
  beforeAll(async () => {
    validator = await ajv.compileAsync(schema);
  });

  describe("testCommonRequired", () => {
    testCommon(schema, llpSampleDocJson);
  });

  describe("registrationDate", () => {
    it("should return array of errors without registrationDate", () => {
      const badDoc = omit(cloneDeep(llpSampleDocJson), "registrationDate");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toContainEqual({
        keyword: "required",
        dataPath: "",
        schemaPath: "#/anyOf/2/required",
        params: { missingProperty: "registrationDate" },
        message: "should have required property 'registrationDate'"
      });
    });
  });
});
