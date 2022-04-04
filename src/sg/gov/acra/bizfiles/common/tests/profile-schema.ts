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

    describe("qrCode", () => {
      it("should return array of errors without qrCode", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "qrCode");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "qrCode" },
            message: "should have required property 'qrCode'"
          }
        ]);
      });
    });

    describe("authenticationNumber", () => {
      it("should return array of errors without authenticationNumber", () => {
        const badDoc = omit(cloneDeep(sampleDocJson), "authenticationNumber");
        expect(validator(badDoc)).toBe(false);
        expect(validator.errors).toStrictEqual([
          {
            keyword: "required",
            dataPath: "",
            schemaPath: "#/required",
            params: { missingProperty: "authenticationNumber" },
            message: "should have required property 'authenticationNumber'"
          }
        ]);
      });
    });
  });
}
