/* eslint-disable jest/no-export */
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


    describe("receiptNumber", () => {
      it("should return array of errors without receiptNumber", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "receiptNumber");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "receiptNumber" },
            message: "should have required property 'receiptNumber'"
          }
        ]);
      });
    });

    describe("receiptDate", () => {
      it("should return array of errors without receiptDate", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "receiptDate");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "receiptDate" },
            message: "should have required property 'receiptDate'"
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
