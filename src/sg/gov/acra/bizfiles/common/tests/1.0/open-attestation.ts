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

export function testOaCommon(schema: object, sampleDocJson: object) {
  describe("oaTest", () => {
    beforeAll(async () => {
      validator = await ajv.compileAsync(schema);
    });
    it("should work with valid json", () => {
      expect(validator(sampleDocJson)).toBe(true);
    });

    // To test if business profile was mapped correctly
    it("should return array of errors without entityName name", () => {
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

    // To test if oa schema was mapped correctly
    it("should return array of errors without issuer name", () => {
      const badDoc = omit(cloneDeep(sampleDocJson), "issuers[0].name");
      expect(validator(badDoc)).toBe(false);
      expect(validator.errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            keyword: "required",
            dataPath: ".issuers[0]",
            schemaPath: "#/required",
            params: { missingProperty: "name" },
            message: "should have required property 'name'"
          })
        ])
      );
    });
  });
}
