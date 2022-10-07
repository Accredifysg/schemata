import Ajv from "ajv";
import { cloneDeep, omit } from "lodash";
import axios from "axios";

function loadSchema(uri: string) {
  return axios.get(uri).then(res => {
    return res.data;
  });
}
const ajv = new Ajv({ allErrors: true, loadSchema: loadSchema });
let validator: Ajv.ValidateFunction;

// eslint-disable-next-line jest/no-export
export function testCommon(schema: object, sampleDocJson: object) {
  describe("commonTests", () => {
    beforeAll(async () => {
      validator = await ajv.compileAsync(schema);
    });
    it("should work with valid json", () => {
      expect(validator(sampleDocJson)).toBe(true);
    });

    describe("entityName", () => {
      it("should return array of errors without entityName", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "entityName");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "entityName" },
            message: "should have required property 'entityName'"
          }
        ]);
      });
    });

    describe("uen", () => {
      it("should return array of errors without uen", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "uen");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "uen" },
            message: "should have required property 'uen'"
          }
        ]);
      });
    });

    describe("status", () => {
      it("should return array of errors without status", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "status");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "status" },
            message: "should have required property 'status'"
          }
        ]);
      });
    });

    describe("statusDate", () => {
      it("should return array of errors without statusDate", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "statusDate");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "statusDate" },
            message: "should have required property 'statusDate'"
          }
        ]);
      });
    });

    describe("address", () => {
      it("should return array of errors without address", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "address");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "address" },
            message: "should have required property 'address'"
          }
        ]);
      });
    });

    describe("activities", () => {
      it("should return array of errors without activities", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "activities");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "activities" },
            message: "should have required property 'activities'"
          }
        ]);
      });
    });

    describe("signatureName", () => {
      it("should return array of errors without signatureName", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "signatureName");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "signatureName" },
            message: "should have required property 'signatureName'"
          }
        ]);
      });
    });
  });
}
